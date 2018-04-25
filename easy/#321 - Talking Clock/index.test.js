const { timeIsAM, splitTime, converHourToStr } = require('./index');

describe('split time', () => {
  test('should return an object', () => {
    expect(typeof splitTime('12:05')).toBe('object');
  })
  test('should have length 2', () => {
    expect(splitTime('01:30')).toMatchObject({ hour: 1, min: 30 });
  });
})

describe('am/pm', () => {
  test('it is am', () => {
    expect(timeIsAM(0)).toBe(true);
    expect(timeIsAM(1)).toBe(true);
    expect(timeIsAM(2)).toBe(true);
    expect(timeIsAM(3)).toBe(true);
    expect(timeIsAM(4)).toBe(true);
    expect(timeIsAM(5)).toBe(true);
    expect(timeIsAM(7)).toBe(true);
    expect(timeIsAM(8)).toBe(true);
    expect(timeIsAM(9)).toBe(true);
    expect(timeIsAM(10)).toBe(true);
    expect(timeIsAM(11)).toBe(true);
  });
  test('it is pm', () => {
    expect(timeIsAM(12)).toBe(false);
    expect(timeIsAM(13)).toBe(false);
    expect(timeIsAM(14)).toBe(false);
    expect(timeIsAM(15)).toBe(false);
    expect(timeIsAM(16)).toBe(false);
    expect(timeIsAM(17)).toBe(false);
    expect(timeIsAM(18)).toBe(false);
    expect(timeIsAM(19)).toBe(false);
    expect(timeIsAM(20)).toBe(false);
    expect(timeIsAM(21)).toBe(false);
    expect(timeIsAM(22)).toBe(false);
    expect(timeIsAM(23)).toBe(false);
  });
  test('throws an error', () => {
    expect(() => timeIsAM(-1)).toThrow();
    expect(() => timeIsAM(24)).toThrow();
  });
});

describe('convert time to string', () => {
  test('hours', () => {
    expect(converHourToStr(1)).toBe('one');
  });
});

// describe('the hour', () => {

// });

// describe('the minutes', () => {

// });