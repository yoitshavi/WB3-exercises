function getFirstName(name) {
  const spacePos = name.indexOf(" ");
  return name.substring(0, spacePos);
}
function getLastName(name) {
  const spacePos = name.indexOf(" ");
  return name.substring(spacePos + 1);
}
function parseAndDisplayName(name) {
  const firstName = getFirstName(name);
  const lastName = getLastName(name);
  console.log(`Full Name: ${name}`);
  console.log(`First Name: ${firstName}`);
  console.log(`Last Name: ${lastName}`);
}
const name1 = "Ahava Boyer";
const name2 = "Adan Cruz";
const name3 = "Chauni Brown";
parseAndDisplayName(name1);
console.log("--");
parseAndDisplayName(name2);
console.log("--");
parseAndDisplayName(name3);
//let partCode = "275656543-large";
//let partNum, size;
//let dashPos = partCode.indexOf("-");
//partNum = partCode.substring(0, dashPos);
//size = partCode.substring(dashPos + 1);
