alva.common.RightBar = function(config) {
	this.init(config);
};

alva.common.RightBar.prototype.init = function(config) {
	this.render(config);
};

alva.common.RightBar.prototype.render = function(config) {
	var thisObj = this;
	alva.common.isRightBarLoaded = false;

	$(config.rightBarContainerSelector).load("views/common/rightBar.html", function() {
	    var data = {
	        messages: {
	            MESSAGE_DASHBOARD: alva.Utils.getMessage('MESSAGE_DASHBOARD'),
	            MESSAGE_HISTORY: alva.Utils.getMessage('MESSAGE_HISTORY'),
	            MESSAGE_SETTINGS: alva.Utils.getMessage('MESSAGE_SETTINGS'),
	            MESSAGE_REPORTS: alva.Utils.getMessage('MESSAGE_REPORTS'),
	        }
	    }
	    alva.Utils.template('#rightBar', data);   

		thisObj.bind(config);

		$(config.rightBarContainerSelector).trigger(alva.Constants.EVENT_RIGHT_BAR_LOADED);
	});
};

alva.common.RightBar.prototype.bind = function(config) {

};

alva.common.RightBar.prototype.syncSpinner = function() {

};