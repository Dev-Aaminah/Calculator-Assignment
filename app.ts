#!/usr/bin/env node

// Importing necessary modules
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

// Function to introduce the calculator
const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};


// Stylish welcome function
async function welcome() {
  let rainbowTitle = chalkAnimation.rainbow('Let\'s Start Calculation');
  await sleep();
  rainbowTitle.stop();
  console.log(chalk.cyanBright(`
   ╭───────────────────────╮
   │                       │
   │   Made by Aaminah     │
   │                       │
   ╰───────────────────────╯

  +--------------------------+
  |                          |
  |       Calculator         |
  |                          |
  |   _____________________  |
  |  | JO           0. |     |
  |  |_________________|     |
  |   ___ ___ ___   ___      |
  |  | 7 | 8 | 9 | | ${chalk.red('+')} |     |
  |  |___|___|___| |___|     |
  |  | 4 | 5 | 6 | | ${chalk.yellow('-')} |     |
  |  |___|___|___| |___|     |
  |  | 1 | 2 | 3 | | ${chalk.green('*')} |     |
  |  |___|___|___| |___|     |
  |  | . | 0 | = | | ${chalk.blue('/')} |     |
  |  |___|___|___| |___|     |
  |__________________________|
  `));
}

// Call the welcome function
await welcome();

// Function to ask calculation questions
async function askQuestion() {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "operator",
        message: "Which operation do you want to perform? \n",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
      },
      {
        type: "number",
        name: "num1",
        message: "Enter number 1: "
      },
      {
        type: "number",
        name: "num2",
        message: "Enter number 2: "
      }
    ])
    .then((answers) => {
      let result;
      switch (answers.operator) {
        case "Addition":
          result = parseFloat(answers.num1) + parseFloat(answers.num2);
          console.log(chalk.greenBright(`Result: ${answers.num1} + ${answers.num2} = ${result}`));
          break;
        case "Subtraction":
          result = answers.num1 - answers.num2;
          console.log(chalk.blueBright(`Result: ${answers.num1} - ${answers.num2} = ${result}`));
          break;
        case "Multiplication":
          result = answers.num1 * answers.num2;
          console.log(chalk.yellowBright(`Result: ${answers.num1} * ${answers.num2} = ${result}`));
          break;
        case "Division":
          result = answers.num1 / answers.num2;
          console.log(chalk.magenta(`Result: ${answers.num1} / ${answers.num2} = ${result}`));
          break;
        default:
          console.log(chalk.redBright("Invalid operator"));
      }
    });
}

// Function to continue the calculation
async function startAgain() {
  do {
    await askQuestion();
    var again = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: "Do you want to continue? Press y or n: "
    });
  } while (again.restart == 'y' || again.restart == 'yes' || again.restart == 'YES');
}

// Call the startAgain function outside the do-while loop
await startAgain();