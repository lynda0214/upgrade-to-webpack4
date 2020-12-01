# upgrade-to-webpack4
try to upgrade to webpack 4 but renders nothing

# Environment Setup

* use node version 11.15.0

`nvm install 11.15.0`

`nvm use 11.15.0`

* and use babel 6

`npm install -g babel-cli babel-preset-es2015`

# Run Project

to start, run `yarn`

to build, run `gulp`

to test on [http://localhost/web/sample](http://localhost/web/sample), run `babel-node dev-server.js`

# Problem

compile successfully, but it seems not entering Sample component (renders nothing & console.log logs nothing)
