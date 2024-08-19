import { Router } from "express";
import CreateReminderDto from "../dto/createReminders";
import Reminder from "../models/reminder";

const router = Router();
// dto => data transfer object
// now this interface living here is not the best thing to do, move it in a separate folder along with other interfaces
// interface CreateReminderDto {
//   title: string;
// }

// create an array for storing reminders

const reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.json(reminders);
});

router.post("/", (req, res) => {
  //  (req.body as CreateReminderDto).title;// now only properties described in the interface are allowed
  const { title } = req.body as CreateReminderDto; // we only need the title
  //   res.json(title);
  // implement this route to store reminders

  // const reminder = {id:Date.now(), title, isCompleted: false}// generating an id and setting siCompleted to true/false is not the responsibility of a router, a router must only handle routing

  // after creating reminder model

  const reminder = new Reminder(title); // now we only need to pass title and we will have a reminder object
  reminders.push(reminder);
  res.status(201).send(reminder); // send the newly created reminder
});

export default router;
