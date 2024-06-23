let calculatedSalary;
let totalContributions;

function calculateSalary() {
    const salary = parseFloat(document.getElementById('salary').value);
    if (isNaN(salary) || salary <= 0) {
        alert('Please enter a valid salary amount.');
        return;
    }

    const MutalFunds = salary * 0.20;
    const ProfessionalTax = 200;
    const PF = 3600;
    const totalTax = MutalFunds + ProfessionalTax + PF;

    document.getElementById('MutalFunds').value = MutalFunds.toFixed(2);
    document.getElementById('ProfessionalTax').value = ProfessionalTax.toFixed(2);
    document.getElementById('PF').value = PF.toFixed(2);
    document.getElementById('totalTax').textContent = totalTax.toFixed(2);
    document.getElementById('monthlySalary').textContent = salary;

    calculatedSalary = salary;
    totalContributions = totalTax;

    document.querySelector('.salary-input').style.display = 'none';
    document.querySelector('.result').style.display = 'flex';
    updateSavings();
}

function updateSavings() {
    const food = parseFloat(document.getElementById('food').value) || 0;
    const rentBill = parseFloat(document.getElementById('rentBill').value) || 0;
    const monthlyCarLoan = parseFloat(document.getElementById('monthlyCarLoan').value) || 0;
    const monthlyHouseLoan = parseFloat(document.getElementById('monthlyHouseLoan').value) || 0;
    const otherExpenses = parseFloat(document.getElementById('otherExpenses').value) || 0;

    const totalExpenses = food + rentBill + monthlyCarLoan + monthlyHouseLoan + otherExpenses;
    const totalDeductions = totalContributions + totalExpenses;
    const monthlySavings = calculatedSalary - totalDeductions;

    document.getElementById('totalExpenses').textContent = `${totalExpenses.toFixed(2)}`;
    document.getElementById('monthlySavings').textContent = `${monthlySavings.toFixed(2)}`;
}