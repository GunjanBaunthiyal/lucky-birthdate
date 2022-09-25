const DOB = document.querySelector("#dob");
const LuckyNumber = document.querySelector("#lucky-number");
const CheckBtn = document.querySelector("#check");
const Output = document.querySelector("#output");

function calculateSum(d) {
    d = d.replaceAll("-","");
    let sum = 0;
    for(let i=0;i<d.length;i++)
    {
        sum += Number(d.charAt(i));
    }
    return sum;
}

function compareValues(sum,luck) {
    if(sum % luck === 0 ) {
        Output.innerText = LuckyNumber.value+" is a lucky number 🥳🥳🥳";
    } else {
        Output.innerText = LuckyNumber.value+" is not that lucky 😕 ";
    }
}

function CheckNumber() {
    const d = DOB.value;
    const sum = calculateSum(d);
    if(sum && d) {
        compareValues(sum,LuckyNumber.value);
    } else {
        Output.innerText = "Please enter both the fields.. ";
    }
    
}

CheckBtn.addEventListener('click', CheckNumber);