import { Telegraf } from "telegraf";

// const { message } = require("telegraf/filters");

const TOKEN = "6637720245:AAGLltaPLybSJxuXWkZDthbN92TSOLwQUvA";

const bot = new Telegraf(TOKEN);
console.log("Running BOT");
// bot.start((ctx) => ctx.reply("Welcome to CARDANO MAZE"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
// bot.on(message("sticker"), (ctx) => ctx.reply("👍"));
// bot.hears("hi", (ctx) => ctx.reply("Hey there"));
console.log("Start Running commands");
bot.command("start", (ctx) => ctx.reply("Hello and Welcome"));
// bot.command("mine", (ctx) => ctx.reply("You are minning"));
// bot.command("help", (ctx) => ctx.reply("How can we help you"));
// bot.command("hipster", Telegraf.reply("λ"));
// bot.launch();
console.log("End Running commands");

// Enable graceful stop
console.log("Running SIGNIT");

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
bot.launch();
