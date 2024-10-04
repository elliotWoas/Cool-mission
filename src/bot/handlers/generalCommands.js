import menu from '../../utils/menu.js';

export const handleStart = async (ctx) => {
  ctx.reply('welcome to golestan mehdi first step pls share your contact :):', {reply_markup: menu.contactRqButton})
};
