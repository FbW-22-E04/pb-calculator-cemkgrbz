
class Calculator{
    
    constructor(){
        this.PI= 3.141592653589793;
        this.E = 2.718281828459045
    }

    get pi(){
        return this.PI
    }


    get e(){
        return this.E 
    }

    ratio(x,y,width) {

        return (width*y)/x;
    }

    percentage(x,y) {
        return (x*100)/y;
    }

    add(x,y) {
        return x+y;
    }
    subtract(x,y) {
        return y-x;
    }

    multiply(x,y) {
        return x*y;
    }

    divide(x,y) {
        if(y === 0){
            return "The divisor can't be 0."
        } else {
            return x/y;
        }
    }

    modulation(x,y) {
        if(y === 0){
            return "The divisor can't be 0."
        } else {
            return x % y;
        }
    }

    elevate(x,y) {
        return x ** y;

    }

    sqrt(x) {
        return x **2;
    }

}

const calculator = new Calculator()

console.log(calculator.elevate(2,3))
console.log(calculator.add(5,10))