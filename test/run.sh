#!/bin/bash
echo "************************"
echo "Testing API REST..."
echo "************************"
NOW=$(date  +%d-%m-%y-%H:%M) && ./node_modules/mocha/bin/mocha  test/runThis.js --timeout 100000 --reporter mochawesome --reporter-options enableCode=false, reportFilename=test-${NOW}
echo "************************"
echo "Killing background processes..."
echo "************************"
jobs -p | xargs -I {} kill {}
