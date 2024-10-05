import { Keyboard } from "grammy";

//contact request button
export const contactRqButton = new Keyboard()
  .add(Keyboard.requestContact("Share Contact"))
  .oneTime()
  .resized();

//mainMenu for all user
export const mainMenu = new Keyboard()
  .text("آموزش ها")
  .text("درباره ما")
  .text("ماموریت ها ")
  .text("کد های که نیازه ");

  export default {
    contactRqButton,
    mainMenu,
  }