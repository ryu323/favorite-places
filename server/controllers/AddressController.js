
var places = [];

module.exports = {

  addAddress(req, res) {
    places.push(req.body.address);
    console.log(places);
  }

}
