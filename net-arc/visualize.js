//d3.select("#codeplane")
 // .transition()
  //.duration(2000)
  //.attr("transform", "scale(.5 .5)")

function plat(nambo){

    document.getElementById("info").innerHTML+=
        `
    <div class="programbar">
        <div class="icopng" style="background-image: url('images/${nambo.icon}');"></div>
        <div class="rightbox">
          <div class="proname">${nambo.name}</div>
          <div class="stat">per</br>${nambo.per}</div>
          <div class="stat">spd</br>${nambo.spd}</div>
          <div class="stat">att</br>${nambo.atk}</div>
          <div class="stat">def</br>${nambo.def}</div>
          <div class="stat">rez</br>${nambo.rez}</div>
          <div class="clear"></div>
          <div class="typi">type 
            <span class="typ">${nambo.type}</span></div>
    
        </div>
        <div class="efboxright">effect</br> ${nambo.eff}</div>
    
    </div><div class="clear"></div>`
  }

  



function renderData(data) {
    console.log(data);

    const legend = {
        'lobby':'./images/lobby.svg',
        'file':'./images/file.svg',
        'password':'./images/password.svg',
        'control':'./images/control.svg',
        'ice':'./images/ice.svg',
        'root':'./images/root.svg'
    }

    var width = 1500,
        height = 1500;

    var radius = 50;

    var svg = d3.select("main .graph").append("svg")
        .attr("viewBox", [-width / 2, -height / 2, width, height])

    var linkTypes = Array.from(new Set(data.links.map(d => d.type)));
    var nodeTypes = Array.from(new Set(data.nodes.map(d => d.type)));

    var linkColor = d3.scaleOrdinal(linkTypes, d3.schemeCategory10)
    var nodeColor = d3.scaleOrdinal(nodeTypes, d3.schemeCategory10)

    var linkArc = d => `M${d.source.x},${d.source.y}A0,0 0 0,1 ${d.target.x},${d.target.y}`

    const simulation = d3.forceSimulation(data.nodes)
        .force("link", d3.forceLink(data.links).id(d => d.id))
        .force("charge", d3.forceManyBody().strength(0))
        .force("x", d3.forceX())
        .force("y", d3.forceY())
        .force('collide', d3.forceCollide(d => 130))

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
        .data(linkTypes)
        .join("marker")
        .attr("id", d => `arrow-${d}`)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", radius + 15)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("fill", linkColor)
        .attr("d", 'M0,-5L10,0L0,5');

    const link = svg.append("g")
        .attr("fill", "none")
        .attr("stroke-width", 1.5)
        .selectAll("path")
        .data(data.links)
        .join("path")
        .attr("stroke", d => linkColor(d.type))
        .attr("marker-end", d => `url(${new URL(`#arrow-${d.type}`, location)})`);

    const node = svg.append("g")
        .selectAll("g")
        .data(data.nodes)
        .join("g")
        .attr("id", function(d){ return d.id })
        .attr("fill", nodeColor)
        .attr("stroke-linecap", "round")
        .attr("stroke-linejoin", "round")
        .call(drag(simulation));

    var circles = node.append("circle")
        .attr("r", 50)
        .style("filter", "url(#red-glow)")
       
        .attr("fill", d => nodeColor(d.type));

       // var clipPaths = node.append("clipPath")
    //     .attr("id", function (d) { return "clip-circle-" + d.id })
    //     .append("circle")
    //     .attr("r", 50);

    var images = node.append("svg:image")
        .attr("xlink:href", function (d) { return legend[d.type]; })
        .attr("x", function (d) { return -50; })
        .attr("y", function (d) { return -50; })
        .attr("width", 100)
        .attr("height", 100)
        
        // .attr("clip-path", function (d) { return "url(#clip-circle-" + d.id + ")" })
        //.attr("width", function (d) { return d.landscape ? null : 100 })
        //.attr("height", function (d) { return d.landscape ? 100 : null });

    var setEvents = images
        .on('mouseenter', function() {
            // select element in current context
            d3.select( this )
              .transition()
              .attr("x", -100)
              .attr("y", -100)
              .attr("width", 200)
              .attr("height", 200);
          })
        .on('mouseleave', function() {
            d3.select( this )
              .transition()
              .attr("x", -50)
              .attr("y", -50)
              .attr("width", 100)
              .attr("height", 100)
          })
        .on('click', function(x,d){
            document.getElementById('info').innerHTML =""
           for (var b=0;b<d.contents.length; b++){
               plat(window[d.contents[b].type])
           }
            
        }) 
        ;


    node.append("text")
        .attr("x", 50 + 4)
        .attr("y", "0.31em")
        .text(d => d.type)
        .clone(true).lower()
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("stroke-width", 3);
}






