// Type Alias Define:
type StudentName = string
type Alien = string

let StudentName:StudentName = "Faryal"
let alien:Alien = "Jaddu"


// Type Alias define at Array:
type MainCourse = string[]
let mainCourse:MainCourse = ["Halwa", "Puri"]
console.log(mainCourse);

// Example
type ChatterPatter = string[]
let chatterPatter:ChatterPatter = ["lays", "kurkura"]
console.log(chatterPatter);

// Type Unions
let rollNumber : string | number = 1234
console.log(rollNumber);

rollNumber = "675"
console.log(rollNumber);

// Example
let ispresent : string | boolean = "Present"
console.log(ispresent);

ispresent = true
console.log(ispresent);

// Type Literals
let size : "small" | "medium" | "large"
size = "small"
size = "large"
size = "large"

// Example 
let trafficlights : "red" | "yellow" | "green"
trafficlights = "red"
trafficlights = "yellow"
trafficlights = "green"

// Types Objects
let myCar: {
	make: string, 
	module: number,
	variant: string,
	isAc: () => boolean
} = {
	make: "Toyota",
	module: 2024,
	variant: "1800cc",
	isAc: () => true
}
console.log(myCar.make);

// Example
let myCars: {
	make: string, 
	module: number,
	variant: string,
	isAc: () => boolean
	maxSpeet : () => number
} = {
	make: "Toyota",
	module: 2024,
	variant: "1800cc",
	isAc: () => true,
	maxSpeet : () => 200
}
console.log(myCars.maxSpeet());


// Nested Objects
type Slip = {
	customerName: string,
	products: {
		productName: string,
		price: number
	}
}

let bill: Slip = {
	customerName : "Faryal",
	products : {
	productName : "Bread",
	price : 100
    }
}
console.log(bill.products.productName);


// Type Intersection:
type Student = {
	studentName: string,
	rollNo: number
}
type Teacher = {
	teacherName: string,
	experience: string | number
}
type ClassRoom = Student & Teacher
let ClassRoom: ClassRoom = {
	studentName: "Faryal",
	teacherName: "Ali",
	rollNo: 11,
	experience: 4
}

