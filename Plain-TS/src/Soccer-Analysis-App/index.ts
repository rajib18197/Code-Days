// import { ConsoleOutput } from "./view/ConsoleOutput";
// import { HTMLOutput } from "./view/HTMLOutput";
// import { CSVFileReader } from "./model/delegation/CSVFileReader";
// import { TeamAnalyzer } from "./model/TeamAnalyzer";
import { Organizer } from "./controller/Organizer";
import { MatchReader } from "./model/delegation/MatchReader";

// 1)
// const init = function (): void {
//   const SEASON: string = "2018-19";

//   const matchReader: MatchReader = new MatchReader(
//     new CSVFileReader("football.csv")
//   );
//   matchReader.load();

//   const organizer: Organizer = new Organizer(
//     new TeamAnalyzer("Man United", matchReader.matches, SEASON),
//     new HTMLOutput(SEASON)
//   );

//   organizer.analyzeAndPrintReport();
// };

// 2)
const init = function (): void {
  const SEASON: string = "2018-19";

  const matchReader: MatchReader = MatchReader.fromCSV("football.csv");
  matchReader.load();

  const organizer: Organizer = Organizer.TeamAnalysisWithHTMLReport(
    "Man United",
    matchReader.matches,
    SEASON
  );

  organizer.analyzeAndPrintReport();
};

// Initialize the App
init();

/************************* 
 🔒 Problem Statement


👨‍💻 Let's say you are a Software Engineer, working for a well reputated football club and you have an excel spreadsheet which has the information of all the matches that were played in a season.

🟩 Recently, 2018-19 season has finished and so you have a business to deliver.

💼 your job is to:
    1️⃣ load that file
    2️⃣ parse that file to design data structures of your need 
    3️⃣ do some analysis (i.e. how many matches wins, loses, draws etcetra.)
    4️⃣ generate a report (i.e. HTML or PDF or some other formats)


💬 Show that generated report to "the Manager and the Coach" of the club. 
    
💯 Bravo!!! You are Done ✅. Check your Credit Card to see a Massive Surprise 💲💲💲.

***************************/
