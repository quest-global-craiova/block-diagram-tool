alva.common.Header = function(config) {
	this.init(config);
};

alva.common.Header.prototype.init = function(config) {
	this.render(config);
};

alva.common.Header.prototype.render = function(config) {
	var thisObj = this;
	$(config.headerContainerSelector).load("views/common/header.html", function() {
		// var imageSource = alva.Utils.getApplicationData(alva.Constants.APPLICATION_PROPERTIES_IMAGES_URL) + "/userImage.png";
		// $("#userImage").attr("src", imageSource);

	    var data = {
	        messages: {
	            MESSAGE_LOG_OUT: alva.Utils.getMessage('MESSAGE_LOG_OUT'),
	        }
	    }

	    alva.Utils.template('#header', data);

		thisObj.bind(config);
	});
};

alva.common.Header.prototype.bind = function(config) {
	$("#menu-toggle").on("click", $.proxy(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("active");
		setTimeout(function() {
			var ingredientBarChart = $('#ingredientBarChart').highcharts();
			var combinationBarChart = $('#combinationBarChart').highcharts();
			if(ingredientBarChart && combinationBarChart){
				ingredientBarChart.reflow();
				combinationBarChart.reflow();
			}
		}, 500);

		$("#menu-toggle").trigger('EVENT_MENU_TOGGLE_CLICKED');
	}, this));

	$("#logoutButton").on('click', $.proxy(function() {
		alva.Utils.showConfirmPopup({
			containerSelector: "#confirmPopupContainer",
			title: 'Log out',
			message: 'Are you sure you want to log out?',
			firstButton: 'Yes',
			secondButton: 'No',
			firstCallback: function() {
				$.ajax({
					method: "POST",
					url: "services/logout",
					success: $.proxy(function(response) {
						response = JSON.parse(response);
						if (response.hasOwnProperty('OK')) {
							location.assign('login');
						} else {
							alva.Utils.showAlert(response.ERROR, alva.Constants.ALERT_TYPE_ERROR);
						}
					}, this),
					error: $.proxy(function() {
						alva.Utils.showAlert('Couldn`t logout', alva.Constants.ALERT_TYPE_ERROR);
					}, this)
				});
			},
			secondCallback: function() {
			},
		});		
	}, this));

	$("#matrixButton").on("click", $.proxy(function(e) {
		new alva.dashboard.Matrix({});
	}, this));
	
};