// for biginners 
// easy to zero 
// everthing practical
// Level 0 for namaste DSA.



// basic of Java-Script 

    // 1. how to print  any message in js 
        console.log("Hello World");

    // 2. how to declare variable in js
        const a = 10; //==> you can not change value after in const.
        // a = 56;  you can't do this 

        let x = 20; // ==> you can change value after in let.
        x = 30; // example.

        var b = 50; // very older way to declare variable.

    // 3. Array : Array can store multiple value. 

        let arr = [1,2,"menil" ,4, "jotaniya" , true ,"ganesh" , false , [5,6,"xyz",true]];
        // it store (number, string, bollen, and arraya can store array value it self)
        // you can access array with it's index like arr[0].

        console.log("Array ==> ",arr[0] + " array inside another array and with it's value access ==> " + arr[8][2]);


    // 4. Object : Object contains key-value pair.

        let obj = {
            name: "menil",
            a: 7,
            bool: true,
            arr: [5,"jotaniya", false]
        };

        // obj.name ==> you can access this name with it's value.
        console.log(obj.name, obj.arr[0], obj.bool, obj.a);