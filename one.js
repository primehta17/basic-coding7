// Check the Last Digit

let num1=765;
let num2=675;
let num3=235;

num1 = num1%10;
num2 = num2%10;
num3 = num3%10;

if(num1 == num2 && num2 == num3){
    console.log("last digit is same", num1)
}else{
    console.log("last digit not matching")
}
