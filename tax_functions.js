function getSocSecTax(grossPay) {
  const tax = 6.2 / 100;
  const SSTax = grossPay * tax;
  return SSTax;
}

function getMedicareTax(grossPay) {
  const tax = 6.2 / 100;
  const medicareTax = grossPay * tax;
  return medicareTax;
}

function getFederalTax(grossPay, withholdingCode) {
  let tax;
  if (withholdingCode == 0) {
    tax = 0.23;
  } else if (withholdingCode == 1) {
    tax = 0.21;
  } else if (withholdingCode == 2) {
    tax = 0.195;
  } else if (withholdingCode == 3) {
    tax = 0.185;
  } else if (withholdingCode == 4) {
    tax = 0.18;
  } else if (withholdingCode > 4) {
    tax = (18 - (withholdingCode - 4) * 0.5) / 100;
  }
  const federalTax = grossPay * tax;
  return federalTax;
}

console.log(`Person1 Taxes are ${getFederalTax(750, 0)}`);
console.log(`Person2 Taxes are ${getFederalTax(1550, 2)}`);
console.log(`Person1 Taxes are ${getFederalTax(1100, 6)}`);

// (withholdingCode >4) tax=(18-((withholdingCode - 4)*.5))/100
