#!/bin/bash
echo "************************"
echo "Testing API REST..."
echo "************************"
NOW=$(date  +%d-%m-%y-%H:%M) && ./node_modules/mocha/bin/mocha  test/get*.js --timeout 100000 --reporter mochawesome --reporter-options reportFilename=test-${NOW} #--reporter mocha-simple-html-reporter --reporter-options output=report.html
echo "************************"
echo "Killing background processes..."
echo "************************"
jobs -p | xargs -I {} kill {}