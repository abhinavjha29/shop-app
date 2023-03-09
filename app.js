document.addEventListener('DOMContentLoaded', function() {

    const expenseForm = document.getElementById('expense-form');
    const expenseTable = document.getElementById('expense-table').querySelector('tbody');
  
    // Get the expenses from local storage or initialize an empty array
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  
    // Function to add an expense
    function addExpense(event) {
      // Prevent the form from submitting
      event.preventDefault();
  
      // Get the expense name and amount from the form
      const expenseName = document.getElementById('expense-name').value;
      const expenseAmount = document.getElementById('expense-amount').value;
  
      // Create a new expense object
      const expense = {
        name: expenseName,
        amount: expenseAmount
      };
  
      // Add the expense to the expenses array
      expenses.push(expense);
  
      // Save the expenses to local storage
      localStorage.setItem('expenses', JSON.stringify(expenses));
  
      // Update the expense table
      updateExpenseTable();
  
      // Reset the form
      expenseForm.reset();
    }
  
    // Function to update the expense table
    function updateExpenseTable() {
      // Clear the table
      expenseTable.innerHTML = '';
  
      // Loop through the expenses array and add each expense to the table
      for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];
  
        // Create a new row for the expense
        const row = expenseTable.insertRow();
  
        // Add the expense name and amount to the row
        const nameCell = row.insertCell();
        nameCell.textContent = expense.name;
  
        const amountCell = row.insertCell();
        amountCell.textContent = expense.amount;
  
        // Add edit and delete buttons to the row
        const actionsCell = row.insertCell();
        const editButton = document.createElement('button');
        editButton.className = 'btn btn-secondary';
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
          editExpense(i);
        });
        actionsCell.appendChild(editButton);
  
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger ml-2';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
          deleteExpense(i);
        });
        actionsCell.appendChild(deleteButton);
      }
    }
  
    // Function to edit an expense
    function editExpense(index) {
      // Get the expense at the given index
      const expense = expenses[index];
  
      // Set the form values to the expense values
      document.getElementById('expense-name').value = expense.name;
      document.getElementById('expense-amount').value = expense.amount;
  
      // Remove the expense from the array
      expenses.splice(index, 1);
  
      // Save the expenses to local storage
      localStorage.setItem('expenses', JSON.stringify(expenses));
  
      // Update the expense table
      updateExpenseTable();
    }
  
    // Function to delete an expense
    function deleteExpense(index) {
      // Remove the expense from the array
      expenses.splice(index, 1);
  
      // Save the expenses to local storage
      localStorage.setItem('expenses', JSON.stringify(expenses));
  
      // Update the expense table
      updateExpenseTable();
    }
  
    // Add an event listener to the form for adding expenses
    expenseForm.addEventListener('submit', addExpense);
  
    // Update the expense table on page load
    updateExpenseTable();
  
  });
  