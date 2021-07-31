/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n -> number of empty sequences
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
  // Write your code here
  let arrayOfSequences = [];
  let lastAnswer = 0;
  for (let i = 0; i < n; i++) {
    arrayOfSequences.push([]);
  }
  let finalAnswerArray = [];
  queries.forEach(q => {
    //each query which is another array where first index is query type and 2 and 3rd are x and y
    if (q[0] == 1 || q[0] == 2) {
      //valid query type
      const x = q[1];
      const y = q[2];
      if (q[0] == 1) {
        executeFirstQuery(x, y, arrayOfSequences, lastAnswer);
      } else {
        lastAnswer = executeSecondQuery(x, y, lastAnswer, arrayOfSequences);
        finalAnswerArray.push(lastAnswer);
      }
    } else {
      throw new Error("Invalid Query Type");
    }
  });
  return finalAnswerArray;
}

function executeFirstQuery(x, y, arrayOfSequences, lastAnswer) {
  const seqIndex = (x ^ lastAnswer) % arrayOfSequences.length;
  arrayOfSequences[seqIndex].push(y);
}

function executeSecondQuery(x, y, lastAnswer, arrayOfSequences) {
  const seqIndex = (x ^ lastAnswer) % arrayOfSequences.length;
  let currentSeq = arrayOfSequences[seqIndex];
  if (currentSeq == null) {
    throw new Error("No such Seq");
  }
  lastAnswer = currentSeq[y % currentSeq.length];
  //console.log(lastAnswer);
  return lastAnswer;
}

//driver code

const n = 2;
const queries = [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1]
];

console.log(dynamicArray(n, queries));
