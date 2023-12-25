const axios = require("axios");
const fs = require("fs");
const readline = require("readline");
const async = require("async");

const inputFile = "usernames.txt";
const outputFile = "hits.txt";
const baseUrl = "https://fragment.com/?query=";
const keyword = "Unavailable";
const concurrency = 5; // Maximum number of concurrent requests

const processLine = (line, callback) => {
  axios
    .get(`${baseUrl}${line}`)
    .then((response) => {
      console.log(`${line} - checked`);
      if (response.data.includes(keyword)) {
        fs.appendFileSync(outputFile, line + "\n");
      }
      callback(); // Successfully processed the line
    })
    .catch((error) => {
      console.error(`Error processing ${line}:`, error.message);
      callback(error); // Pass the error to the callback
    });
};

const processFile = async () => {
  const lines = [];

  const fileStream = fs.createReadStream(inputFile);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    lines.push(line.trim());
  }

  async.eachLimit(lines, concurrency, processLine, (err) => {
    if (err) {
      console.error("A line failed to process");
    } else {
      console.log("All lines have been processed successfully");
    }
  });
};

processFile();
