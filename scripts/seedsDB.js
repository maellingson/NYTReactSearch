const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/nytreact"
);

const articleSeed = [
    {
        title: 'Ali Sells Jersey House And Moves to Chicago',
        date: '1974-07-18T00:00:00Z',
        url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE',
    },
    {
        title: 'Ali Sells Jersey House And Moves to Test1',
        date: '1974-07-18T00:00:00Z',
        url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE',
    },
    {
        title: 'Ali Sells Jersey House And Moves to Test2',
        date: '1974-07-18T00:00:00Z',
        url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE',
    },
    {
        title: 'Ali Sells Jersey House And Moves to Test3',
        date: '1974-07-18T00:00:00Z',
        url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE',
    },
    {
        title: 'Ali Sells Jersey House And Moves to Test4',
        date: '1974-07-18T00:00:00Z',
        url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE',
    },
    {
        title: 'Ali Sells Jersey House And Moves to Test5',
        date: '1974-07-18T00:00:00Z',
        url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE',
    },

    {
        title: 'Ali Sells Jersey House And Moves to Test6',
        date: '1974-07-18T00:00:00Z',
        url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE',
    },
];

db.nytreact
    .remove({})
    .then(() => db.nytreact.Article.insertMany(articleSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
