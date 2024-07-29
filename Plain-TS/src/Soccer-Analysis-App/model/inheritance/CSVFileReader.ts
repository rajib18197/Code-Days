import fs from "fs";

export abstract class CSVFileReader<T> {
  private fileContents: string = "";
  data: T[] = [];

  constructor(public fileName: string) {}

  abstract appSpecificFileDataTransformation(row: string[]): T;

  read(): void {
    // read the File and get the content inside that file
    this.fileContents = this.readFile();
    // transform the file's information into "A Nice Usable Data Structure"
    const fileData: string[][] = this.fileTransformer();
    // Whoever extends this class must do the further tranformation with the abstract method we expose to fit their application specific requirements and after invoking that method for each fileData, we store the new data structure into "this.data" property. So in this case we implement some functionality upfront and also give the users to add an additional functionality for highest degree of flexibility and reusability.
    this.data = fileData.map(this.appSpecificFileDataTransformation);
  }

  private fileTransformer(): string[][] {
    return this.fileContents.split("\n").map((row: string): string[] => {
      return row.split(",");
    });
  }

  private readFile(): string {
    return fs.readFileSync(this.fileName, "utf-8");
  }
}
