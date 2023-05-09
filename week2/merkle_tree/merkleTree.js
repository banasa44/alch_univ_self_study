class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }

    getRoot() {
    let root = this.leaves
    while (root.length > 1) {
      const combinedNodes = [];
      for (let i = 0; i < root.length; i += 2) {
        const left = root[i];
        const right = root[i + 1];
        if (!right){
          combinedNodes.push(left)
        }
        else{
        const combinedNode = this.concat(left, right);
        combinedNodes.push(combinedNode);}
      }
      root = combinedNodes;
    }

    return root[0];
  }

  getProof(index) {
  const proof = [];
  let layer = this.leaves;
  while (layer.length > 1) {
    const newLayer = [];
    for (let i = 0; i < layer.length; i += 2) {
      let left = layer[i];
      let right = layer[i + 1];
      if (!right) {
        newLayer.push(left);
      } else {
        newLayer.push(this.concat(left, right));
        if (i === index || i === index - 1) {
          let isLeft = !(index % 2);
          proof.push({
            data: isLeft ? right : left,
            left: !isLeft,
          });
        }
      }
    }
    layer = newLayer;
    index = Math.floor(index / 2);
  }
  return proof;
  }
}

module.exports = MerkleTree;