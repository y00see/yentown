const packer = require("3d-bin-packing");
const samchon = require("samchon-framework");

exports.binPacker = (currentOrders, newOrder) => {
    const wrapperArray = new packer.WrapperArray();
    const instanceArray = new packer.InstanceArray();
    let weight = 0;

    wrapperArray.push(
        new packer.Wrapper("Intl", 6300,20,20,20,0)
    );

    for (let i = 0; i < currentOrders.length; i++) {
        weight = weight + currentOrders[i].product_weight;
        if (weight > 2) {
            console.log("Not enough space");
            return(false);
        }
    }
    
    for (let i = 0; i < currentOrders.length; i++) {
        instanceArray.insert(instanceArray.end(), 1, new packer.Product("Product", currentOrders[i].product_x, currentOrders[i].product_y, currentOrders[i].product_z));
    }
    instanceArray.insert(instanceArray.end(), 1, new packer.Product("Product", newOrder.product_x, newOrder.product_y, newOrder.product_z));

    const my_packer = new packer.Packer(wrapperArray,instanceArray);

    try {
        const result = my_packer.optimize();
        const xml = result.toXML();
        console.log(xml.toString());
        return(true);
    } catch {
        console.log("Not enough space");
        return(false);
    }
}