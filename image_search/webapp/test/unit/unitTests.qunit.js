/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ricardo/image_search/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
