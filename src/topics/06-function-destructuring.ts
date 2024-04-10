

export interface Product{
    description: string;
    price: number;
}

const phone: Product={
    description: "Nokia",
    price:250
}

const tablet: Product ={
    description: "iPad",
    price:2000
}

export interface TaxCalculationOptions{
    tax:number;
    products : Product[]
}




export const shoppingCart:Product[] = [phone,tablet]; 
export const tax:number = 0.20;

const Options:TaxCalculationOptions = {tax,products:shoppingCart};



/* function taxCalculation ({tax,products}:TaxCalculationOptions):[number,number] { */
    export function taxCalculation (Options:TaxCalculationOptions):[number,number] {
    
    const {products,tax} = Options;
    let total = 0;

    products.forEach( ({price}) => {

        total+=price;
    
        });
   /*  products.forEach(product =>{
            total += product.price;
        }); */


    return [total,total*tax];
}







const result = taxCalculation(Options);

const [r1,r2] = result;


// console.log(`Total`,result[0]);
//console.log(`Total`,r1,`Tax`,r2);





