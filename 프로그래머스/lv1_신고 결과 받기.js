function solution(id_list, report, k) {
  var answer = [];
  const map = new Map();
  for (const i of report) {
    const [arr1, arr2] = i.split(" ");
    if (!map.has(arr1)) {
      map.set(arr1, [arr2]);
    } else {
      if (!map.get(arr1).includes(arr2)) {
        map.get(arr1).push(arr2);
      }
    }
  }
  let arrMap = new Map();
  map.forEach((a) => {
    for (const i of a) {
      if (!arrMap.has(i)) {
        arrMap.set(i, 1);
      } else {
        arrMap.set(i, arrMap.get(i) + 1);
      }
    }
  });
  const reportedIdList = [];
  for (const i of arrMap) {
    if (i[1] >= k) {
      reportedIdList.push(i[0]);
    }
  }

  for (const i of id_list) {
    let num = 0;
    if (map.has(i)) {
      for (const j of reportedIdList) {
        if (map.get(i).includes(j)) {
          num++;
        }
      }
    }
    answer.push(num);
  }

  return answer;
}
