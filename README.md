# MyCLI

MyCLI is a custom Command Line Interface (CLI) tool built using **Node.js + TypeScript**.
This project was created as part of the **SESD Workshop 2 CLI Project**.

The CLI is built using **Object-Oriented Programming (OOP)** concepts and integrates multiple public APIs to perform useful tasks directly from the terminal.

---

# 🚀 Features

* Built with **Node.js + TypeScript**
* Uses **OOP with Classes**
* Supports **10+ CLI commands**
* Integrates **5 APIs**
* Provides **colored CLI output**
* Includes **help and version commands**

---

# 📦 Installation

Clone the repository:

```
git clone <your-repo-link>
cd mycli
```

Install dependencies:

```
npm install
```

Build the project:

```
npm run build
```

Link CLI globally:

```
npm link
```

Now you can run the CLI anywhere using:

```
mycli <command>
```

---

# 🧠 Available Commands

## Basic Commands

```
mycli greet <name>
```

Example:

```
mycli greet Anuj
```

Output:

```
Hello Anuj
```

---

## Math Commands

Add two numbers

```
mycli add <num1> <num2>
```

Subtract numbers

```
mycli sub <num1> <num2>
```

Multiply numbers

```
mycli mul <num1> <num2>
```

Divide numbers

```
mycli div <num1> <num2>
```

Example:

```
mycli add 10 20
```

---

# 🌐 API Commands

## Random Joke

```
mycli joke
```

Example output:

```
Why don't programmers like nature?
Too many bugs.
```

---

## Random Quote

```
mycli quote
```

---

## GitHub User Info

```
mycli github <username>
```

Example:

```
mycli github torvalds
```

---

## Weather Information

```
mycli weather <city>
```

Example:

```
mycli weather pune
```

---

## Random Fact

```
mycli fact
```

---

# 🛠 Utility Commands

Get file information

```
mycli fileinfo <filename>
```

Example:

```
mycli fileinfo test.txt
```

---

Get current time

```
mycli time
```

---

Generate random number

```
mycli random
```

---

# 📋 Help Command

```
mycli --help
```

Shows all available commands.

---

# 🔢 Version

```
mycli --version
```

---

# 🧱 Tech Stack

* Node.js
* TypeScript
* Commander.js
* Axios
* Chalk

---

# 👨‍💻 Author

**Anuj Chhajed**

SESD Workshop 2 CLI Project
