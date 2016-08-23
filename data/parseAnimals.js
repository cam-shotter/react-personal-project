const request = require('superagent')
const cheerio = require('cheerio')

// URLarray is the array of individual animal URLs from ./getAnimals.js
parseAnimals = (URLarray) => {
  for (let i = 0; i < URLarray.length; i++) {
    request
      // Retrieve each animal URL from the array
      .get(URLarray[i])
      .end(function(err, res) {
        if (err) {
          console.log(err)
        } else {
          let $ = cheerio.load(res.text)

          // The SPCA website has the titles of each thing eg: name, breed, adoption status under the same class name of "name". I'm creating an array to hold each "name" component, then mapping them to each "value" eg: [ 'Name: Fluffy', 'Breed: Short Hair Tabby' ]
          let titlesArray = []
          $('.name').map(() => {
            titlesArray[0] = $('.name').text()
          })

          let splitTitlesArray = titlesArray.split('')

          // The general class names don't relate to the content eg: '.pull-left' is the pet's name???? Whaaaa??? (Not that mine are much better)
          console.log("Name: ", $('.pull-left').text())
          console.log("TitleArray: ", titlesArray)
          console.log("I am the split title array: ", splitTitlesArray);

          // console.log("Description: ", $('.product-description p').text().substring(0, 200) + "...")
          // console.log("Image: ", $('.lightbox').html())
          // console.log("Titles: ", $('.name').text())
          // console.log("Values: ", $('.value').text().toArray())
          // console.log($('.product-sku').text(), '\n')
        }
      })
  }
  console.log("this is the URLarr: ", URLarray);
}

module.exports = parseAnimals
