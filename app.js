function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0 ){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal();

}

function getIpnutValue(product){
    const phoneTotal = document.getElementById(product + '-number');
    const productNumber = parseInt(phoneTotal.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getIpnutValue('phone') * 1219;
    const caseTotal = getIpnutValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10; 
    const total = subTotal + tax;

    
    
    //update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
    
}

// phone increase decrease event 
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1229, true);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1229, false);
})

// handle case increas decrese envetn. 
document.getElementById('case-plus').addEventListener('click', function(){
   updateProductNumber('case', 59, true);   
})


document.getElementById('case-minus').addEventListener('click', function(){
    console.log('click');
    updateProductNumber('case', 59, false);
    
})











document.getElementById('check-out').addEventListener('click', function(){
    alert('This is demo. Thank you for clicking');
    
})