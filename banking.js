class BankAccount{
    #balance = 0.00;
    getBalance(){
        return this.#balance;
    }
    
    deposit(value){
        // Ensure the value is a number and round it to two decimal places
        if(value < 0 || value === ''){
            throw new Error('Invalid deposit amount');
        }
        this.#balance += Math.round(value * 100) / 100;
        amount2.textContent = '$'+ String(this.#balance);

    }
    withdraw(value){
        if(this.#balance < value || isNaN(value) < 0 || value === ''){
            throw new Error('Insufficient funds');
        }
        this.#balance -= Math.round(value * 100) / 100;
        amount2.textContent = '$'+ String(this.#balance);
    }
}
const amount2 = document.querySelector('.amount');
const amountInput = document.querySelector('#amount');
const depositButton = document.querySelector('.deposit');
const withdrawButton = document.querySelector('.withdraw');

// Initialize the bank account and display the initial balance
const account = new BankAccount();  
amount2.textContent = '$'+ String('0.00');

depositButton.addEventListener('click', ()=>{
    try{
        account.deposit(amountInput.value);
        amountInput.value = '';
    }catch(e){
        alert(e.message);
        amountInput.value = '';
    }   
});

withdrawButton.addEventListener('click', ()=>{
    try{
        account.withdraw(amountInput.value);
        amountInput.value = '';
    }catch(err){
        alert(err.message);
        amountInput.value = '';
    }
})

