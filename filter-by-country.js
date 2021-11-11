const through = require("through2");
module.exports.filterByCountry = (country) => {
    return through.obj((buf, enc, next)=> {
        if(buf.country === country) next(null, buf);
        else next(null,null);
      })
};