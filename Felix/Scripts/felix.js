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
			datatype: "json",
			colNames: ['Id', 'Name', 'CreateTime', 'Amount', 'Tax', 'Total', 'Notes'],
			colModel: [
				{ name: '_id', index: '_id', width: 55 },
				{ name: 'Name', index: 'name', width: 90 },
				{ name: 'CreateTime', index: 'name asc, invdate', width: 100 },
				{ name: 'amount', index: 'amount', width: 80, align: "right" },
				{ name: 'tax', index: 'tax', width: 80, align: "right" },
				{ name: 'total', index: 'total', width: 80, align: "right" },
				{ name: 'note', index: 'note', width: 150, sortable: false }
			],
			rowNum: 10,
			rowList: [10, 20, 30],
			pager: '#pager2',
			sortname: 'id',
			viewrecords: true,
			sortorder: "desc",
			caption: "JSON Example"
		});

	};

	return { initial: initial };
} ());

Felix.start = function () {
	$("#main").load("List", Felix.View.List.initial);

};


Felix.start();
