import { exec } from "child_process";
import { promisify } from "util";

const execute = promisify(exec);

export async function executeCommand(command: string) {
  try {
    await execute(command);
  } catch (error) {
    throw error;
  }
}
