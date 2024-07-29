const fs = require("fs");
// <Buffer 46 72 69 65 6e 64 31 30> Friend10
const dateStrToDate = function (date) {
  // 10/08/2018
  const [day, month, year] = date.split("/");
  return new Date(year, month - 1, day).toDateString();
};

class CSVFileReader {
  data = [];

  constructor(fileName) {
    this.fileName = fileName;
  }

  // read() {
  //   this.data = fs
  //     .readFileSync(this.fileName, "utf-8")
  //     .split("\n")
  //     .map((row) => {
  //       return row.split(",");
  //     })
  //     .map((row) => {
  //       return [
  //         dateStrToDate(row[0]),
  //         row[1],
  //         row[2],
  //         parseInt(row[3], 10),
  //         parseInt(row[4], 10),
  //         row[5],
  //         row[6],
  //       ];
  //     });
  // }

  read() {
    this.data = fs
      .readFileSync(this.fileName, "utf-8")
      .split("\n")
      .map((row) => {
        return row.split(",").map((row, i) => {
          if (i === 0) return dateStrToDate(row);
          if (i === 3 || i === 4) return parseInt(row);
          if (i === 5) {
            const val = row;
            return val;
          }
          return row;
        });
      });
  }
}

const reader = new CSVFileReader("../../Plain-TS/src/data/football.csv");
reader.read();

console.log(reader.data);

const rawCSVData = `
 10/08/2018,Man United,Leicester,2,1,H,A Marriner
 11/08/2018,Bournemouth,Cardiff,2,0,H,K Friend
`;

const splitByNewLine = [
  "10/08/2018,Man United,Leicester,2,1,H,A Marriner",
  "11/08/2018,Bournemouth,Cardiff,2,0,H,K Friend",
];

const splitByComma = [
  ["10/08/2018", "Man United", "Leicester", "2", "1", "H", "A Marriner"],
  ["11/08/2018", "Bournemouth", "Cardiff", "2", "0", "H", "K Friend"],
];
