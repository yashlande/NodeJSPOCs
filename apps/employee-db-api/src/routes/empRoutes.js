import * as express from 'express';
import * as Employee from '../models/empModel';

const router = express.Router();
// const Employee = require('../models/empModel')

// router.get('/api', (req, res) => {
//   res.send('Welcome in Home Page');
// });

router.get('/', (req, res) => {
  Employee.find({})
    .then((emp) => {
      res.send({ emp: emp });
    })
    .catch((error) => {
      console.log('Get api error=', error);
    });
});

router.get('/emp/search', (req, res) => {
  let empNameQuery = { name: req.body.name };
  Employee.find(empNameQuery)
    .then((queryResult) => {
      res.send({ emp: queryResult });
    })
    .catch((error) => {
      res.send({ error: error });
    });
});

router.post('/emp/new', (req, res) => {
  let emp = {
    name: req.body.name,
    role: req.body.role,
    salary: req.body.salary,
  };
  Employee.create(emp)
    .then((emp) => {
      res.send(`Employee Added Successfully`);
    })
    .catch((error) => {
      console.log('Post Api Error=', error);
    });
});

module.exports = router;
