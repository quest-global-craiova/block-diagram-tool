alva.common.Spinner = function(config) {
	this.init(config);
};

alva.common.Spinner.prototype.init = function(config) {
	this.render(config);
	this.bind(config);
};

alva.common.Spinner.prototype.render = function(config) {
	$(config.containerSelector).load("views/common/spinner.html", function() {});

};

alva.common.Spinner.prototype.bind = function() {
	// $("#inputEmail").on("click", $.proxy(function() {}, this));
};