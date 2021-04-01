
function renderData(data) {
    console.log(data);

    var width = 1500,
        height = 1500;

    var radius = 50;

    var svg = d3.select("main .graph").append("svg")
        .attr("viewBox", [-width / 2, -height / 2, width, height])

    var types = Array.from(new Set(data.links.map(d => d.type)))

    var color = d3.scaleOrdinal(types, d3.schemeCategory10)

    var linkArc = d => `M${d.source.x},${d.source.y}A0,0 0 0,1 ${d.target.x},${d.target.y}`

    const simulation = d3.forceSimulation(data.nodes)
        .force("link", d3.forceLink(data.links).id(d => d.id))
        .force("charge", d3.forceManyBody().strength(-300))
        .force("x", d3.forceX())
        .force("y", d3.forceY())
        .force('collide', d3.forceCollide(d => 65))

    simulation.on("tick", () => {
        link.attr("d", linkArc);
        node.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    var drag = simulation => {

        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }

    svg.append("defs").selectAll("marker")
        .data(types)
        .join("marker")
        .attr("id", d => `arrow-${d}`)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", radius + 15)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("fill", color)
        .attr("d", 'M0,-5L10,0L0,5');

    const link = svg.append("g")
        .attr("fill", "none")
        .attr("stroke-width", 1.5)
        .selectAll("path")
        .data(data.links)
        .join("path")
        .attr("stroke", d => color(d.type))
        .attr("marker-end", d => `url(${new URL(`#arrow-${d.type}`, location)})`);

    const node = svg.append("g")
        .attr("id", function(d){ return d.id })
        .attr("fill", "currentColor")
        .attr("stroke-linecap", "round")
        .attr("stroke-linejoin", "round")
        .selectAll("g")
        .data(data.nodes)
        .join("g")
        .call(drag(simulation))

    var clipPaths = node.append("clipPath")
        .attr("id", function (d) { return "clip-circle-" + d.id })
        .append("circle")
        .attr("r", 50);

    var images = node.append("svg:image")
        .attr("xlink:href", function (d) { return d.img; })
        .attr("x", function (d) { return -50; })
        .attr("y", function (d) { return -50; })
        .attr("clip-path", function (d) { return "url(#clip-circle-" + d.id + ")" })
        .attr("width", function (d) { return d.landscape ? null : 100 })
        .attr("height", function (d) { return d.landscape ? 100 : null });
 
    node.append("text")
        .attr("x", 50 + 4)
        .attr("y", "0.31em")
        .text(d => d.name)
        .clone(true).lower()
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("stroke-width", 3);
}

<g fill="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <g transform="translate(202.1400543449705,-97.67193759389193)">
        <text x="54" y="0.31em" fill="none" stroke="white" stroke-width="3">Room:0</text>
        <clipPath id="clip-circle-0"><circle r="50"></circle></clipPath>
        <image xlink:href="/psycho.png" x="-50" y="-50" clip-path="url(#clip-circle-0)" width="100"></image>
        <text x="54" y="0.31em">Room:0</text>
    </g>
</g>  