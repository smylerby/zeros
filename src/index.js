module.exports = function getZerosCount(number){
    let nulls = 0;
    let exponent = 5;
    while(exponent < number){
        nulls += Math.floor(number/exponent);
        exponent *= 5;
    }
    return nulls;
}
