
//// Classes

class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.budgetLeft = this.budget;
    }
    
    subtractFromBudget(amount) {
        return this.budgetLeft -= amount;
    }
}

class HTML {
    
    insertBudget(amount) {
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;
    }
    
    printMessage(message, className) {
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('text-center', 'alert', className);
        messageWrapper.append(document.createTextNode(message));
        addExpenseForm.before(messageWrapper);
        
        setTimeout(() => {
           document.querySelector('.primary .alert', 1111).remove();
            addExpenseForm.reset();
        });
    }
    
    addExpeseToList(name, amount) {
        const expensesList = document.querySelector('#expenses ul');
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${name}
            <span class="badge badge-primary badge-pill">$${amount}</span>
        `;
        expensesList.append(li);
    }
    
    trackBudget(amount) {
        const budgetLeftDollars = budget.subtractFromBudget(amount);
        budgetLeft.innerHTML = `${budgetLeftDollars}`;
        
        if ((budget.budget / 4) > budgetLeftDollars) {
            budgetLeft.parentElement.parentElement.classList.remove('alert-success', 'alert-warning');
            budgetLeft.parentElement.parentElement.classList.add('alert-danger');
        } else if ((budget.budget / 2) > budgetLeftDollars) {
            budgetLeft.parentElement.parentElement.classList.remove('alert-success');
            budgetLeft.parentElement.parentElement.classList.add('alert-warning');
        }
    }
}

//// Variables
const addExpenseForm = document.querySelector('#add-expense');
const budgetTotal = document.querySelector('span#total');
const budgetLeft = document.querySelector('span#left');
let budget, userBudget;

const html = new HTML();


/// Event Listenters
eventListeners();

function eventListeners() {
    
    
    document.addEventListener('DOMContentLoaded', () => {
        userBudget = prompt('what\'s your budget for this week?');
        if (userBudget === null || userBudget === '' || userBudget === 0) {
           window.location.reload(); 
        } else {
            budget = new Budget(userBudget);
            html.insertBudget(budget.budget); 
        }
    });
    
    addExpenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const expenseName = document.querySelector('#expense').value;
        const amount = document.querySelector('#amount').value;
        
        if (expenseName === '' || amount === '') {
           html.printMessage('there was an err all fields needed', 'alert-danger'); 
        } else {
            html.addExpeseToList(expenseName, amount);
            html.trackBudget(amount);
            html.printMessage('added...', 'alert-success'); 
        }
    });
    
    
}



