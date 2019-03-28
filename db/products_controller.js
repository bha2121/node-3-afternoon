module.exports ={
    create: (req,res)=> {
        const {name, price, description, image_url} = req.body
        req.app.get('db')
        .create_product([name, description, price, image_url])
        .then(()=>{
            res.status(200).send('User Created')
        })

    },

    getOne: (req,res)=> {
        const {id} = req.params
        req.app.get('db')
        .read_product(id)
        .then((product)=>{
            res.status(200).send(product)
        })
    },

    getAll: (req,res)=> {
        req.app.get('db')
        .read_products()
        .then((products)=>{
            res.status(200).send(products)
        })
    },

    update: (req,res)=> {
        const {desc} = req.query
        const {id} = req.params
        req.app.get('db')
        .update_product([id, desc])
        .then(()=>{
            res.status(200).send('User Updated')
        })
    },

    delete: (req,res)=> {
        const {id} = req.params
        req.app.get('db')
        .delete_product(id)
        .then(()=>{
            res.status(200).send('User Deleted')
        })
    }

}