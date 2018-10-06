const nicedate = require( "./");

console.log(nicedate.out(Date()) );

console.log(nicedate.out("2018-02-22") );

console.log(nicedate.out("2018-01-01") );

console.log(nicedate.out("2018-01-03 10:11", true) );

console.log( "All done! :-)" );

process.exit();