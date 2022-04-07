import { env } from "./config";

import { bot } from "./bot";
import { app } from "./app";

const PORT = env.PORT;

const run = () => {
  if (env.isDev) {
    bot.start({
      onStart: () => {
        console.log("Bot started");
      },
    });
  } else {
    app.listen(PORT, async () => {
      console.log(`server started on port ${PORT}`);
    });
  }
};

run();
