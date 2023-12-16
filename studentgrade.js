let userInput=prompt("Enter student marks ");
function gradeStudentMarks(){

    const marks=parseFloat(userInput);

    if(isNaN(marks)|| marks<0|| marks>100){
        return "Invalid! Please enter valid marks."
    }
    else if(marks>79){
        return "A";
    }
    else if(marks>=60){
        return "B";
    }
    else if(marks>=49){
        return "C";
    }
    else if (marks>=40){
        return "D";
    }
    else{
        return "E";
    }
}
const grade=gradeStudentMarks();
console.log(grade);

