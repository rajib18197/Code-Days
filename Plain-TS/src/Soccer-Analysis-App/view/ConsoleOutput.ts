import { TargetOutput } from "../controller/Organizer";

export class ConsoleOutput implements TargetOutput {
  print(summary: string): void {
    console.log(summary, 111);
  }
}
