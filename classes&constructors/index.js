// Mid Term Assessment: Classes & Constructors 
// Assessment Duration: 45 Min
// Assessment Total: 100
// DV200: Assessment A

// Instructions: 
// Using Classes and the basic principles of OOP, refactor the below procedural code into Object Oriented Code. 

// PART ONE: Super Class 
// 1. Using the information provided below, convert the following variables and functions into a class template called USER. 
// 2. Using the principle of Abstraction, ensure the setSystemId method and sci_id property, are set private
// 3. The setSciId method must run automatically when the constructor function is invoked.
// The super class should also contain the onDuty function, which will be set to Public

//PART TWO: Class Inheritance 
// 4. Create a New Class that inherits from your Super class, call this new sub-class 'ScienceHeads'
// 5. The constructor method must include 4 Parameters, 'first', 'last', 'department' and 'sector'
// 6. Dont forget to use the super(); function in gain access to the super class properties.  
// 7. Take a look at SNIPPET ONE, include the Method in the sub-class as a public method.

//PART THREE: Final Instance  
// 8. Create a New Class that inherits from your ScienceHeads class, call this new sub-class 'Intern'
// 9. The constructor must take three parameters, 'first', 'last' and 'securityClearance'
// 10. Ensure you are inherting 'first' & 'last' and assigning 'securityClearance' to the Intern Class
// 11. Take a look at SNIPPET TWO, include the Method in the sub-class as a public method.




var first = "Bob"; 
var last = "Oppenheimer";
var username = "CastleBravo"; 
var email = "atom@breakers.com"
var sci_id = "";
var dutyStatus = false; 

function setSciId(){
    sys_id = Math.round(Math.random() * 100000);
    alert(first + " " + last + " has been assigned system id: " + sys_id);
}

function onDuty(){
    if(!dutyStatus){
        dutyStatus = true;
        message = "On"
        alert( first + " " + last + " is now " + message + " duty...");
    } else {
        dutyStatus = false;
        message = "Off"
        alert( first + " " + last + " is now " + message + " duty...");
    }
}



// Question 1 
class User {

    constructor(first, last,username, email){
        this.first = first;
        this.last = last;
        this.username = username;
        this.email = email;
    }
    
}

// Question 2
class ScienceHeads extends User {

    constructor(first, last,department, sector){
        super(first,last)
        this.department = department;
        this.sector = sector;
    }
    updateSector(){
        const sectors = ['', 'Sector A', 'Sector B', 'Sector C', 'Sector X']
        let value = Math.round(Math.random() * 4)
        this.sector = sector[value];
        alert(this.first + " " + this.last + " has been assigned to " + this.sector);
    }

}
// Question 3
class Intern extends ScienceHeads {

    constructor(first,last, securityClearance){
        super(first,last)
        this.securityClearance = securityClearance;
    }
    assignHead(){
        const divHeads = ['', 'Michel Scott', 'Pam Beesly', 'Jim Helpert', 'Creed Baton'];
        let value = Math.round(Math.random()* 4);
        this.sector = divHeads[value];
        alert(this.first + " " + this.last + " has been assigned to " + this.sector);
    }
}


//PART FOUR: Invoking Constructors 

// 11. Assign a let variable called userEx and create a new instance of the USER class.
// 12. Assign a let variable called divHead and create a new instance of the DivisionHead class.
// 13. Assign a let variable called internOne and create a new instance of the Intern class.
// 14. Invoke the assignHead Method from internOne


// Question 4
let userEx = new User("Kelly " , "Kapoor" , " iLoveRyan123 " , "kelly.kapoor@scranton.com" )
let divHead = new ScienceHeads("Meredith" , "Palmer " , "Alcohol" , "boozeCruise@scranton.com"  )
let internOne = new Intern("Charles", "Miner" , "NO ACCESS")




// SNIPPET ONE: class ScienceHeads public method: 

// updateSector(){
//     const sectors = ['','Sector A', 'Sector B', 'Sector C', 'Sector X'];
//     let value = Math.round(Math.random() * 4);
//     this.sector = sectors[value];
//     alert(this.first + " " + this.last + " has been assigned to " + this.sector);
// }

// SNIPPET TWO: class Intern public method: 
// assignHead(){
//     const divHeads = ['','Michael Scott', 'Pam Beesly', 'Jim Helpert', 'Creed Baton'];
//     let value = Math.round(Math.random() * 4);
//     this.sector = divHeads[value];
//     alert(this.first + " " + this.last + " has been assigned to " + this.sector);
// }
