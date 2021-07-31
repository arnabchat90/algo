// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(M) {
  M = JSON.parse(M);
  let tuples = [];
  for (let i = 0; i < M.length; i++) {
    let currentStudentObj = { studentID: i, connections: [] };
    let currentConnections = [];
    let socialCircles = [];
    for (let j = 0; j < M[i].length; j++) {
      if (i !== j && M[i][j] == 1) {
        currentConnections.push(i);
        currentConnections.push(j);
      }
    }
    currentStudentObj.connections = currentConnections;
    tuples.push(currentStudentObj);
  }

  let socialCircles = [];
  let shouldInsertNewSocialCircle = true;
  tuples.forEach(item => {
    let currentSocialCircle = [];
    item.connections.forEach(student => {
      //insert direct friends first

      let isPresent = socialCircles.filter(circle => {
        return circle.find(i => i == student);
      });
      if (isPresent.length > 0) {
        currentSocialCircle = [...isPresent[0]];
        shouldInsertNewSocialCircle = false;
      }
      currentSocialCircle.push(student);
      //now find all friends of current friend
      if (item.studentID !== student) {
        //this student is a friend, now find out all the connections of this student
        var currentStudentTuple = tuples.filter(tup => {
          return tup.studentID == student;
        });
        currentSocialCircle = [
          ...currentSocialCircle,
          ...currentStudentTuple[0].connections
        ];
        //find unique
        currentSocialCircle = currentSocialCircle.filter(
          (item, index) => currentSocialCircle.indexOf(item) === index
        );
        //update the inital social array
        if (shouldInsertNewSocialCircle == false) {
          isPresent[0] = currentSocialCircle;
        }
      }
    });
    if (item.connections.length == 0) {
      socialCircles.push([item.studentID]);
    }
    if (shouldInsertNewSocialCircle) {
      socialCircles.push(currentSocialCircle);
    }
  });
  //remove empty
  socialCircles = socialCircles.filter(item => {
    return item.length !== 0;
  });
  //sort circles
  let sortedsocialCircles = socialCircles.sort((a, b) => {
    return a[0] - b[0];
  });
  //create the output string
  let outputString = "";
  sortedsocialCircles.forEach(circle => {
    outputString += circle.join(",");
    outputString += "|";
  });
  return outputString.replace(/\|+$/, "");
  // M is now your relationship matrix SxS
}

console.log(solution("[[1,1,1],[1,1,0],[1,0,1]]"));
