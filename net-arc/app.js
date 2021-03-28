
function formatData(data) {
    console.log(data);

    var graph = {
        nodes: [
        ],
        links: [
        ]
    };

    for (let index = 0; index < data.rooms.length; index++) {
        const node = data.rooms[index];

        graph.nodes.push({
            id: node.id,
            name: "Room:"+node.id,
            img: "/psycho.png",
            landscape: false
        })
    }

    for (let index = 0; index < data.links.length; index++) {
        const link = data.links[index];

        graph.links.push({
            source: link.source,
            target: link.target,
            type: "default"
        })
    }

    return graph;
}

var difficulty = "basic";
var narc = new Narc(difficulty);
narc.populate();

var graph = formatData(narc);
renderData(graph);