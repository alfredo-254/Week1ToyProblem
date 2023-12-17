
const prompt=require("prompt-sync")({sigint:true});

const userInput = prompt("Enter student marks: ")
const userFloat = parseFloat(userInput);


    // Check if the conversion was successful
if (!isNaN(userFloat)) {
        console.log("You entered: " + userFloat);
    // call the fuction here so it does not continue to execute if the user enters invalid input.
        generateStudentGrade(userFloat);
} else {
    console.log("Invalid input. Please enter a valid number.");
}

function generateStudentGrade(marks){
            // Check if marks are within the valid range
            if (!isNaN(marks) && marks >= 0 && marks <= 100) {
                if (marks > 79) {
                    console.log ("Grade: A");
                } else if (marks >= 60 && marks <= 79) {
                    console.log ("Grade: B");
                } else if (marks >= 50 && marks <= 59) {
                    console.log ("Grade: C");
                } else if (marks >= 40 && marks <= 49) {
                    console.log ("Grade: D");
                } else {
                    console.log ("Grade: E");
                }
            } else {
                console.log("input marks between 0 and 100")
            }
         }
