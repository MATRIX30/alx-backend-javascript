# 0x05. NodeJS Basics

`Back-end`
`JavaScript`
`ES6`
`NodeJS`
`ExpressJS`
- Weight: 1
- Project will start Jun 3, 2024 4:00 AM, must end by Jun 5, 2024 4:00 AM
- Checker was released at Jun 3, 2024 4:00 PM
- An auto review will be launched at the deadline

![img](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/1/82692897e15d9f03256f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240604%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240604T203438Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=6cab81bc761243e292f1f497d9d07ec3b58a3d627de804a5e0614908402c9087)

## Resources

### Read or watch:

- [Node JS getting started](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Process API doc](https://node.readthedocs.io/en/latest/api/process/)
- [Child process](https://nodejs.org/api/child_process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://github.com/remy/nodemon#nodemon)

## Learning Objectives
At the end of this project, you are expected to be able to `explain to anyone`, without the help of Google:

- run javascript using NodeJS
- use NodeJS modules
- use specific Node JS module to read files
- use process to access command line arguments and the environment
- create a small HTTP server using Node JS
- create a small HTTP server using Express JS
- create advanced routes with Express JS
- use ES6 with Node JS with Babel-node
- use Nodemon to develop faster

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using `node` (version 12.x.x)
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using `Jest` and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
- All of your functions/classes must be exported by using this format: `module.exports = myFunction`;

## Provided files

### `database.csv`
```bash
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

### `package.json`
Click to show/hide file contents
```bash

{
  "name": "node_js_basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
    "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai-http": "^4.3.0",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "nodemon": "^2.0.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}
```

### `babel.config.js`
Click to show/hide file contents

```bash
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### `.eslintrc.js`
Click to show/hide file contents
and…
Don’t forget to run `$ npm install` when you have the `package.json`