export default function initial(M, E){
  let Array = []; // створюємо масив(матрицю) для  розрахунку відстані між будь якими двома станціями
  for (let i = 0; i < E.length + 1; i++) {
    let doparray = []; // допоміжний масив, де будуть записані відстані від поточної, до всіх інших станцій
    let d = 0; // відстань між першою та i-ю станцією
    for (let j = 0; j < i; j++) {
      if (j <= i) {
        doparray.push(0);
      }
      // d += E[j]; // додаємо відстань між кожними j+1та j+2 станціями, що розташовані перед i станцією
    }
    doparray.push(0);
    for (let j = i; j < E.length; j++) {
      d += E[j];
  
      doparray.push(d);
    }
    Array.push(doparray);
  }
  // Зробимо із масиву відстаней – масив цін прямого переїзду
  for (let i = 0; i < Array.length; i++) {
    for (let j = i + 1; j < Array[i].length; j++) {
      for (let k = 0; k < M.length; k++) {
        //перевіряємо, до якого проміжку відноситься відстань між двома станціями та визначаємо необхідну ціну.
        if (Array[i][j] < M[k][0][1] && Array[i][j] > M[k][0][0]) {
          Array[i][j] = M[k][1];
          break; // якщо знайшли необхідний проміжок – закінчуємо внутрішній цикл
        } else if (k == M.length-1) {
          Array[i][j] = "infinity"; //якщо прямий переїзд між двома вершинами неможливий – ціна дорівнює нескінченності.
        }
      }
    }
  }
return Array
}







