const timeIsAM = hour => {
  if (hour > 23 || hour < 0) {
    throw `${hour} is not a valid hour`
  } else if (hour <= 11) {
    return true;
  } else {
    return false;
  }
};

const converHourToStr = hour => {
  const voc = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four', 
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve'
  };
  const str = voc[hour];
  return str;
}

const splitTime = time => {
  const split = time.split(':');
  const obj = { hour: parseInt(split[0]), min: parseInt(split[1]) };
  return obj;
}

const printTime = time => {
  const { hour, min } = splitTime(time);
  const isAM = timeIsAM(hour);
  // const hourStr = ;
  // const minStr = ;
  // const str = `It's ${hourStr} ${minStr} ${isAm ? 'am' : 'pm'}`;
  // return str;
}

module.exports = { timeIsAM, splitTime, converHourToStr };