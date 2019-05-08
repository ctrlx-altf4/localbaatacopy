const express = require('express');

const app = express();

app.get('/api/customer', (req, res)=>{
    const customer =[
        {id:1, firstName :"prajwal", LastName:"Pradhan"}
    ];
    res.json(customer);
})

const port = 5000;

app.listen(port, ()=> console.log(`Server started on ${port}`));