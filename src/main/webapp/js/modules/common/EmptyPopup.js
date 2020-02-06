alva.dashboard.Matrix = function(config) {
	this.init(config);
};

alva.dashboard.Matrix.prototype.init = function(config) {
	this.loadData(config);
	this.render(config);
	this.bind(config);
};

alva.dashboard.Matrix.prototype.loadData = function(config) {};

alva.dashboard.Matrix.prototype.render = function(config) {
	var thisObj = this;
	$("#matrixPopupContainer").load("views/dashboard/matrix.html", function() {
		var language = alva.Utils.getLanguage().toLowerCase();
	
		

		var data = {
			//title: alva.Utils.getMessage(alva.Utils.getNutrientNameConstant(config.nutrient))
		};

		alva.Utils.template('#matrixPopupContainer', data);

		thisObj.resizeContent();

		thisObj.bind();			
	});
};

alva.dashboard.Matrix.prototype.bind = function(config) {
	var thisObj = this;
    $(window).resize(function () {
        thisObj.resizeContent();
    });	

    $("#matrixPopup #contentPopupCloseButton, #matrixPopup #contentPopupCloseCrossButton").on("click", $.proxy(function() {
    	$('#matrixPopupContainer').empty();
    }, this));

    $("#menu-toggle").on('EVENT_MENU_TOGGLE_CLICKED', $.proxy(function() {
    	//$('.matrixPopup').innerWidth($(window).width());
    }, this));
	// $("#inputEmail").on("click", $.proxy(function() {}, this));
};

alva.dashboard.Matrix.prototype.resizeContent = function() {
	var contentHeight = $('.matrixPopup').height() - $('.matrixPopup .panel-heading').height() - 25 - 50;
	$('.matrixPopup .panel-body').innerHeight(contentHeight);
};