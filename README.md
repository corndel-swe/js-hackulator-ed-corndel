<p align="center">
  <img width="200px" src="assets/hackulator-logo.png" />
</p>

# Hackulator

Welcome to the most hilariously broken calculator on the internet.

Bugs... bugs everywhere!

## Getting started

1. Make sure your machine is set up according to the instructions with
   - [bash](https://tech-docs.corndel.com/bash/)
   - [vscode](https://tech-docs.corndel.com/vscode/)
   - [git](https://tech-docs.corndel.com/git/)
   - [node & npm](https://tech-docs.corndel.com/js/installation.html)

1. Clone the repository (i.e. download it), so you have a copy on your machine:

   ```bash
   git clone <your-repository-url>
   ```

1. Once cloned, open a terminal in the project folder, and run

   ```bash
   npm install
   ```

   You should see some output in the terminal saying the packages have been
   audited. If you've got this far, great! You're on track.

> [!NOTE]
>
> If you see a message about "vulnerabilities", don't worry. We aren't deploying
> our code. This is something we'll talk about later.

## Testing

To check if your solution for one of the exercises has worked, you can run the command

```bash
npm run test
```

in the terminal.

> [!TIP]
>
> We have included additional scripts to test individual files.
> For example, running
>
> ```bash
> npm run test:add
> ```
>
> in the terminal will test only the `add.js` code.

## Committing

Each time you fix a bug, you should commit your code with a useful message.

For example,

```bash
git commit -am "fixes add.js"
```

or

```bash
git commit -am "attempts subtract.js (feedback needed)"
```

## Pushing

After committing, you can push your changes to Github by running

```bash
git push
```

in the terminal.

This means other people can see the code you've written, and you can get help if needed.

## Workflow

In summary, your workflow should look like this:

```mermaid
flowchart TD

    A[Attempt exercises]
    B[Run tests]
    C[Commit]
    D[Push]

    A --> B
    B --> C
    C --> D
    D --> A
```

## Deep dive

Before attempting the deep dive, check out the Foundations section
of the Tech Docs, starting with [Variables](https://tech-docs.corndel.com/js/variables.html).

We'd recommend squashing the bugs in the following order:

1. [add.js](/src/add.js)

1. [subtract.js](/src/subtract.js)

1. [multiply.js](/src/multiply.js)

1. [divide.js](/src/divide.js)

1. [average.js](/src/average.js)

1. [power.js](/src/power.js)

1. [remainder.js](/src/remainder.js)

1. [maxOfThree.js](/src/maxOfThree.js)

1. [heron.js](/src/heron.js)

1. [gcd.js](/src/gcd.js)

## Extension

Are there any other functions you could add to the calculator?
