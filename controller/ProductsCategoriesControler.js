const db = require('../config/database.js');


const ProductosCategoriasController ={
    insert (req, res) {
    let sql = `INSERT INTO productoscategorias (product_id, category_id) values (1,1),(2,1),(3,1),(4,2),(5,1)`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Post added...");
    });
  },
  getAll (req, res) {
    let sql = 'SELECT name_product, name_category FROM productoscategorias INNER JOIN categories ON categories.id = productoscategorias.category_id INNER JOIN products ON products.id = productoscategorias.product_id;';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
  }
}  


module.exports = ProductosCategoriasController;