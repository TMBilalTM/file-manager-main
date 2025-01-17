import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

crons.interval(
  "delete any old files marked for deletion",
  { minutes: 10 },
  internal.files.deleteAllFiles
);

export default crons;
