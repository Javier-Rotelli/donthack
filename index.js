/*!
 * donthackme
 * Copyright(c) 2017 Javier Rotelli
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */
var debug = require('debug')('donthackme')


var blacklist = [
  "admin.php",
  "admin/login.php",
  "administrator/index.php",
  "ajaxproxy/proxy.php",
  "bitrix/admin/index.php",
  "magmi/web/magmi.php",
  "index.php",
  "wp-admin/admin-ajax.php",
  "wp-admin/post-new.php",
  "wp-admin/options-link.php",
  "wp-admin/includes/themes.php",
  "wp-login.php",
  "xmlrpc.php"
];

/**
 * Module exports.
 * @public
 */
module.exports = function(config) {
  return function(req, res, next) {
    var found = blacklist.find(matches(req.originalUrl));
    if( found === undefined) {
      next();
    } else {
      debug('someone tried to access ' + req.originalUrl)
      if(config !== undefined && config.redirectUrl !== undefined ) {
        res.redirect(config.redirectUrl)
      } else {
        res.send('It Tickles!');
      }
    }
  }
}

function matches(url) {
  return function (elem) {
    return url.indexOf(elem) > -1;
  }
}
