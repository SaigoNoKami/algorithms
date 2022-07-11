export default function greedy(Array){
  let i = 0; // ініціалізація лічильника для цикла while
  let sum = 0; // ініціалізація змінної – ціни проїзду від першої до останньої станції
  let road = [1]; // ініціалізація змінної – масиву вершин пройденого шляху
  while (i < Array.length-1) {
    let min = Array[i][i + 1]; //вважаємо найоптимальнішим вибором перехід у наступну вершину графу(потім будемо порівнювати цей варіант з іншими)
    let number = 0; // ініціалізація змінної, де будемо зберігати вершину, у яку ми перейдемо на цьому кроці
    for (let j = i; j < Array[i].length; j++) {
      if (Array[i][j] != "infinity" && Array[i][j] <= min && Array[i][j] != 0 ) {
        //порівнюємо варіанти між собою
        min = Array[i][j];
        number = j;
      }
    }
    i = number;
    sum += min;
    road.push(number+1);
  }
  return({road, result: sum})
}

