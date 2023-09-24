let testbutton = document.getElementById("testButton");
let addCourse = document.getElementById("addCourse");
let textbox1 = document.getElementById("textbox1");
let textbox2 = document.getElementById("textbox2");
var output = [];
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
printChildren(i)
{
    var get_values =this.AdjList.get(i);
    var conc = "";
    for (j of get_values){
        conc += j.getname;
        conc += "->";
        conc += printChildren(j);
    }

    return i.getname() + conc;
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
        if (get_values.length == 0)
            continue;
        // iterate over the adjacency list
        // concatenate the values into a string
        for (var j of get_values){
            conc += " "+ j;

        }

 
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
    }
    getname(){
        return this.name
    }
    fillEdges(listofprereqs){

        for (var i of listofprereqs){
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
            if ((getQueueElement == undefined)||(getQueueElement == null)){
                break;
            }

            console.log(getQueueElement);
            output.push(getQueueElement);

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
    
    var vertices = [ new Course("CPSC 1160"), new Course('CPSC 1150'), new Course('CPSC 1050'), new Course('CPSC 950'), new Course('CPSC 850'), new Course("CPSC 750")];
 
    // adding vertices
    for (var i = 0; i < vertices.length; i++) {
        g.addVertex(vertices[i]);

    }
    vertices[0].fillEdges([vertices[1], vertices[2], vertices[5]]);
    vertices[1].fillEdges( [vertices[0],vertices[4]]);
    
    //g.printGraph();
    var col = vertices[0].printPrerequisites();
    var course = new CourseButton("CPSC 2150","CS",2150,0,col);
    course.createButton();
    // reqs = g.printGraph();
    // var course = new CourseButton(g,"dept",123,0,reqs);
    // course.createButton();
    //g.printRecursiveGraph();
});

addCourse.addEventListener("click", function(event){

    var text1 = textbox1.value;
    if(text1.length === 0){
        return;
    }
    var text2 = textbox2.value;
    
    textbox1.value = "";
    textbox2.value = "";

    myArray = text2.split(",");
    var reqs = [];
    var temp;
    var add;
 
    add = new Course(text1);  
    g.addVertex(add);


    for(var i = 0; i < myArray.length; i++){
        temp = new Course(myArray[i]);

        // iterate over the vertices
        g.addVertex(temp);
        reqs.push(temp);
        
    }
        add.fillEdges(reqs);

    var course = new CourseButton(text1,"dept",123,0,reqs);
    course.createButton();

});