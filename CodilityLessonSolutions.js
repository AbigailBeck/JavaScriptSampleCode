//Binary Gap: Find the longest sequence of zero surrounded by one in the binary representation of an integer.
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    var binString = N.toString(2);
    var count = 0;
    var binGap = 0;
    
    for (var i = 0; i < binString.length ; i++){
        if (binString[i] === '1' && count !== 0){
                binGap = Math.max(binGap, count);
                count = 0;
        }
        
        else if (binString[i] === '0'){
            count += 1;
        }
        
        else{
            continue;
        }
        
    }
    return binGap;
}

//Cyclic Rotation: Rotate an array to the right in the given number of steps.
function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    var rotation = K % A.length;
    
    return A.slice(A.length - rotation).concat(A.slice(0, A.length - rotation));
    
}

//Odd Occurences in Array
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let res = 0;
    
    for (let elem of A){
        res ^= elem;
    }
    
    return res;
}