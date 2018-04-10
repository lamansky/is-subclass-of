'use strict'

const f = x => typeof x === 'function'
const ca = require('class-ancestors')
const sbo = require('sbo')

module.exports = sbo((sub, cls) => f(sub) && (f(cls) ? ca : ca.names)(sub).includes(cls))
