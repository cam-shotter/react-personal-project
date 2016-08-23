const request = require('superagent')

const SPCA_API = 'https://www.wellingtonspca.org.nz/CDF_Core/Product/GetProductsInfiniteScroll/'

let animalsArr = []
let animalFilter = "dogs/"

getAnimals = (amount) => {
  request
    .post(SPCA_API)
    .send( {skipAmount: 0, takeAmount: amount} )
    .set("Content-Type", "application/json")
    .set("Referer", "https://www.wellingtonspca.org.nz/adopt/" + animalFilter)
    .set("Cookie", "ASP.NET_SessionId=weo2qzl1qiymdfjlqp0psaxj; _gat_UA-1487405-6=1; SELECTEDPRODUCTKEY=0; _ga=GA1.3.1760379330.1470635817; SELECTEDNAVIGATIONNODEKEY=23994")
    .end(function(err, res) {
      if(err) {
        console.log(err);
      } else {
        for (let i in res.body) {
          animalsArr.push('https://www.wellingtonspca.org.nz' + res.body[i].Path)
        }
        // console.log("this is the re.body: ", res.body);
        // console.log("this is animals arr: ", animalsArr.length);
      }
      parseAnimals(animalsArr)
    })
}

module.exports = getAnimals
