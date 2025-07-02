String.prototype.getAllSubstrings = function () {
    const result = [];
    const str = this;

    for(let i=0; i<str.length; i++){
        for(let j=i+1; j<=str.length; j++){
            result.push(str.slice(i,j));
        }
    }
    return result;
}


const input = "geeksforgeeks";
const substrings = input.getAllSubstrings();
console.log(substrings);