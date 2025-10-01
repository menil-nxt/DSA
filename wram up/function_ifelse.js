// Functions 

    // sum of two numbers.
    function addTowNum(no1,no2){
        let sum = no1 + no2;
        console.log("Sum is :",sum);
    }

    addTowNum(4 , 6);

    // squre of number.
    function squre(x){
        let sqr = x * x;
        return sqr;
    }

    let result = squre(4); 
    result = result + 1 // you can do anything with result 
    console.log(result);



// If = Else

    // with function
    function person(age){
        if (age > 18) console.log("Preson is eligible for vote")
        else if(age < 1) console.log("Invalid Input");
        else console.log("person is not eligible for vote")
    }
    person(21);


    // With Arrow function          // syntax :   let function_name = (perameter)  => { operations/logic }
    let person1 = (age1) => {
        if (age1 > 18) {
            console.log("eligible");
        }
        else if(age1 < 1) {
            console.log("Invalid Input");
        }
        else {
            console.log("not eligible");
        }
    }
    person1(-12);

    // without function => ternary operator.
    let age1 = 12;
    let vote = age1 > 18 ? 'eligible for vote' : "Not eligible for vote";
    console.log(vote);


    // number is even or odd
    let isEvenOdd = (num) => {
        if (num % 2 == 0) console.log('this number is even : ',num);
        else console.log('this number is odd :', num)
    }
    isEvenOdd(77);


