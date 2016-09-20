#!/usr/bin/env node
console.log('Hello, world!');
var read = require('read-file');
var _ = require('lodash');

var shrinkwrapFile = "npm-shrinkwrap.json";
var shrinkmaskFile = "npm-shrinkmask.json";

var shrinkwrapContents = read.sync(shrinkwrapFile, "utf8");
var shrinkmaskContents = read.sync(shrinkmaskFile, "utf8");

var shrinkwrapObject = JSON.parse(shrinkwrapContents);
var shrinkmaskObject = JSON.parse(shrinkmaskContents);


var sum = _.defaultsDeep({}, shrinkmaskObject, shrinkwrapObject);
// console.log(shrinkwrapObject);
// console.log(shrinkmaskObject);
console.log(JSON.stringify(sum, false, 4));