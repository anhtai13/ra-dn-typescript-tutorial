const username: string = "Tainpa";
const age: number = 23;
const address: string = "243/16 - C allay, Ton Duc Thang street, Da Nang City";
const isActived: boolean = true;

console.log("username: " + username);
console.log("age: " + age);
console.log("address: " + address);
console.log("isActived: " + isActived);

// Array
const numbers: number[] = [1, 2, 3, 4, 5, 6];
const names: string[] = ["tintt", "thailq", "huynq"];
const mixed: any[] = [1, 2, 3, 4, 5, 6, {}, "a", true];

// Funtion trả về number
const calculatePriceWithTax = (price: number): number => {
  const rate: number = 7; // Thuế giả định: 7%
  const tax = (price * rate) / 100;

  return price + tax;
};

const showName = (name: string): void => {
  console.log(name);
};

const priceWithTax = calculatePriceWithTax(1000);
console.log(priceWithTax);
