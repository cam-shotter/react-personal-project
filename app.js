var request = require('superagent')
var cheerio = require('cheerio')

var animalsArr = []

request
  .post('https://www.wellingtonspca.org.nz/CDF_Core/Product/GetProductsInfiniteScroll/')
  .send({skipAmount: 0, takeAmount: 10})
  .set("Content-Type", "application/json")
  .set("Referer", "https://www.wellingtonspca.org.nz/adopt/dogs/")
  .set("Cookie", "ASP.NET_SessionId=weo2qzl1qiymdfjlqp0psaxj; _gat_UA-1487405-6=1; SELECTEDPRODUCTKEY=0; _ga=GA1.3.1760379330.1470635817; SELECTEDNAVIGATIONNODEKEY=23994")
  .end(function(err, res) {
    if(err) {
      console.log(err);
    } else {
      res = JSON.parse(res.text, null, 2)
      console.log(Object.keys(res[1]));
      for (var i in res) {
        console.log("Animal ", res[i]);
        console.log("ID: ", res[i].Id)
      }
    }
  })
