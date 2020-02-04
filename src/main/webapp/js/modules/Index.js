alva.Index = function(config) {
	this.init(config);
};

alva.Index.prototype.init = function(config) {
	var module = window.location.hash.substr(1);
	if (config == undefined) {
		config = {};
	}
	config.module = module;

	this.loadData(config);
	this.bind(config);
};

alva.Index.prototype.loadData = function(config) {
	var thisObj = this;
	alva.Utils.loadApplicationData(function() {
		thisObj.render(config);
	});
};

alva.Index.prototype.render = function(config) {
	alva.Utils.loadMasterPageWidgets({
		leftBarContainerSelector: "#leftBarContainer",
		rightBarContainerSelector: "#rightBarContainer",
		headerContainerSelector: "#headerContainer",
		module: config.module
	});

	this.renderPageContent(config);
};

alva.Index.prototype.renderPageContent = function(config) {
	alva.Index.isPageContentLoaded = false;
	if (config.module == '' || config.module == alva.Constants.PAGE_DIAGRAM) {
		alva.page = new alva.diagram.DiagramPage();
	} else if (config.module == alva.Constants.PAGE_DASHBOARD) {
		alva.page = new alva.dashboard.DashboardPage();
	} else if (config.module == alva.Constants.PAGE_SETUP) {
		alva.page = new alva.setup.SetupPage({
			module: config.module
		});
	} else if (config.module == alva.Constants.PAGE_HISTORY) {
		alva.page = new alva.history.HistoryPage({
			module: config.module
		});
	} 
};

alva.Index.prototype.syncSpinner = function() {
	if (alva.common.isLeftBarLoaded == true && alva.common.isRightBarLoaded && alva.Index.isPageContentLoaded == true) {
		$('#wrapper').trigger(alva.Constants.EVENT_PAGE_LOADED);
		alva.Utils.resizeWidgets();
		alva.Utils.showSpinner(false);
	};
};

alva.Index.prototype.bind = function(config) {
	// $('#leftBarContainer').off();
	// $('#groupsContainer').off();
	// $('#ingredientsSearch').off();	
	
	window.onhashchange = $.proxy(function() {
		alva.Utils.showSpinner(true);
		$('#wrapper').off();		
		// $('#pageContentContainer').off();		

		var module = window.location.hash.substr(1);
		if (config == undefined) {
			config = {};
		}
		config.module = module;
		this.render(config);
	}, this);

	$('#leftBarContainer').on(alva.Constants.EVENT_LEFT_BAR_LOADED, $.proxy(function(e) {
		alva.common.isLeftBarLoaded = true;
		
		this.syncSpinner();
	}, this));

	$('#rightBarContainer').on(alva.Constants.EVENT_RIGHT_BAR_LOADED, $.proxy(function(e) {
		alva.common.isRightBarLoaded = true;
		
		this.syncSpinner();
	}, this));	

	$('#pageContentContainer').on(alva.Constants.EVENT_PAGE_CONTENT_LOADED, $.proxy(function(e) {
		alva.Index.isPageContentLoaded = true;
		this.syncSpinner();
	}, this));
};