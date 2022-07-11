import initial from './algorithms/inizializations.js'
import greedy from './algorithms/greedy.js'
import prob from './algorithms/probabilistic.js'
import floyd from './algorithms/Floyd_Warshall.js'
import read from './read_file.js'


let Kulik = read('./variants/100x100.txt')
let Kovalenko = read('./variants/Kovalenko.txt')

let Array1 = initial(Kulik.M, Kulik.E)
console.log("M = ", Kulik.M, '\r\n' ,"E = ", Kulik.E)
console.log('greedy', greedy(Array1))
console.log('prob', prob(Array1))
console.log('floyd', floyd(Array1))
/*
let Array = initial(Kovalenko.M, Kovalenko.E)
console.log("M = ", Kovalenko.M, '\r\n' ,"E = ", Kovalenko.E)
console.log('greedy', greedy(Array))
console.log('prob', prob(Array))
console.log('floyd', floyd(Array))
*/


