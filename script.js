// set the dimensions and margins of the graph
var margin = { top: 100, right: 100, bottom: 100, left: 100 }
var h = 1000 - margin.top - margin.bottom
var w = 1000 - margin.left - margin.right

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Read the data
d3.csv('cars-sample.csv', function (data) {
  
  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 5000])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 47])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));
