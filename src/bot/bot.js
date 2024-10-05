import { Bot } from "grammy"; 
import { handleStart } from './handlers/generalCommands.js'
import env from "dotenv";
import connectDB from "../database/db.js";
env.config();

const bot = new Bot(process.env.BOT_TOKEN);

//send hi there msg to the user and log information
bot.command('start', handleStart)

bot.on("message", (ctx) => {
  ctx.reply("hi there!");
  console.log(ctx.from);
});

//start the bot with functionality
const start = async () => {
  await connectDB();
  bot.start();
  console.log("bot running...");
};

start();