import read from './read_file.js'
import initial from './algorithms/inizializations.js'
import greedy from './algorithms/greedy.js'
import prob from './algorithms/probabilistic.js'
import floyd from './algorithms/Floyd_Warshall.js'


function quality(){
    let prob_quality = []
    let greedy_quality = []
    
    for(let i = 1; i<6; i++ ){
        let dop = read('./variants/15x15/file'+i+'.txt')
        let Array = initial(dop.M, dop.E)
        let ideal = floyd(Array).result
        let gr = (ideal/greedy(Array).result)*100
        let pr = (ideal/prob(Array).result)*100
        prob_quality.push(pr)
        greedy_quality.push(gr)
        
    }
    let prob_sum = 0
    let greedy_sum = 0
    for(let i = 0; i<5; i++ ){
    prob_sum+=prob_quality[i]
    greedy_sum+=greedy_quality[i]
    }
    prob_sum/=5
    greedy_sum/=5
    console.log(prob_sum, greedy_sum)
}

quality()
