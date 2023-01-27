const Product = require('./../models/Product')

exports.addProduct = (req, res, next) => {
    const productData = new Product(
        req.body.name,
        req.body.price,
        req.body.ImageUrl,
        req.body.description
    )
    productData.save()
    res.redirect('/product')
}
exports.getAllproducts = async (req, res, next) => {
    const product = new Product()
    product.fetchAll(data => {
        res.render('ProductList.ejs', {
            productData: data  
        })
    })
}

exports.addNewProduct = async (req, res, next) => {
    res.render("AddProduct.ejs", {
        edit: false,
        product: []
    })
}

exports.editProduct = async (req, res, next) => {
    const product = new Product()
    product.editProduct(req.params.productId, (data) => {
        res.render("AddProduct.ejs", {
            edit: true,
            product: data
        })
    })
}

exports.getProduct = async (req, res, next) => {
    const product = new Product()
    product.getSingleProduct(req.params.productId, (data) => {
        res.render('ProductDetail.ejs', {
            product: data
        })
    })
}

exports.updateProduct = async (req, res, next) => {
    console.log("dfjdhgdgjdghdjfghjdhgjh");
    console.log("helo world", req.body);
}
