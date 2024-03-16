import inquirer from "inquirer" ;

const answer = await inquirer.prompt([{
    message:"Enter First Number", type: "number", name: "firstNumber"},
{message:"Enter second Number", type: "number", name: "secondNumber"},
{message : "slect one of the Operation", type: "list", name: "operator", choices: ["Addition", "Substraction"
,"Multiplcation", "Division"],
}])

//conitional statement
if (answer.operator=== "Addition"){
    console.log(answer.firstNumber + answer.secondNumber)
} else if (answer.operator === "Substraction"){
    console.log(answer.firstNumber - answer.secondNumber)
} else if (answer.operator === "Multiplcation"){
    console.log(answer.firstNumber * answer.secondNumber)
} else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber)

}else console.log("please slect valid operator")