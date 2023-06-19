const arr1 = [1, 2, 3];
const arr2 = [0,1,2,3,4,5];

const canBeNested = (arr1, arr2) => {
    const min1 = Math.min(...arr1);
    const max1 = Math.max(...arr1);
    const min2 = Math.min(...arr2);
    const max2 = Math.max(...arr2);

    return min1 > min2 && max1 < max2;
    
};

const myarr1 = [1,2,3];
const myarr2 = [0, 1, 2, 3, 4, 5];
const myarr3 = [1,2,3];
const myarr4 = [0,1,2];

const myNested = canBeNested(myarr3, myarr4);
console.log(myNested);

//had to use chat gpt for assistance/
//sorry, I haven't been doing this since I was 10 years old
