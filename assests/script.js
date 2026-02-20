let display=document.getElementById("result");
let firstno="";
let secno="";
let operator="";

function appendvalue(value){
    if(operator ===""){
        firstno =value;
        display.value=firstno;
    }
    else{
        secno=value;
        display.value=secno;
    }
}

function appendoperator(op){
    if(firstno !==""){
        operator=op;
        display.value=operator;
    }
}


function equal(){
    let num1=Number(firstno);
    let num2=Number(secno);
    let result=0;

    switch(operator){
        case "+":
            result=num1+num2;
            break;
        
        case "-":
            result=num1-num2;
            break;

        case "*":
            result=num1*num2;
            break;

        case "/":
            result=num1/num2;
            break;
    }


    display.value=result;
}

function appendclear(){
    firstno="";
    secno="";
    operator="";
    display.value="";

}