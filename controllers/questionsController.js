let axios = require('axios');

// Defining methods for the booksController
module.exports = {
  findById: function(req, res, id) {
    axios.get('https://calltoserver/findById/' + id)
      .then(function(response){
        console.log(response.data); // ex.: { user: 'Your User'}
        console.log(response.status); // ex.: 200
        return res.data;
      });
    
  },
  findByCategory: function(req, res, category) {
    axios.get('https://calltoserver/findByCategory/' + category)
      .then(function(response){
        console.log(response.data); // ex.: { user: 'Your User'}
        console.log(response.status); // ex.: 200
        return res.data;
      });
  },
};
