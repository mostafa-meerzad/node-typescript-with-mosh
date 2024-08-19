import { Router } from "express";
import CreateReminderDto from "../dto/createReminders";

const router = Router();
// dto => data transfer object
// now this interface living here is not the best thing to do, move it in a separate folder along with other interfaces
// interface CreateReminderDto {
//   title: string;
// }

router.get("/", (req, res) => {
  res.send("list of reminders");
});

router.post("/", (req, res) => {
  //  (req.body as CreateReminderDto).title;// now only properties described in the interface are allowed
  const { title } = req.body as CreateReminderDto; // we only need the title 
  res.json(title);
});

export default router;
