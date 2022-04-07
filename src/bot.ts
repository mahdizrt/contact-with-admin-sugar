import { Bot } from "grammy";

import { env } from "./config";
import { nouns } from "./nouns";

const bot = new Bot(env.TOKEN);

bot.command("start", (ctx) => {
  ctx.reply(nouns.WELCOME + "😊");
});

bot.on("message", async (ctx) => {
  if (!ctx.message.text) return;

  if (ctx.from.id === env.ADMIN_ID) {
    if (ctx.message.reply_to_message?.text) {
      const replyText = ctx.message.reply_to_message.text;
      const id = replyText.substring(5, replyText.indexOf("\n")).trim();
      await bot.api.sendMessage(id, ctx.message.text);
      await ctx.reply(nouns.MESSAGE_SEND + "✅");
    }
  } else {
    await bot.api.sendMessage(
      env.ADMIN_ID,
      `
User: ${ctx.chat.id}
🧍 Name: ${ctx.from.first_name} ${ctx.from.last_name || ""}
👤 username: @${ctx.from.username || "no username"}
==================
${ctx.message.text}
==================
    `
    );
    await ctx.reply(nouns.MESSAGE_SEND + "✅");
  }
});

export { bot };
