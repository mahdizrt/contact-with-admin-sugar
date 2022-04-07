import express from "express";
import { webhookCallback } from "grammy";

import { bot } from "./bot";
import { env } from "./config";

const domain = env.DOMAIN;
const secretPath = env.TOKEN;

const app = express();

app.use(express.json());
app.use(`/${secretPath}`, webhookCallback(bot, "express"));

export { app };
