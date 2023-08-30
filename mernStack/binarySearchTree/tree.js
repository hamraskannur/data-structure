class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }

    mirror() {
        for (const child of this.children) {
            child.mirror();
        }
        this.children.reverse();
    }
}

function depthFirstTraversal(node) {
    console.log(node.value);
    node.children.forEach(child => depthFirstTraversal(child));
}

const root = new TreeNode("A");
const nodeB = new TreeNode("B");
const nodeC = new TreeNode("C");
const nodeD = new TreeNode("D");
const nodeE = new TreeNode("E");
const nodeF = new TreeNode("F");

// Build the tree structure
root.addChild(nodeB);
root.addChild(nodeC);
nodeB.addChild(nodeD);
nodeB.addChild(nodeE);
nodeC.addChild(nodeF);

console.log("Original tree:");
depthFirstTraversal(root);

console.log("Mirrored tree:");
root.mirror();
depthFirstTraversal(root);