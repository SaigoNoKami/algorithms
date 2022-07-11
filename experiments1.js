import read from './read_file.js'
import initial from './algorithms/inizializations.js'
import greedy from './algorithms/greedy.js'
import prob from './algorithms/probabilistic.js'
import floyd from './algorithms/Floyd_Warshall.js'

let floyd_times = []
let prob_times = []
let greedy_times = []

function get_time(str, func){
    let dop = read(str)
    let M = dop.M
    let E = dop.E
    let Array = initial(M, E)
    const start = new Date().getTime();
    func(Array)
    const end = new Date().getTime();
    let result = end-start
    return result
}

function get_prob_times(str){
    let dop_prob_times = []
    for(let i = 0; i<30; i++){
        dop_prob_times.push(get_time(str, prob))
    }
    let sum = 0
    for(let i = 0; i<dop_prob_times.length; i++){
       sum += dop_prob_times[i]
    }
    return sum/dop_prob_times.length
}



greedy_times.push(get_time('./variants/100x100.txt', greedy))
greedy_times.push(get_time('./variants/500x500.txt', greedy))
greedy_times.push(get_time('./variants/1000x1000.txt', greedy))

floyd_times.push(get_time('./variants/100x100.txt', floyd))
floyd_times.push(get_time('./variants/500x500.txt', floyd))
floyd_times.push(get_time('./variants/1000x1000.txt', floyd))


prob_times.push(get_prob_times('./variants/100x100.txt'))
prob_times.push(get_prob_times('./variants/500x500.txt'))
prob_times.push(get_prob_times('./variants/1000x1000.txt'))

console.log(greedy_times, prob_times, floyd_times)

