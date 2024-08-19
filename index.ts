import express from "express";
import remindersRouter from "./routes/reminders";

const app: express.Application = express();

app.use("/reminders", remindersRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => console.log(`server listening on port: 3000`));
