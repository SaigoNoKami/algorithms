export default function prob(Array){
  let i = 0; // ініціалізація лічильника для цикла while
  let sum = 0; // ініціалізація змінної – ціни проїзду від першої до останньої станції
  let road = [1]; // ініціалізація змінної – масиву вершин пройденого шляху
  while (i < Array.length - 1) {
    
    let doparray = []; //ініціалізація допоміжного массиву, де будуть зберігатися ймовірності
    let dopsum = 0; // ініціалізація допоміжної змінної, для алгоритму розрахунку діапазонів ймовірності. В ній буде зберігатися сумма вагів всіх ребер, що виходять з однієї вершини – ця сума потрібна для того, щоб дізнатися, скільки відсотків займає кожне ребро від цієї сумми(стільки відсотків це ребро і буде займати від всього діапазону ймовірності, тобто – від ста)
    for (let j = i; j < Array[i].length; j++) {
      if (Array[i][j] != "infinity") {
        dopsum += Array[i][j];
      }
    }
    let dopsum2 = 0; // ініціалізація додаткової змінної, де буде зберігатися верхня межа діапазона ймовірності.
    for (let j = 0; j < Array[i].length; j++) {
      if (Array[i][j] != "infinity" && Array[i][j] != 0) {
        dopsum2 += (Array[i][j] / dopsum) * 100; //правило розрахунку верхньої межі для кожного можливого варіанта
        doparray.push(dopsum2);
      } else {
        doparray.push(0);
      }
    }
    let rand = Math.random() * 100; //випадкове число від одного до 100
    for (let j = 0; j < doparray.length; j++) {
      if (rand <= doparray[j]) {
        //перевіряємо, чи менше наше рандомне число верхньої межі поточного варіанта діапазона ймовірності. Зазначимо, що другу умове – rand>нижньої межі ми вже перевірили на минулій ітерації, бо верхня межа одного варіанта – це нижня межа наступного.
        sum += Array[i][j];
        road.push(j + 1);
        i = j;
        break;
      }
    }    
  }
  return({road, result: sum})  
}
