const app = require("./app.js");
const { dbConnect } = require("./db/db.js");

dbConnect().then((successMsg) =>
  console.log(successMsg).catch((err) => console.error(err.message))
);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}!!!`);
});
