const svgSize = 400;

var svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", svgSize)
  .attr("height", svgSize)
  .style("background-color", "black");

d3.json("data/ages.json")
  .then((data) => {
    data.forEach((d) => {
      d.age = +d.age;
    });
    let currPos = 0;
    let circles = svg.selectAll().data(data);
    circles
      .enter()
      .append("circle")
      .attr("cy", svgSize / 2)
      .attr("cx", (d, i) => {
        console.log("Item: " + d + "Index " + i);
        return (i * 60) + 50;
      })
      .attr("r", (d) => d.age * 2)
      .attr("fill", (d) => (d.age > 10 ? "red" : "blue"));
  })
  .catch((error) => {
    console.log(error);
  });
