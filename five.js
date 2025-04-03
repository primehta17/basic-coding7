//Palindrom or not string

const str='malayalam';let newStr='';

//reverse and check
for(let i=str.length-1;i>=0;i--){
   newStr+=str[i];
}
console.log(newStr==str);

//2-pointer approach

function palindron2pointer(str){
    let first=0;
    let end=str.length-1;
    
    while(first<end){
        if(str[first] !== str[end]){
            return false;
        }
        first++;
        end--;
    }
    return true;
}
console.log(palindron2pointer(str));

function halfpalindrom(str){
    let len=str.length;
    let half=Math.floor(len)/2;
    for(let i=0;i<half;i++){
        if(str[i] !== str[len-1-i]){
            return false;
        }
    }
    return true;
}
console.log(halfpalindrom(str))
