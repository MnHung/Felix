/// <reference path="plugins/jquery-1.9.1.js" />
/// <reference path="plugins/jquery-ui-1.10.1.custom/js/jquery-ui-1.10.1.custom.js" />
/// <reference path="plugins/jquery.jqGrid.src.js" />
/// <reference path="plugins/grid.locale-tw.js" />
/// <reference path="plugins/jquery.tmpl.js" />


var Felix = {};

Felix.View = {};

var print = function (content) {
	console.log(content);
};

Felix.View.List = (function () {
	var initial = function () {

		// build list with jqGrid.
		$("#felix-list").jqGrid({
			url: 'test',
			datatype: "local",
			colNames: ['id', 'Name', 'Number'],
			colModel: [
			//hidden
				{name: '_id', index: '_id', width: 90, hidden: true },
				{ name: 'Name', index: 'Name', width: 90 },
				{ name: 'Number', index: 'Number', width: 100 }
			],
			rowNum: 10,
			rowList: [10, 20, 30],
			sortname: 'id',
			viewrecords: true,
			sortorder: "desc",
			autowidth: true,
			caption: "維修單",
			pager: '#felix-list-pager',
			onSelectRow: function (index) {
				var data = $("#felix-list").getRowData(index);
				Felix.View.Operation.Edit.renderFelixForm(data);
			}
		});

		//		$("#felix-list").jqGrid({
		//			onSelectRow: function(id){ 
		//				print("id: " + id);	
		//			}
		//		});

		// build jqGrid nav bar
		//		$("#felix-list").jqGrid('navGrid', '#felix-list-pager',
		//			{}, //options
		//			{height: 280, reloadAfterSubmit: false }, // edit options
		//			{height: 280, reloadAfterSubmit: false }, // add options
		//			{reloadAfterSubmit: false }, // del options
		//			{} // search options
		//		);

		// get felix data list to show.
		$.getJSON("test", function (felixList) {
			if ($.isArray(felixList)) {
				var $grid = $("#felix-list");
				for (var i = 0; i < felixList.length; ++i) {
					$grid.jqGrid('addRowData', i + 1, felixList[i]);
				}
			}

			// create dynamic edit button: 
//			$("#felix-list tr").click(function (event) {
//				var $row = $(event.currentTarget);
//				var $firstCol = $row.find("td:first");
//				print($firstCol);
//			});

		});

		//		$(window).bind('resize', function () {
		//			$("#felix-list").setGridWidth($(window).width() - 35);
		//		}).trigger('resize');
	}

	return {
		initial: initial
	};
} ());

Felix.View.Operation = (function () {
	var initial = function () {
		$("#felix-operations").tabs({ });
	};

	return {
		initial: initial
	};
} ());

Felix.View.Operation.Edit = (function () {
	var renderFelixForm = function (felixData) {
		print(felixData);
		print($("#tmpl-felix-form").tmpl(felixData));
		$("#tmpl-felix-form").tmpl(felixData).replaceAll("#felix-edit>div");
	};

	return {
		renderFelixForm: renderFelixForm
	};
} ());

Felix.start = function () {
	$("#felix-main")
		.find(".list-panel").load("List", Felix.View.List.initial)
		.end()
		.find(".operation-panel").load("Operation", Felix.View.Operation.initial);

};


Felix.start();
