"use strict";

const joypageDataCache = require("..");
const assert = require("assert").strict;

assert.strictEqual(joypageDataCache(), "Hello from joypageDataCache");
console.info("joypageDataCache tests passed");
