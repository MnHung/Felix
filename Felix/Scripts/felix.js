/// <reference path="plugins/jquery-1.9.1.js" />
/// <reference path="plugins/jquery-ui-1.10.1.custom/js/jquery-ui-1.10.1.custom.js" />
/// <reference path="plugins/jquery.jqGrid.src.js" />


var Felix = {};

Felix.View = {};

var print = function (content) {
	console.log(content);
};

Felix.View.List = (function () {
	var initial = function () {
		$("#felix-list").jqGrid({
			url: 'test',
			datatype: "local",
			colNames: ['Name', 'Number'],
			colModel: [
				{ name: 'Name', index: 'Name', width: 90 },
				{ name: 'Number', index: 'Number', width: 100 }
			],
			rowNum: 10,
			rowList: [10, 20, 30],
			sortname: 'id',
			viewrecords: true,
			sortorder: "desc",
			caption: "JSON Example"
		});

		// get felix data list to show.
		$.getJSON("test", function (felixList) {
			if ($.isArray(felixList)) {
				var $grid = $("#felix-list");
				for (var i = 0; i < felixList.length; ++i) {
					$grid.jqGrid('addRowData', i + 1, felixList[i]);
				}
			}
		});
	};

	return {
		initial: initial
	};
} ());

Felix.start = function () {
	$("#main").load("List", Felix.View.List.initial);

};


Felix.start();
