function path(i, j, Array){
  let road = [i+1]
  function find_road(i, j, Array){
    //console.log(Array)
    //console.log(Array[i][j])
    let k = Array[i][j]
    if(Array[i][j]==0){
      return
    }
    find_road(i,k, Array)
    road.push(k+1)
    find_road(k,j, Array)
    }
    find_road(i, j, Array)

    road.push(j+1)
    return road
}

export default function floyd(Array){
  let Road = []; //ініціалізація масиву, де буде записаний шлях. Одразу заповнюємо його одиницями – шлях завжди починається з першої вершини графу(з першої станції)
  for (let i = 0; i < Array.length; i++) {
    let doparr = []
    for (let j = 0; j < Array[i].length; j++) {
      doparr.push(0);
    }
    Road.push(doparr)
  }
  for (let i = 0; i < Array.length; i++) {
    for (let j = 0; j < Array[i].length; j++) {
      for (let k = 0; k < Array.length; k++) {
        //Перевіряємо, чи стане шлях між двома вершинами графа коротше, якщо йти не напряму, а в обхід через третю вершину k
        if (
          Array[i][j] != 0 &&
          Array[i][k] + Array[k][j] < Array[i][j] &&
          Array[i][j] != "infinity"
        ) {         
          Array[i][j] = Array[i][k] + Array[k][j];
          Road[i][j]=k
        } else if (Array[i][j] == "infinity" && Array[i][k] != 0 && Array[k][j] !=0 && Array[i][k]!= "infinity" && Array[k][j] !="infinity") {
          Array[i][j] = Array[i][k] + Array[k][j];
          Road[i][j]=k
        }
      }
    }
  }
  let result = Array[0][Array.length-1]
  let result_Path= path(0, Road.length-1, Road)
  return {road: result_Path, result}
}
