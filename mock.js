import { serverStart } from 'express-mock-server';
import authUrls from './auth.js';

var sources = [
  authUrls,
];

// this is default configuration
var opt_serverConfig = {
  port: 8080,
  controlApiUrl: '/api/v1'
};

/**
 *  Return strated Server instance
     function can be called are 
        start
        close
 *  @param {Array} sources
 *  @param {?Object} opt_serverConfig
 *  @return {Server}
 */
serverStart(sources , opt_serverConfig)
  