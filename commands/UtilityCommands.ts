import fs from "fs"

export class UtilityCommands {

    greet(name: string) {
        console.log(`Hello ${name}`)
    }

    fileInfo(filename: string) {

        if (!fs.existsSync(filename)) {
            console.log("File does not exist")
            return
        }

        const stats = fs.statSync(filename)

        console.log("File Size:", stats.size)
        console.log("Created At:", stats.birthtime)
    }

    time() {
        console.log(new Date().toLocaleTimeString())
    }

    random() {
        console.log(Math.floor(Math.random() * 100))
    }

}