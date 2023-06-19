const binary = (decimal) => {
    let num = parseInt(decimal);

    if(num === 0) {
        return "0";
    }

    let binaryStr = "";
    let powerOfTwo = 1;

    while (powerOfTwo <= num) {
        powerOfTwo *= 2;
    }

    powerOfTwo /= 2;

    while (powerOfTwo >= 1) {
        if(num >= powerOfTwo) {
            binaryStr += "1";
            num -= powerOfTwo;
        } else {
            binaryStr += "0";
        }
        powerOfTwo /= 2;
    }
    return binaryStr;
};

let myBinary = binary("10");
//1 is 1
//5  is 101
//10 is 1010
console.log(myBinary);

//make sure to comment this in detail
//cannot do this without chat gbt
//can prompt and reprompt chat gpt to get the corrct code
