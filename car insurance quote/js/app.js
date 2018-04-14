
const form = document.querySelector('#request-quote');



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
            const prevResult = document.querySelector('#result div');
            if (prevResult != null) {
                prevResult.remove();
            }
            const insurance = new Insurance(make, year, level);
            const price = insurance.calculateQuotation(insurance);
            
            html.showResults(price, insurance);
        }
    });
}


/////////////////////Objects

class Insurance {
    constructor(make, year, level) {
        this.make = make;
        this.year = year;
        this.level = level;    
    }
    
    calculateQuotation(insurance) {
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
        // Each year the cost of the insurance is going to be 3% cheaper
        price = price - ((difference * 3) * price) / 100;

        const level = insurance.level;
        price = this.calculateLevel(price, level);
        return price;
    }

    getYearDifference(year) {
        return new Date().getFullYear() - year;
    }

    calculateLevel(price, level) {
        /* Basic insurace will increase the value by 30%
           Complete insurace will increase the value by 50% */
        if (level === 'basic') {
            price = price * 1.30;
        } else {
            price = price * 1.50;
        }
        return price;
    } 
    
}




class HTMLUI {
 
    displayYears() {
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

    displayError(message) {
        const div = document.createElement('div');
        div.classList = 'error';
        div.innerHTML = `
           <p>${message}</p> 
        `;
        form.prepend(div);
        setTimeout(() => div.remove(), 2000);
    }

    showResults(price, insurance) {
        const result = document.querySelector('#result');
        const div = document.createElement('div');
        let make = insurance.make;
        switch(make) {
            case "1": 
                make = 'american'
                break;
            case "2": 
                make = 'asian'
                break;
            case "3": 
                make = 'european'
                break;
        }

        div.innerHTML = `
            <p class="header">Summary</p>
            <p>Make: ${make}</p>
            <p>Year: ${insurance.year}</p>
            <p class="total">Total: $ ${price.toFixed(2)}</p>
        `;

        const spinner = document.querySelector('#loading img');
        spinner.style.display = 'block';
        setTimeout(()=> {
            spinner.style.display = 'none';
            result.append(div);
        }, 2111);

    }
    
}

const html = new HTMLUI();
 

/* 1 =  American 15%/2 = Asian 05%/3 = European 35%  */


// Each year the cost of the insurance is going to be 3% cheaper

/* Basic insurace will increase the value by 30%
   Basic insurace will increase the value by 50% */









