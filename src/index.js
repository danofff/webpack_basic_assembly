import "./styles/main.scss";

const someObject = {
  sameData: true,
  quantity: 3,
  otherPrice: 43,
};

const someNewObject = {
  ...someObject,
  quatity: 5,
  newProperty: 10,
};

console.log(someObject);
console.log(someNewObject);
