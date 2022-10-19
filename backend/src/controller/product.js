import Product from "../models/product.js";

export const createProduct = async (req, res) => {
    console.log("created");
    const {
        name,
        description,
        price,
        brand,
        type,
    } = req.body;
    const product =  new Product({
        name: name,
        description: description,
        price: price,
        brand: brand,
        type: type
    })
    try {
        const dbUser = await Product.findOne({name});
        
        if (dbUser) {
            return res.status(403).json({ message: "Product Already Exists"});
        }
        await product.save();
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }

    return res.status(200).send({ message: "Product Created" });
};