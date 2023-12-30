function reverseArray(inputArray)
{
    var reverseArray=[]
    for (var i= inputArray.length -1; i>=0; i--){
        reverseArray.push(inputArray[i]);
    }
return reverseArray
}
var reverseArray= prompt("entrez un nombre")