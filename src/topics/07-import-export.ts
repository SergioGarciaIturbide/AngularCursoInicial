import { Product,taxCalculation,TaxCalculationOptions,tax,shoppingCart } from "./06-function-destructuring"; 



/* const Nokia:Product = shoppingCart;
 */
const Options:TaxCalculationOptions = {tax,products:shoppingCart};


const [total,taxes] = taxCalculation(Options);


const result = taxCalculation(Options);

const [r1,r2] = result;


// console.log(`Total`,result[0]);
console.log(`Total`,r1,`Tax`,r2);
