var chartdata =[];
for(var i = 0; i < 14; i++)
{
	var mydata = i*4; //Math.random()*300
	chartdata.push(mydata);
}
d3.select(".chart_tri").selectAll("div").data(chartdata).enter().append("div").attr("class", "bar").style("height", function(d){
	return d + "px";
});