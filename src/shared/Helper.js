/**
* How to use this helper:
  1) import the helper in your file
  2) Create an instance (you can do it under render method):
    const helper = new Helper();
  3) Use helper methods:
    helper.formatDate( new Date() )
*/

import Constants from './Constants';

export default class Helper{

  formatDate(date, renderHoursAndMinutes = true){
    let hoursAndMinutesString = '';
    const targetDate = new Date(date),
          month = constants.months[targetDate.getMonth()],
          day = targetDate.getDate(),
          year = targetDate.getFullYear();

          if(renderHoursAndMinutes){
            const hours = targetDate.getHours(),
                  minutes = targetDate.getMinutes()
                  ampm = hours < 12 ? 'a.m.' : 'p.m.';
            hoursAndMinutesString = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`
          }

    return `${month}. ${day}/${year} ${hoursAndMinutesString}`;
  }

}
