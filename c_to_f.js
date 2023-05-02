function convertCtoF(currentTemp) {
  const farTemp = (currentTemp * 9) / 5 + 32;
  return farTemp;
}
console.log(convertCtoF(100));
console.log(convertCtoF(45));
console.log(convertCtoF(19));
console.log(convertCtoF(0));
console.log(convertCtoF(-17));
console.log(convertCtoF(-40));
