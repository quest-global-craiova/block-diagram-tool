alva.common.LeftBar = function(config) {
	this.init(config);
};

alva.common.LeftBar.prototype.init = function(config) {
	this.render(config);
};

alva.common.LeftBar.prototype.render = function(config) {
	var thisObj = this;
	alva.common.isLeftBarLoaded = false;

	$(config.leftBarContainerSelector).load("views/common/leftBar.html", function() {
	    var data = {
	        messages: {
	            MESSAGE_DASHBOARD: alva.Utils.getMessage('MESSAGE_DASHBOARD'),
	            MESSAGE_HISTORY: alva.Utils.getMessage('MESSAGE_HISTORY'),
	            MESSAGE_SETTINGS: alva.Utils.getMessage('MESSAGE_SETTINGS'),
	            MESSAGE_REPORTS: alva.Utils.getMessage('MESSAGE_REPORTS'),
	        }
	    }
	    alva.Utils.template('#leftBar', data);   

		thisObj.bind(config);

		$(config.leftBarContainerSelector).trigger(alva.Constants.EVENT_LEFT_BAR_LOADED);
	});
};

alva.common.LeftBar.prototype.bind = function(config) {

};

alva.common.LeftBar.prototype.syncSpinner = function() {

};