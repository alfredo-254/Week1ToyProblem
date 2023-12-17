## Author: Alfred Kioko Kivuva


# studentgrade.js
This function uses the prompt function to get user input. It then checks if the input is a valid numeric value. If the value entered is not a numeiric value, it returns an an invalid output then stops the execution. If the value entered is valid and within the specified range which is (0-100), it continues the execution by determineing the corresponding grade based on the specified criteria. If the input is numeric and outside the specified range of values it prompts the user to enter a valid numeric value between 0 and 100.


# speed detector
This program takes the speed of a car as an input. It compares it with the speed limit given which is 70km/hr. If the speed limit is exceeded, it calculates demerit points based on the given rules which is 1 point for every 5km/hr past the speed limit. It then prints out the appropriate message which is "Ok," for any speed below the speed limit or the number of demerit points. If the demerit point thereshld of 12 points is reached, the program prints a "License suspended." message.

# net salary calculator
This program prompts the user to input basic salary and benefits of any employee. It first determines whether the userInput are valid numeric values. If the values of the input are not valid numeric values, the program prompts returns "Invalid Value! Please enter a valid input." If the values entered are correct numeric values, the program continues with execution thus calculates and outputs the various components of the net salary using the given rates.

## set-up instructions
clone this repository on github https://github.com/alfredo-254/Week1ToyProblem
Remember to **fork** a copy into your GitHub account first, then clone from that
copy. Once you've cloned it down, navigate into its directory in the terminal,
then run `code .` to open the files in Visual Studio Code. (The command will be different if you are using a different text editor.)

## Technologies
The programs are purely on javascript. The functions for each program is written in javascript language

## parsing float
At times we receive a number wrapped in quotes. We recognize it as a number, but JavaScript will think it's a string. Luckily, JavaScript gives us tools to turn these strings into proper numbers (that is numbers that JavaScript understands).Thus the #parseFloat tool helps to convert whatever input entered by the user if it is of the valid numeric value into a float which is understandable by javascript inorder for the fuctions to be executed.
