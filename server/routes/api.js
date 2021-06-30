const express = require('express')
const router = express.Router()

const Transaction = require('../models/Transaction')

router.get('/transactions', function (req, res) {
    Transaction.find({}, function (err, transactions) {
        res.send(transactions)
    })
})

router.post('/transaction', function (req, res){
    let transaction = new Transaction(req.body)
    transaction.save()
    res.send('ok')
})

router.delete('/transaction/:id',function(req,res){
    Transaction.find({ _id: req.params.id}).remove().exec();
    res.send('deleted');
})

router.get('/transactions/categories', function (req, res) {
    const aggregate = [
        {
            "$group":{
                "_id" : "$category",
                "total": { 
                    "$sum": "$amount" 
                } 
            }
        }
    ]
    Transaction.aggregate(aggregate)
                .exec(function (err, result){
                    if(err){
                        console.log(err)
                        return;
                    }
                    res.send(result)
            });
})
module.exports = router