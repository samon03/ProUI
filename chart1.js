var chartdata =[];
for(var i = 0; i < 14; i++)
{
	var mydata = Math.random()*50;
	chartdata.push(mydata);
}
d3.select(".chart_rand").selectAll("div").data(chartdata).enter().append("div").attr("class", "bar").style("height", function(d){
	return d + "px";
});