alva.common.Empty = function(config) {
	this.init(config);
};

alva.common.Empty.prototype.init = function(config) {
	this.loadData(config);
	this.render(config);
	this.bind(config);
};

alva.common.Empty.prototype.loadData = function(config) {
	var thisObj = this;
	$.ajax({
		method: "POST",
		url: "services/getEmptyData",
		success: $.proxy(function(response) {
			this.render(config);
		
		}, thisObj),
		error: $.proxy(function() {

		}, thisObj)
	});
};

alva.common.Empty.prototype.render = function(config) {
	var thisObj = this;
	$("#emptyContainer").load("views/common/empty.html", function() {
		var data = {};

		alva.Utils.template('#emptyContainer', data);

		thisObj.bind();
	});
};

alva.common.Empty.prototype.bind = function(config) {
	// $("#inputEmail").on("click", $.proxy(function() {}, this));
};