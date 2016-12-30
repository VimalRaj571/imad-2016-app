var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

'article-two': {
        title: 'Article Two | Tanmai Gopal',
        heading: 'Article Two',
        date: 'Sep 10, 2016',
        content: `
           <p>
               This is the content for my second article.
           </p>`
    },
    'article-three': {
        title: 'Article Three | Tanmai Gopal',
        heading: 'Article Three',
        date: 'Sep 15, 2016',
        content: `
           <p>
              This is the content for my third article.
          </p>`
    }
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    <!DOCTYPE html> 
    <html>
        <head>
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="/ui/style.css" rel="stylesheet" />
        </head>        
        <body>
        <div class="stl">
        <div>  
            <a href="/" >Home</a>
        </div>
        <hr>            
            ${heading}
        <div>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
        </div>
        </body>
    </html>`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get("/:articlename",function (req,res){
    //articlename == article-one
    //articles[articlename] == {} content obj for article one
    var articlename = req.params.articlename;
   res.send(createTemplate(articles[articlename]));
});

app.get("/article-two",function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get("/article-three",function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
