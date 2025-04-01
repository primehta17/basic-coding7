//Check Whether a String Starts and Ends With Certain Characters

let str='AbcZ'
let word='A',lastword='Z';
for(let i=0;i<str.length;i++){
   str[0]==word&&str[str.length-1]==lastword?console.log(true):console.log(false);
   break;
}