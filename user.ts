function resverseString(str:string):string{
let reverseStr=""

for (let i=str.length-1;i>=0;i--){
    reverseStr=reverseStr+str[i]
    // return reverseStr
}
return reverseStr
}

console.log(resverseString("salim"))