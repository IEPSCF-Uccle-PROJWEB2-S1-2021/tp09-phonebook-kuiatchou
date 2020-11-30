const express = require('express');
const router = new express.Router();

function user(lastName,firstName,BirthDate,phoneNumber,emailAddress){
  this.lastName =lastName;
  this.firstName=firstName;
  this.BirthDate=BirthDate;
  this.phoneNumber=phoneNumber;
  this.emailAddress=emailAddress;
}
const users = [];

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});
router.post('/',(req,res,next)=>{
  const user = new user(req.body.lastName, req.body.firstName, req.body.BirthDate,
    req.body.phoneNumber, req.body.emailAddress);
  users.push(user);
  res.redirect('/');

});
module.exports = router;
