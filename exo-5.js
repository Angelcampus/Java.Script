let input= "maemuv modmd spqf eire";
let vowels =["a","e","y","u","i","o",]
//let cherche= input.indexOf(vowels)
let resultArray = [];
for (i=0;i<input.length;i++){
    for (y=0;y<vowels.length;y++)
    //console.log(input[i])
    if (input[i]==vowels[y]){
    console.log(input[i],i);
    resultArray.push(input[i]);
    }
}
resultArray=resultArray.join("");
resultArray=resultArray.toUpperCase();
console.log(resultArray);
