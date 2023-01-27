const express = require('express')

const router = express.Router()
const productController=require('./../controllers/Product')

router.get('/',productController.getAllproducts)
router.get('/detail/:productId',productController.getProduct)
router.get('/edit/:productId',productController.editProduct)
router.post('/update/:productId',productController.updateProduct)
router.post('/', productController.addProduct)
router.get('/product-list', productController.getAllproducts)
router.get('/product-add',  productController.addNewProduct )
router.delete('/', (req, res, next) => {
})

module.exports = router