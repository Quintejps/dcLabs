const svgSize = 900;

var svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", svgSize)
  .attr("height", svgSize)
  .style("background-color", "black");

d3.json("data/buildings.json")
  .then((data) => {
    data.forEach((d) => {
      d.height = +d.height;
    });
    let currPos = 0;
    let rects = svg.selectAll().data(data);
    rects.enter()
    .append("rect")
        .attr("x", (d, i)=>{
            console.log("Item: " + d + "Index " + i);
            return (i * 20) + 25;
        })
        .attr("y", (d) => svgSize - d.height)
        .attr("height", (d)=>{ return d.height; })
        .attr("width", 10)
        .attr("fill", "green");
  })
  .catch((error) => {
    console.log(error);
  });