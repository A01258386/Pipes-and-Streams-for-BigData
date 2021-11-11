const through = require("through2");
module.exports.sumProfit = () => {
    let total = 0;
    return through.obj((buf, enc, next)=> {
        total+=Number(buf.profit);
        console.log('\033[2J');
       next(null, "Total :"+total+"\n");
      })
};