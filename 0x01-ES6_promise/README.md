# 0x01. ES6 Promises

![img](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/75862d67ca51a042003c.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240409%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240409T212104Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=84118fdecb4505fc062dac526055ee693b999172d8605b573f16a20b6ec6e62c)

## Resources

### Read or watch:

- Promise
- JavaScript Promise: An introduction
- Await
- Async
- Throw / Try

### Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- Promises (how, why, and what)
- How to use the then, resolve, catch methods
- How to use every method of the Promise object
- Throw / Try
- The await operator
- How to use an async function

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory

- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- All of your functions must be exported

## Setup

### Install NodeJS 12.11.x

(in your home directory):

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

```bash
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

## Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied `package.json` and run `npm install`.

## Configuration Files
Add the files below to your project directory

### `package.json`

Click to show/hide file contents

### `babel.config.js`

Click to show/hide file contents

### `utils.js`

Use when you get to tasks requiring `uploadPhoto` and `createUser`.

Click to show/hide file contents


### `.eslintrc.js`
Click to show/hide file contents
### and…
Don’t forget to run `$ npm install` when you have the `package.json`

## Response Data Format
`uploadPhoto` returns a response with the format

```bash
{
  status: 200,
  body: 'photo-profile-1',
}
```

createUser returns a response with the format

```bash
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```
