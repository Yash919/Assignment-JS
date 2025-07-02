function mostFrequentNumber(arr){
    const freqMap = {}
    
    for(let num of arr){
        freqMap[num] = (freqMap[num] || 0) + 1;
    }
    // Frequency Map
    console.log(freqMap);
    let maxFreq = 0;
    let result = -Infinity
    
    for(let num in freqMap){
        const freq = freqMap[num];
        const number = Number(num);
        
        if(freq>maxFreq || (freq === maxFreq && number > result)){
            maxFreq = freq;
            result = number;
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5];

console.log(mostFrequentNumber(numbers));
