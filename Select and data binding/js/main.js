var data = [25, 20, 15, 10, 5];

var svg = d3.select("#chart-area").append("svg")
    .attr("width", '400px')
    .attr("height", '400px');

var rects = svg.selectAll("rect")
    .data(data);

rects.enter()
    .append("rect")
        .attr("x", (d, i)=>{
            console.log("Item: " + d + "Index " + i);
            return (i * 50) + 25;
        })
        .attr("y", 0)
        .attr("height", (d)=>{ return d; })
        .attr("width", 40)
        .attr("fill", "green");
