// class Complex{
//     constructor(real,img){
//         this.real=real;
//         this.img=img;
//     }

//     add(other){
//         let r=this.real+ other.real;
//         let i=this.img+ other.img;

//         let c=new Complex(r,i);
//         return c;
//     }
// }

// let a=new Complex(2,4);
// let b=new Complex(4,5);

// console.log(a.add(b))


// class Human{
//     info(){
//         console.log("I am human")
//     }
// }

// class student extends Human{
//     info(){
//         super.info();
//         console.log("Hello am also student");
//     }

// }
// let stud=new student();

// stud.info()

// console.log(stud instanceof Human)



class Complex{
    constructor(real,img){
        this._real=real;
        this._img=img;
    }

    get r_and_i(){
        let a=this._real+"+"+this._img+"i";
        return a
    }

    set r_real(real){
        return this._real=real;
    }

    set i_img(img){
        return this._img=img;
    }
}

let a=new Complex(2,9);
console.log(a.r_and_i)

a.r_real=10;
a.i_img=20;
console.log(a.r_and_i)

