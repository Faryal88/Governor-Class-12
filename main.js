var StudentName = "Faryal";
var alien = "Jaddu";
var mainCourse = ["Halwa", "Puri"];
console.log(mainCourse);
var chatterPatter = ["lays", "kurkura"];
console.log(chatterPatter);
// Type Unions
var rollNumber = 1234;
console.log(rollNumber);
rollNumber = "675";
console.log(rollNumber);
// Example
var ispresent = "Present";
console.log(ispresent);
ispresent = true;
console.log(ispresent);
// Type Literals
var size;
size = "small";
size = "large";
size = "large";
// Example 
var trafficlights;
trafficlights = "red";
trafficlights = "yellow";
trafficlights = "green";
// Types Objects
var myCar = {
    make: "Toyota",
    module: 2024,
    variant: "1800cc",
    isAc: function () { return true; }
};
console.log(myCar.make);
// Example
var myCars = {
    make: "Toyota",
    module: 2024,
    variant: "1800cc",
    isAc: function () { return true; },
    maxSpeet: function () { return 200; }
};
console.log(myCars.maxSpeet());
var bill = {
    customerName: "Faryal",
    products: {
        productName: "Bread",
        price: 100
    }
};
console.log(bill.products.productName);
