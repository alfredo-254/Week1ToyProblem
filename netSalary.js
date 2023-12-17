// initialize prompt
const prompt=require("prompt-sync")({sigint:true});

const basicSalary = parseFloat(prompt("Enter Basic Salary:"));
const benefits = parseFloat(prompt("Enter Benefits:"));

if (!isNaN(basicSalary) && !isNaN(benefits)) {

    const result = calculateNetSalary(basicSalary, benefits);
    console.log("Gross Salary: " + result.grossSalary);
    console.log("Payee (Tax): " + result.payee);
    console.log("NHIF Deductions: " + result.nhifDeductions);
    console.log("NSSF Deductions: " + result.nssfDeductions);
    console.log("Net Salary: " + result.netSalary);
} else {
    console.log("Invalid input. Please enter numeric values for Basic Salary and Benefits.");
}

// Function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
    // Constants for KRA, NHIF, and NSSF rates
    const KRA_RATE = 0.15;  
    const NHIF_RATE = 0.05;  
    const NSSF_RATE = 0.06;  

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate payee (Tax)
    const payee = grossSalary * KRA_RATE;

    // Calculate NHIF Deductions
    const nhifDeductions = grossSalary * NHIF_RATE;

    // Calculate NSSF Deductions
    const nssfDeductions = grossSalary * NSSF_RATE;

    // Calculate net salary
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    // Return the results
    return {
        grossSalary: grossSalary,
        payee: payee,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };
}

 calculateNetSalary(basicSalary, benefits);