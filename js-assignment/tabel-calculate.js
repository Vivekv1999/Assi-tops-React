console.log('table is running.....');

let price1 = 800;
let price2 = 500;

const qty1 = () => {
    const num1 = document.getElementById("prd-1").value
    const num2 = document.getElementById("prd-2").value
    const row1 = num1 * price1
    const row2 = num2 * price2
    document.getElementById('prshow-1').innerHTML = row1;
    document.getElementById('prshow-2').innerHTML = row2;
    
    const total=row1+row2;
    document.getElementById("totalprc").innerHTML=total;
    
}


//remove-btn-1
let aaa=document.getElementById("rmv1")
aaa.addEventListener('click',fff1)
function fff1(){    
    const num1 = document.getElementById("prd-1").value
    const num2 = document.getElementById("prd-2").value

    const row1 = num1 * 0;
    const row2 = num2 * price2
    document.getElementById('prshow-1').value = row1;
    document.getElementById('prshow-2').value = row2;

    const total=row1+row2;
    document.getElementById("totalprc").innerHTML=total;

    document.getElementById("prshow-1").innerHTML=0;
    document.getElementById("prd-1").value=0;
}


//remove-btn-2
let bbb=document.getElementById("rmv2")
bbb.addEventListener('click',fff2)
function fff2(){    
    const num1 = document.getElementById("prd-1").value
    const num2 = document.getElementById("prd-2").value

    const row1= num1 * price1
    const row2 = num2 * 0;
    document.getElementById('prshow-1').value = row1;
    document.getElementById('prshow-2').value = row2;

    const total=row1+row2;
    document.getElementById("totalprc").innerHTML=total;

    document.getElementById("prshow-2").innerHTML=0;
    document.getElementById("prd-2").value=0;
}







