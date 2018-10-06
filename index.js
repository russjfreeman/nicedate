'use strict';

module.exports.out = getNiceDate;

function getNiceDate( date, withTime ) {
    date = date || new Date;
  
    if(!(date instanceof Date)) {
        date = new Date(date);
    }
  
    if (isNaN(date)) {
        throw TypeError('Date is invalid');
    }
  
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const day = days[ date.getDay()];
    const dayOfMonth = getDayOfMonth( date.getDate() );
    const month = months[ date.getMonth() ];
  
    return day + " " + month + " " + dayOfMonth + " " + date.getFullYear() +
      (withTime ? " @ " + zeroPad( date.getHours() ) + ":" + zeroPad( date.getMinutes() ): "")
      ;
  }
  
  function zeroPad( num ) {
    return ('00' + num).slice(-2)
  }
  

function getDayOfMonth( dayOfMonth ) {
    switch(dayOfMonth) {
        case 1: return "1st";
        case 2: return "2nd";
        case 3: return "3rd";
        case 21: return "21st";
        case 22: return "22nd";
        case 23: return "23rd";
        case 31: return "31st";
    }
    return dayOfMonth + "th" 
}