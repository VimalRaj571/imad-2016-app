var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

//Nested Obj's Down here
var articles = {
  //obj and names
 'article-one' : {
  title : 'Article-One / VR',
  heading : 'article-One' ,
  date : 'Sep - 2016',
  content : ` <p>This first article try to using the app dev tuts
   This first article try to using the app dev tuts
  This first article try to using the app dev tuts
  </p>
  `
},
 'article-two' : {
  title : 'Article-One / VR',
  heading : 'article-Two' ,
  date : 'Sep - 2016',
  content : ` <p>This Second article try to using the app dev tuts
   This Second article try to using the app dev tuts
  This Second article try to using the app dev tuts
  </p>
  `
},
 'article-three' : {
  title : 'Article-Three / VR',
  heading : 'article-Three' ,
  date : 'Sep - 2016',
  content : ` <p>This third article try to using the app dev tuts
   This third article try to using the app dev tuts
  This third article try to using the app dev tuts
  </p>
  `
},
  'article-four' :  {
    title : 'Article-Four',
    heading : 'article-fpor',
    date : 'Jan 13',
    content : `<p>Hi this is vimal crating the article no 4 then it could be
    done by the stuff called the xtra art obj in nested obj stuffs
    go for the right one doing the correct the stuffs <p/>`
  },
};
function createTemplate(data) {
  var title = data.title;
  var heading = data.heading;
  var date = data.date;
  var content =  data.content;
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
        <h3>${heading}</h3>
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

var counter=0 ;
app.get('/counter', function (req, res) {
  counter = counter + 1;
  res.send(counter.toString());
});

//submit-names
var names= [];
app.get('/submit-names/:names',function(req,res){
    var name = req.params.name;
    
    names.push(names);
   //JSON=JS object Notation 
    res.send(JSON.stringify(name));
});

//**Express frame work for matching name :articleName
//Article name == article-one
//Articles[articleName] == {} content obj for article-one
//REF Line:85 Here some Bug Req not Def
//pattern match in articles objs obtain from URL
app.get("/:articleName",function (req,res){
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});
//art-4 URL
//app.get("/article-four",function (req,res){
//    console.log("Four Not ready");
//    res.send('Article-four will be served SOOOON :)' );
//});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
});
  console.log(`IMAD course app listening on port ${port}!`);
