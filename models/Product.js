const products = []
const { log } = require('console');
const fs = require('fs')
console.log("products", products);
const path = require('path')
let file_path = path.join(process.cwd(), 'data', 'product.json')

module.exports = class Product {
    constructor(name, price,url,descirption) {
        this.id=Date.now()
        this.name = name
        this.price = price
        this.descirption = descirption
        this.url = url
        this.products = []
    }
    save() {

        fs.readFile(file_path, async (err, content) => {
            if (err) {
            }
            if (content) {
                try {
                    const data = await JSON.parse(content)
                    this.products = data
                } catch (error) {
                }
                this.products.push({
                    id:this.id,
                    name: this.name,
                    price: this.price,
                    descirption: this.descirption,
                    url: this.url,
                })
                fs.writeFile(file_path, JSON.stringify(this.products), (res) => {
                })
            }

        })
    }

    fetchAll(cb) {
        fs.readFile(file_path, async (err, content) => {
            try {
                const data = JSON.parse(content)
                this.products = data                 
                cb(this.products);
            } catch (error) {
                return error
            }
        })
    }
    getSingleProduct(id,cb){
        fs.readFile(file_path,async(err,content)=>{
            try {
                const data=await JSON.parse(content)
                var filteredArray = data.filter(function (element) { 
                    return element.id == id;
                })
                cb( filteredArray)

            } catch (error) {
                console.log("error",error);
            }
        })
    }
    editProduct(id,cb){
        fs.readFile(file_path,async(err,content)=>{
            try {
                if(content){
                    const data=await JSON.parse(content)
                    var editData=data.filter((element)=>{
                        return element.id==id
                    })
                    cb(editData)
                }
            } catch (error) {
                console.log("error",error);
            }
           
        })
    }
}