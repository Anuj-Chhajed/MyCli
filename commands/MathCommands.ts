import chalk from "chalk"

export class MathCommands {

    add(a: string, b: string) {

        if (isNaN(Number(a)) || isNaN(Number(b))) {
            console.log(chalk.red("Invalid numbers"))
            return
        }

        console.log(chalk.green(Number(a) + Number(b)))
    }

    sub(a: string, b: string) {
        console.log(chalk.yellow(Number(a) - Number(b)))
    }

    mul(a: string, b: string) {
        console.log(chalk.blue(Number(a) * Number(b)))
    }

    div(a: string, b: string) {

        if (Number(b) === 0) {
            console.log(chalk.red("Division by zero"))
            return
        }

        console.log(chalk.green(Number(a) / Number(b)))
    }

}