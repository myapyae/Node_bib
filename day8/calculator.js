const express = require("express");
const router = express.Router();

router.get('/add/:num1/:num2', function (req, res) {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  res.send(`The sum of ${num1} and ${num2} is ${num1+num2}`);
});

router.get('/subtract/:num1/:num2', function (req, res) {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  res.send(`The subtract of ${num1} and ${num2} is ${Math.abs(num1-num2)}`);
});

router.get('/mul/:num1/:num2', function (req, res) {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  res.send(`The multiply of ${num1} and ${num2} is ${num1*num2}`);
});

router.get('/div/:num1/:num2', function (req, res) {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  res.send(`The division of ${num1} by ${num2} is ${num1/num2}`);
});

router.get('/mod/:num1/:num2', function (req, res) {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  res.send(`The modulus of ${num1} by ${num2} is ${num1%num2}`);
});

router.get('/area/:radius', function (req, res) {
  const radius = Number(req.params.radius);
  const areaOfCircle = (Math.PI * Math.pow(radius, 2)).toFixed(2);
  res.send(`Area of circle is ${areaOfCircle}`);
});

router.get('/cm/:feet/:inches', function (req, res) {
  const feet = Number(req.params.feet);
  const inches = Number(req.params.inches);
  const feetToCm = feet * 30.48;
  const inchesToCm = inches * 2.54;
  const centi = feetToCm + inchesToCm;
  res.send(`Centimeter of ${feet} feet ${inches} inches is ${centi} centimeters`);
});

module.exports = router;
