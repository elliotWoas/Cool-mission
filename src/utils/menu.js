import { Keyboard } from "grammy";

//contact request button
export const contactRqButton = new Keyboard()
  .add(Keyboard.requestContact("Share Contact"))
  .oneTime()
  .resized();
