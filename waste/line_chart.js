window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
	toolTip: {
		shared: true
	},
	data: [{
		type: "line",
		color: "#369EAD",
		dataPoints: [
			{ x: new Date(2020, 00, 7), y: 85.4 }, 
			{ x: new Date(2020, 00, 14), y: 92.7 },
			{ x: new Date(2020, 00, 21), y: 64.9 },
			{ x: new Date(2020, 00, 28), y: 58.0 },
			{ x: new Date(2020, 01, 4), y: 63.4 },
			{ x: new Date(2020, 01, 11), y: 69.9 },
			{ x: new Date(2020, 01, 18), y: 88.9 },
			{ x: new Date(2020, 01, 25), y: 66.3 },
			{ x: new Date(2020, 02, 4), y: 82.7 },
			{ x: new Date(2020, 02, 11), y: 60.2 },
			{ x: new Date(2020, 02, 18), y: 87.3 },
			{ x: new Date(2020, 02, 25), y: 98.5 }
		]
	},
	{
		type: "line",
		color: "#7F6084",
		dataPoints: [
			{ x: new Date(2020, 00, 7), y: 42.5 }, 
			{ x: new Date(2020, 00, 14), y: 44.3 },
			{ x: new Date(2020, 00, 21), y: 28.7 },
			{ x: new Date(2020, 00, 28), y: 22.5 },
			{ x: new Date(2020, 01, 4), y: 25.6 },
			{ x: new Date(2020, 01, 11), y: 45.7 },
			{ x: new Date(2020, 01, 18), y: 54.6 },
			{ x: new Date(2020, 01, 25), y: 32.0 },
			{ x: new Date(2020, 02, 4), y: 43.9 },
			{ x: new Date(2020, 02, 11), y: 26.4 },
			{ x: new Date(2020, 02, 18), y: 40.3 },
			{ x: new Date(2020, 02, 25), y: 54.2 }
		]
	}]
});
chart.render();

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	e.chart.render();
}

}