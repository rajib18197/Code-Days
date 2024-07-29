import fs from "fs";
import { TargetOutput } from "../controller/Organizer";

export class HTMLOutput implements TargetOutput {
  constructor(public season: string) {}

  print(summary: string): void {
    const html: string = `
        <div>
            <h2>Summary of Season - ${this.season}</h2>
            <div>
                <p>${summary}</p>
            </div>
        </div>
    `;

    this.writeFile(`report-${this.season}.html`, html);
  }

  private writeFile(fileName: string, data: string) {
    fs.writeFileSync(fileName, data);
  }
}
