/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let results = [];

  if (intervals.length == 0) return [newInterval];

  for (let i = 0; i < intervals.length; i++) {
    let firstStart = intervals[i][0];
    let firstEnd = intervals[i][1];
    if (newInterval && firstEnd >= newInterval[0]) {
      if (firstEnd > newInterval[1]) {
        intervals[i] = [firstStart, firstEnd];
      } else intervals[i] = [firstStart, newInterval[1]];
      newInterval = null;
    }
    if (i + 1 == intervals.length) {
      results.push([...intervals[i]]);
      return results;
    }
    let secondStart = intervals[i + 1][0];
    let secondEnd = intervals[i + 1][1];

    if (intervals[i][1] >= secondStart) {
      if (intervals[i][1] > secondEnd)
        intervals[i] = [intervals[i][0], intervals[i][1]];
      else intervals[i] = [intervals[i][0], secondEnd];
    } else {
      results.push(intervals[i]);
    }
  }

  return results;
};

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
