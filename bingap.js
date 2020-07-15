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