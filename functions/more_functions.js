function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(`${city}, ${state} ${zip}`);
}

displayMailingLabel("Ahava Boyer", "109 Ostrich Dr. ", "Lula", "GA", "30554");

console.log("------");

function addNumbers(num1, num2) {
  console.log(`${num1}+${num2}=${num1 + num2}`);
}

addNumbers(1, 2);

console.log("---------------");

function displayReceipt(totalDue, amountPaid) {
  const changeDue = totalDue - amountPaid;
  console.log(`Total Due:$${totalDue.toFixed(2)}`);
  console.log(`Amount Paid:$${amountPaid.toFixed(2)}`);
  if (changeDue <= 0) {
    console.log(`Change Due:$${Math.abs(changeDue).toFixed(2)}`);
  } else {
    console.log(`Owed Amount:$${Math.abs(changeDue).toFixed(2)}`);
  }
}
const totalDue = 15;
const tooMuch = 20;
const tooLittle = 10;
const justRight = 15;
displayReceipt(totalDue, tooMuch);
displayReceipt(totalDue, tooLittle);
displayReceipt(totalDue, justRight);
