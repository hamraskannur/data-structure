class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = new Set();
      }
    }

    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList[vertex2]) {
        this.addVertex(vertex2);
      }
      this.adjacencyList[vertex1].add(vertex2);
      this.adjacencyList[vertex2].add(vertex1);
    }

    removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].delete(vertex2);
      this.adjacencyList[vertex2].delete(vertex1);
    }
    
    removeVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        return;
      }
      for (let adjacentVertex of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
  
    hasEdge(vertex1, vertex2) {
      return (
        this.adjacencyList[vertex1].has(vertex2) &&
        this.adjacencyList[vertex2].has(vertex1)
      )
    }
  
    display() {
      for (let vertex in this.adjacencyList) {
        console.log(vertex + "--->" + [...this.adjacencyList[vertex]]);
      }
    }
  
    DFS(graph, vertex) {
      const visited = new Set();
      function visit(v) {
        if (visited.has(v)) return;
        visited.add(v);
        for (const neighbor of graph[v]) {
          visit(neighbor);
        }
      }
      visit(vertex);
    }

    BFS(graph, vertex) {
    const visited = new Set();
    const queue = [vertex];
      while (queue.length) {
        const v = queue.shift();
        if (visited.has(v)) continue;
        visited.add(v);
        for (const neighbor of graph[v]) {
          queue.push(neighbor);
        }
      }
    }
  }
  
  const graph = new Graph();
  
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  
  graph.addEdge(1, 58);
  graph.addEdge("B", "C");
  
  graph.DFS(graph.adjacencyList, "C");
  graph.BFS(graph.adjacencyList, "C");
  
  // graph.display();
  console.log(graph.adjacencyList);
  console.log(graph.hasEdge(1, 58));
  console.log(graph.hasEdge("A", "C"));
  
  graph.removeEdge("A", "B");
  graph.removeVertex("B");
  graph.display();
  