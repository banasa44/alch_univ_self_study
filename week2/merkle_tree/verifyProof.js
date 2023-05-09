const verifyProof = (proof, node, concat, root)=>{
    result=[];
    console.log(typeof(proof[0].data))
    console.log(proof[0].left)
    if(proof[0].left){
        result.push(concat(proof[0].data,node))
    }
    else {result.push(concat(node,proof[0].data))}
    console.log('result: ',result)
    for (let i=1; i<proof.length; i++) {
        if(proof[i].left){
            result[0]=concat(proof[i].data,result[0])
        }
        else {result[0]=concat(result[0],proof[i].data)} 
    }
    console.log('result: ',result)
    return result[0] === root

}

module.exports = verifyProof;