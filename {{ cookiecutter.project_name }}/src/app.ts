import * as fs from "fs";
import * as _ from "lodash";
import { logger } from "./logger";

console.log(`hello world ${new Date()}`);
// throw new Error("ALERT!");

logger.info("some info", {
  msg: { a: "some message", b: new Date(), c: true }
});
process.stdin.resume();
