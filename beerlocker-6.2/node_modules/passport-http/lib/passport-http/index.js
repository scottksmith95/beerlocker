/**
 * Module dependencies.
 */
var BasicStrategy = require('./strategies/basic');
var DigestStrategy = require('./strategies/digest');


/**
 * Framework version.
 */
require('pkginfo')(module, 'version');

/**
 * Expose constructors.
 */
exports.BasicStrategy = BasicStrategy;
exports.DigestStrategy = DigestStrategy;
