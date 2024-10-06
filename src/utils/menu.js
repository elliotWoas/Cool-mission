import { Keyboard } from "grammy";

//contact request button
export const contactRqButton = new Keyboard()
  .add(Keyboard.requestContact("Share Contact"))
  .oneTime()
  .resized();

//mainMenu for all user
export const mainMenu = new Keyboard()
  .text("آموزش ها").row()
  .text("ماموریت ها ")
  .text("محصولات").row()
  .text("درباره ما")
  .text("کد های که نیازه ")
  .oneTime()
  .resized()

export default {
  contactRqButton,
  mainMenu,
};
