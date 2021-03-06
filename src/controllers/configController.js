'use strict';
var ConfigController = function(socket, route) {
	if (!socket || typeof route !== 'string') throw new Error('You must define a socket and a route');
	this.io = socket;
	this.route = route;
};

ConfigController.prototype.getConfig = function(boxId, callback) {
	var _self = this;
	this.io.socket.get(this.route + boxId, function(body, response) {
		if (typeof callback === 'function') callback(null, body);
	});
};

module.exports = ConfigController;

