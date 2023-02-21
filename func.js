

//using parameter and argument 
function Multable(num) {
    for (i = 1; i <= 10; i++) {
        document.write(`${num} x ${i} = ${num * i}`);
        document.write("<br>");
    }
}

Multable(17); //argument


document.write("table of 17:");

Multable(18);

// passing multiple parametrs

function addition(num1, num2) {
    alert(num1 + num2);
}

addition(12, 12);
