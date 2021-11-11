
/*
3)
const fs = require("fs");
const through = require("through2");
process.stdin.pipe(toUpper()).pipe(process.stdout)

function toUpper() {
  return through(function (buf, enc, next) {
      console.log("Buffer geldi");
      buf = buf.toString()
      console.log("stringe çevirildi");
        buf = buf.toUpperCase()
        console.log("string büyük harf yapıldı");
    next(null, buf)
  })
}
*/

/*4*/
// const fs = require("fs");
// const zlib = require('zlib');

// fs.createReadStream("data.csv.gz")
//    .pipe(zlib.createGunzip())
//    .pipe(fs.createWriteStream("fswd.txt"));
// console.log("File Decompressed.");


const { createReadStream,createWriteStream } = require('fs');
const parse = require('csv-parse');
const { createGunzip } = require("zlib");
 const { filterByCountry } = require('./filter-by-country.js');
 const { sumProfit } = require('./sum-profit.js');
const through = require("through2");
const csvParser = parse({ columns: true })

createReadStream('data.csv.gz')
  .pipe(createGunzip())
  .pipe(csvParser)
  .pipe(filterByCountry('Italy')) 
  .pipe(sumProfit())
  .pipe(process.stdout)                  


//let data = "";


//const readStream = fs.createReadStream("./data.csv");

// readStream.on("data", (chunk) => {
//     console.log(chunk);
// });
//process.stdin.pipe(process.stdout);

// process.stdin.on("data", (chunk) => {
//     process.stdout.write(chunk.toString().toUpperCase());
//     //console.log(chunk.toString().replace("\n","")+" __");
// });
// readStream.pipe(process.stdout);
//readablestream pipe to writeablestream