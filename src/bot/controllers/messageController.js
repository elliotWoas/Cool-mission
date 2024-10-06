import menu from '../../utils/menu.js';
import { User } from "../../database/models/User.js"

export const handleStartMessage = async (ctx) => {
    const telegramId = ctx.message.from.id
    
    // check user in db
    const user = await User.findOne({ telegramId })
    try {
        if(user) {
            await ctx.reply('سلام خوشگله خوش برگشتی. دوست داری الان چیکار کنیم ؟! ', { reply_markup: menu.mainMenu })
        }else {
            ctx.reply('welcome to golestan mehdi first step pls share your contact :):', {reply_markup: menu.contactRqButton})
        }
    }catch (err) {

    }
}
