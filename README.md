# NodeHack-playground

## Introduction

This package provides a simple web interface to the [NodeHack](https://github.com/stenno/nodehack) bindings.
It consists of frontend components written in [React](https://github.com/facebook/react) and and simple webserver written in [express](https://github.com/expressjs/express).

## Installation/Start

Before using, consider the following *important* points:

1. NodeHack-playground is a only a quick and dirty demonstration of NodeHacks capabilities. It doesn't have sufficient security mechanisms. Make sure to *always* run NodeHack-playground on localhost with restricted permissions and to *never* expose an instance to the Internet. Malicious (or buggy) input could probably lead to arbitrary code execution.
2. NodeHack is still in development. Bugs in the code might kill characters and sessions. Consider any game or session pontentially lost. It is recommended to create throwaway accounts for use with NodeHack.
3. NodeHack characters should use the recommended [.nethackrc](https://github.com/stenno/NodeHack/blob/master/.nethackrc).
4. NodeHack cannot do character creation yet. Therefore it expects an already running game when connecting.

---

git, node and npm should be installed. It is recommended to use `nvm` to manage your node and npm installations. See [the README](https://github.com/creationix/nvm/blob/master/README.md) for more information and instructions. This program was developed against node version 11.9.0.

Clone the NodeHack-playground repository and install it.

`$ git clone https://github.com/stenno/NodeHack-playground.git`  
`$ npm install`

Compile the resources:

`$ npm run build`

Start the server:

`$ node index.js`

NodeHack-playground is now hosted on [http://localhost:8000](http://localhost:8000).
