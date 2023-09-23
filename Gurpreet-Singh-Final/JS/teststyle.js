
let testbutton = document.getElementById("TestBUTTON");
let addCourse = document.getElementById("AddClass");
let textbox1 = document.getElementById("textbox1");
let textbox2 = document.getElementById("textbox2");

class Queue {
    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }
    enqueue(item) {
        this.items[this.backIndex] = item
        this.backIndex++
        return item + ' inserted'
    }
    dequeue() {
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return item
    }
    peek() {
        return this.items[this.frontIndex]
    }
    isEmpty() {
    // return true if the queue is empty.
    return this.items.length == 0;
    }
    get printQueue() {
        return this.items;
    }
}



// create a graph class
class Graph {
    // defining vertex array and
    // adjacent list
constructor()
{
        //no point in noOfVertices
        //this.noOfVertices = noOfVertices;
        
        this.AdjList = new Map();
    }
 
    // functions to be implemented
 

// add vertex to the graph
addVertex(v)
{
    // initialize the adjacent list with a
    // null array
    this.AdjList.set(v, []);
}

addEdge(v, w)
    {
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);
 
    // Since graph is undirected,
    // add an edge from w to v also
    // uncomment if undirected graph
    //this.AdjList.get(w).push(v);
    }


// Prints the vertex and adjacency list
printGraph()
{
    // get all the vertices
    var get_keys = this.AdjList.keys();
 
    // iterate over the vertices
    for (var i of get_keys)
{
        // get the corresponding adjacency list
        // for the vertex
        var get_values = this.AdjList.get(i);
        var conc = "";
 
        // iterate over the adjacency list
        // concatenate the values into a string
        for (var j of get_values)
            conc += j + " ";
 
        // print the vertex and its adjacency list
        console.log(i + " -> " + conc);
    }
}

bfs(startingNode)
{
 
    // create a visited object
    var visited = {};
 
    // Create an object for queue
    var q = new Queue();
 
    // add the starting node to the queue
    visited[startingNode] = true;
    q.enqueue(startingNode);
 
    // loop until queue is empty
    while (!q.isEmpty()) {
        // get the element from the queue
        var getQueueElement = q.dequeue();
 
        // passing the current vertex to callback function
        console.log(getQueueElement);
 
        // get the adjacent list for current vertex
        var get_List = this.AdjList.get(getQueueElement);
 
        // loop through the list and add the element to the
        // queue if it is not processed yet
        for (var i in get_List) {
            var neigh = get_List[i];
 
            if (!visited[neigh]) {
                visited[neigh] = true;
                q.enqueue(neigh);
            }
        }
    }
}

    // dfs(v)
}

class Course{

// id
    constructor(name){
        this.name = name;
        this.noprereqs = 0;
    }
    fillEdges(listofprereqs){
        for (var i of listofprereqs){
            this.noprereqs += 1;
            g.addEdge(this, i);
        }
        
    }

    printPrerequisites(){
        
        var visited = [];

        var q = new Queue();

        visited.push(this);
        q.enqueue(this);

        while (!q.isEmpty()) {
            var getQueueElement = q.dequeue();
            // passing the current vertex to callback function
            if (getQueueElement === undefined){
                break;
            }

            console.log(getQueueElement);

            var get_List = g.AdjList.get(getQueueElement);

            for (var i of get_List) {
                var neigh = i;
                if (!visited.includes(neigh, 0)) {
                    visited.push(neigh);
                    q.enqueue(neigh);
                }
            }
            
        }

        return visited;
    }


}

var g = new Graph();

var vertices = [];

Course.prototype.toString = function courseToString() {
  return `${this.name}`;
};

testbutton.addEventListener("click", function(event){


   // Using the above implemented graph class


    var vertices = [ new Course('CPSC2150'), new Course('1160'), new Course('1150'), new Course('1050'), new Course('950'), new Course('850') ];
 
    // adding vertices
    for (var i = 0; i < vertices.length; i++) {
        g.addVertex(vertices[i]);

    }
    vertices[0].fillEdges([vertices[1], vertices[2], vertices[5]]);
    vertices[1].fillEdges( [vertices[0],vertices[4]]);
    
    //g.printGraph();
    vertices[0].printPrerequisites();
});

addCourse.addEventListener("click", function(event){

    var text1 = textbox1.textContent();
    var text2 = textbox2.textContent();
    textbox1.textContent() = "";
    textbox2.textContent() = "";

    myArray = text2.split(",");
    reqs = [];

    for(var i = 0; i < myArray.length; i++){
        reqs.push(new Course(myArray[i]));
    }

    Course add = new Course(text1);

    vertices.push(add);

    add.fillEdges();


// get stuff from a text box
// add to vertices
// add to edges
});

