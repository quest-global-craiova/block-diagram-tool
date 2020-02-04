alva.common.ConfirmPopup = function(config) {
	this.init(config);
};

alva.common.ConfirmPopup.prototype.init = function(config) {
	this.render(config);
};

alva.common.ConfirmPopup.prototype.loadData = function(config) {};

alva.common.ConfirmPopup.prototype.render = function(config) {
	$(config.containerSelector).load("/bdtool/views/common/confirmPopup.html", $.proxy(function() {
		this.loadData(config);		
		alva.Utils.template(config.containerSelector, config);
		$("#confirmPopup").modal();
		this.bind(config);
	},this));
};

alva.common.ConfirmPopup.prototype.bind = function(config) {
	$("#firstButton").on("click", $.proxy(function() {
		config.firstCallback();
	}, this));

	$("#secondButton").on("click", $.proxy(function() {
		config.secondCallback();
	}, this));

};