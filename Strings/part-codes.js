function getSupplier(code) {
  const colonPos = code.indexOf(":");
  return code.substring(0, colonPos);
}

function getProductNumber(code) {
  const colonPos = code.indexOf(":");
  const dashPos = code.indexOf("-");
  return code.substring(colonPos + 1, dashPos);
}

function getSize(code) {
  const dashPos = code.indexOf("-");
  return code.substring(dashPos + 1);
}

function getAllInfo(code) {
  const supplier = getSupplier(code);
  const product = getProductNumber(code);
  const size = getSize(code);
  console.log(`The ${size}  part ${product} is supplied by ${supplier}`);
}
const acme = "ACME:123-L";
const di = "DI:12345-M";
const ace = "ACE:1-12";
getAllInfo(acme);
console.log("--");
getAllInfo(di);
console.log("--");
getAllInfo(ace);

//const spacePos = name.indexOf(" ");
// return name.substring(spacePos + 1)
