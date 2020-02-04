alva.common.Footer = function(config) {
	console.log(config);
	this.init(config);
};

alva.common.Footer.prototype.init = function(config) {
	this.render(config);
	this.bind(config);
};

alva.common.Footer.prototype.render = function(config) {};

alva.common.Footer.prototype.bind = function(config) {
	// $("#inputEmail").on("click", $.proxy(function() {}, this));
};