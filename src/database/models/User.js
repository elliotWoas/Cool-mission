import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    telegramId: { type: String, required: true, unique: true},
    firstName: { type: String, required: true,},
    userName: { type: String, unique: true, },
});

export const User = mongoose.model("User", userSchema)
