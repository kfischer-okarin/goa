'use strict';

require('./lib/env');

class GoaPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.commands = {};

    this.hooks = {};
  }
}

module.exports = GoaPlugin;
