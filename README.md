# MochaWDJSPlayground
wdjs playground repository to try out and share mocha/wdjs snippets

Set up as a PoC before a full fledged project for WebDriverJS (the official selenium webdriver for javascript, NOT Nightwatch, WD.IO or others). Can utilize either programmatical mocha-parallel or explicit mocha launch.

You're welcome to use this project to try out Javascript Webdriver with MochaJS+Chai, but if you're looking for a project template, do yourself a favor and start a proper project, it's riddled with little unhandled bits and mistakes.

Notable packages:
Mocha
Chai
mocha-param (mocha test parametrization)
mocha-parallel (test parallelization on suite level)
mochawesome (cool test result reporter and HTML/JSON report generator)

use:
npm install

npm test (explicit mocha run)

npm start (programmatic mocha run and loading up test suite from file)
