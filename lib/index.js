#!/usr/bin/env node

/*
 * commandlinecalculator
 * https://github.com/shardulsingh/commandlinecalculator
 *
 * Copyright (c) 2018 Shardul Singh
 * Licensed under the MIT license.
 */

var compute = require("./perform_operation.js");
if (process.argv.length!=4){
    console.error("ERROR: Parameters missing");
}
else{
var operation= process.argv[2];
var arguments = process.argv[3].split(",");
compute.performOperation(operation,arguments);
}



