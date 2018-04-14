
const form = document.querySelector('#request-quote');
const html = new HTMLUI();


eventListeners();
function eventListeners() {
    
    document.addEventListener('DOMContentLoaded', function() {       
        
        html.displayYears();
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const make = document.querySelector('#make').value;
        const year = document.querySelector('#year').value;
        const level = document.querySelector('input[name="level"]:checked').value;
        if (make === '' || year === '' || level === "") {
            html.displayError('all the fields are mandatory');
        } else {
            const insurance = new Insurance(make, year, level);
            const price = insurance.calculateQuotation(insurance);
        }
    });
}


/////////////////////Objects

function Insurance(make, year, level) {
    this.make = make;
    this.year = year;
    this.level = level;
}

Insurance.prototype.calculateQuotation = function(insurance) {
    let price;
    const base = 2000;
    
    let make = insurance.make;
    /* 1 =  American 15%/2 = Asian 05%/3 = European 35%  */
    switch(make) {
        case "1":
            price = base * 1.15;
            break;
        case "2":
            price = base * 1.05;
            break;
        case "3":
            price = base * 1.35;
            break;
    }
    
    const year = insurance.year;
    const difference = this.getYearDifference(year);
    price = price - ((difference * 3) * price) / 100;
    console.log(price);
}

Insurance.prototype.getYearDifference = function(year) {
    return new Date().getFullYear() - year;
}


function HTMLUI() {
    
}

HTMLUI.prototype.displayYears = function() {
    
    const max = new Date().getFullYear();
    const min = max - 20;
    const selectYears = document.querySelector('#year');    
    for (let i = max; i >= min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYears.append(option);
    }
    
}

HTMLUI.prototype.displayError = function(message) {
    const div = document.createElement('div');
    div.classList = 'error';
    div.innerHTML = `
       <p>${message}</p> 
    `;
    form.prepend(div);
    setTimeout(() => div.remove(), 2000);
}




/* 1 =  American 15%/2 = Asian 05%/3 = European 35%  */


// Each year the cost of the insurance is going to be 3% cheaper

/* Basic insurace will increase the value by 30%
   Basic insurace will increase the value by 50% */









