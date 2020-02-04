alva.diagram.DiagramPage = function(config) {
	this.init(config);
	this.bindInit();
};

alva.diagram.DiagramPage.prototype.init = function(config) {
	this.loadData(config);
};

alva.diagram.DiagramPage.prototype.loadData = function(config) {
	this.render(config);
};

alva.diagram.DiagramPage.prototype.render = function(config) {
	var thisObj = this;
	$("#pageContentContainer").load("/bdtool/views/diagram/diagramPage.html", function() {

		


		thisObj.bind();
		$('#pageContentContainer').trigger(alva.Constants.EVENT_PAGE_CONTENT_LOADED);

		alva.Utils.showSpinner(false);
	});

};

alva.diagram.DiagramPage.prototype.bindInit = function() {
	$('#wrapper').on(alva.Constants.EVENT_PAGE_LOADED, $.proxy(function(e) {

	}));
}

alva.diagram.DiagramPage.prototype.bind = function() {
	$('#wrapper').on(alva.Constants.EVENT_PAGE_LOADED, $.proxy(function(e) {

	}, this));
};