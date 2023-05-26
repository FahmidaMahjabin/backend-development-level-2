function kgToGram(kg:number | string): number| string| undefined{
    if(typeof kg === 'number'){
        return kg*1000;
    }
    else if(typeof kg === 'string'){
        return `amount is: ${parseFloat(kg)*1000}`;
    }
    
}
const potol  = kgToGram('12') as string;
console.log(potol);

interface vehicle{
    company:string;
    milage:number;
    color: string
}

type toyota = Pick<vehicle, "milage"| "color">;
type corola = Omit<vehicle, "color">;
