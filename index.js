const express = require("express");
const app =  express();
const PORT = 3000;
const db = require("./config/database");
app.use(express.json());

 app.use("/",require("./routes/products.js"));
 app.use("/",require("./routes/categories.js"));
 app.use("/",require("./routes/productcategory.js"));


app.get('/createdb',(req,res)=>{
    let sql ='CREATE DATABASE expressDB';
    db.query(sql,(err,result)=>{
       if(err)throw err;
       console.log(result);
       res.send('Database created...')
    })
  })
  
app.get('/createproductstable',(req,res)=>{
    let sql = 'CREATE TABLE products(id INT AUTO_INCREMENT,name_product VARCHAR(255), price FLOAT, PRIMARY KEY(id))'
    db.query(sql,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...')
      })
    })
    

app.get('/createcategoriestable',(req,res)=>{
    let sql = 'CREATE TABLE categories(id INT AUTO_INCREMENT,name_category VARCHAR(255), description VARCHAR(255), PRIMARY KEY(id))'
        db.query(sql,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...')
        })
    })
        
app.get('/createcategoriesproductstable', (req, res) => {
    let sql = 'CREATE TABLE productoscategorias(id INT AUTO_INCREMENT, product_id INT, category_id INT, PRIMARY KEY(id), FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE, FOREIGN KEY(category_id) REFERENCES categories(id))'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Posts table created...')
    })
})
            


  
  








app.listen(3000, ()=>{
    console.log(`Servidor levantado en el puerto ${PORT}`);
})

