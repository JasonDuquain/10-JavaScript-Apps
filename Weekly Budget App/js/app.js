//// Classes

class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.budgetLeft = this.budget;
    }
}

class HTML {
    constructor() {
        
    }
    
    insertBudget(amount) {
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;
    }
    
    printMessage(message, className) {
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('text-center', 'alert', className);
        messageWrapper.append(document.createTextNode(message));
        document.querySelector('.primary').insertBefore(messageWrapper, addExpenseForm);
        
        setTimeout(() => document.querySelector('.primary .alert').remove(), 1111)
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
        userBudget = prompt( 'What\'s your budget for this week?' );
        if (userBudget === null || userBudget === '' || userBudget === '0') {
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
            html.printMessage('all fields are mandatory', 'alert-danger');    
        } else {
            
        }
    });
    
}



