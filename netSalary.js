const basicSalary=prompt("enter basic salary: ");
const benefits=prompt("enter benefits: ");
function calculateNetSalary(basicSalary, benefits){
    const taxRate=0.15;
    const nssfRate=0.06;
    const nhifRate=0.05;

    let grossSalary=(basicSalary+benefits);
    let tax=(grossSalary*taxRate);
    let nssfDeductions=(grossSalary*nssfRate);
    let nhifDeductions=(grossSalary*nhifRate);

    const netSalary=(grossSalary-tax-nssfDeductions-nhifDeductions);
}
calculateNetSalary();