const transactions = [];

const tableBody = document.getElementById("tableBody");
const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");

document.getElementById("addBtn").addEventListener("click", addTransaction);

function addTransaction(){

    const title = document.getElementById("title").value.trim();
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if(title==="" || amount<=0){
        alert("Please enter valid details.");
        return;
    }

    transactions.push({
        title,
        amount,
        type
    });

    document.getElementById("title").value="";
    document.getElementById("amount").value="";

    displayTransactions();
}

function displayTransactions(){

    tableBody.innerHTML="";

    let totalIncome=0;
    let totalExpense=0;

    transactions.forEach((item,index)=>{

        if(item.type==="Income")
            totalIncome+=item.amount;
        else
            totalExpense+=item.amount;

        tableBody.innerHTML+=`
        <tr>

            <td>${item.title}</td>

            <td>₹${item.amount}</td>

            <td class="${item.type==="Income" ? "incomeText":"expenseText"}">
            ${item.type}
            </td>

            <td>
                <button class="delete" onclick="deleteTransaction(${index})">
                Delete
                </button>
            </td>

        </tr>
        `;

    });

    income.textContent="₹"+totalIncome;
    expense.textContent="₹"+totalExpense;
    balance.textContent="₹"+(totalIncome-totalExpense);

}

function deleteTransaction(index){

    transactions.splice(index,1);

    displayTransactions();

}