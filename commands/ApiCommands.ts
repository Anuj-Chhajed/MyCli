import axios from "axios"
import chalk from "chalk"

export class ApiCommands {

    async joke() {

        try {

            const res = await axios.get("https://official-joke-api.appspot.com/random_joke")

            console.log(chalk.cyan(res.data.setup))
            console.log(chalk.cyan(res.data.punchline))

        } catch {
            console.log("Error fetching joke")
        }

    }

    async quote() {

        try {

            const res = await axios.get("https://zenquotes.io/api/random")

            console.log(chalk.green(res.data[0].q))
            console.log(`By: ${res.data[0].a}`)

        } catch {
            console.log("Error fetching quote")
        }

    }

    async github(username: string) {

        try {

            const res = await axios.get(`https://api.github.com/users/${username}`)

            const user = res.data

            console.log(chalk.yellow(`Name: ${user.name}`))
            console.log(`Followers: ${user.followers}`)
            console.log(`Public Repos: ${user.public_repos}`)

        } catch {
            console.log("GitHub user not found")
        }

    }

    async weather(city: string) {

        try {

            const res = await axios.get(`https://wttr.in/${city}?format=3`)

            console.log(chalk.blue(res.data))

        } catch {
            console.log("Error fetching weather")
        }

    }

    async fact() {

        try {

            const res = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en")

            console.log(chalk.magenta(res.data.text))

        } catch {
            console.log("Error fetching fact")
        }

    }

}