import { Bot } from "grammy";

import env from "dotenv";
env.config();

const bot = new Bot(process.env.BOT_TOKEN);

//send hi there msg to the user and log information
bot.on("message", (ctx) => {
  ctx.reply("hi there!");
  console.log(ctx.from);
});

//start the bot with functionality
const start = async () => {
  bot.start();
  console.log("bot running...");
};

start();
