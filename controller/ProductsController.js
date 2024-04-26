const db = require('../config/database.js');

const ProductController = {
    insert(req, res){
        let sql = `INSERT INTO products (name_product, price) values
          ('${req.body.name_product}', '${req.body.price}')`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send("Post added...");
        });
      },
      update(req,res){
        let newProductName = req.body.name_product;
        let sql = `UPDATE products SET name_product = '${newProductName}' WHERE id = ${req.params.id}`;
        db.query(sql, (err,result)=> {
          if(err) throw err;
          res.send('Post updated...')
        })
      },
      getAll(req,res){
        let sql = 'SELECT * FROM products';
        db.query(sql,(err,result)=> {
          if(err) throw err;
          res.send(result)
        })
      },
      getById(req,res){
        let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
        db.query(sql,(err,result)=> {
          if(err) throw err;
          res.send(result)
        })
      },
      orderDesc(req,res) {
        let sql = 'SELECT * FROM products order BY id desc';
        db.query(sql,(err,result)=> {
          if(err) throw err;
          res.send(result)
        })
      },
      getByName(req,res){
        let sql = `SELECT * FROM products WHERE name_product = "${req.params.name_product}"`;
        db.query(sql,(err,result)=> {
          if(err) throw err;
          res.send(result)
        })
      },
      deleteById(req,res){
        let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
        db.query(sql, (err,result)=> {
          if(err) throw err;
          res.send('Post deleted')
        })
      }
}

module.exports = ProductController;