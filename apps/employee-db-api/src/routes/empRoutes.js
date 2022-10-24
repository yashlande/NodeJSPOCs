import * as express from 'express';
import * as Employee from '../models/empModel';

const router = express.Router();
// const Employee = require('../models/empModel')

// router.get('/api', (req, res) => {
//   res.send('Welcome in Home Page');
// });

//Get Routes Start Here

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

//Get Routes End Here

//Post Routes Start Here

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

//Post Routes End Here

//Put Routes Start Here

router.put('/empUpdate/:id', (req, res) => {
  let updateId = { _id: req.params.id };

  Employee.updateOne(updateId, {
    $set: {
      name: req.body.name,
      role: req.body.role,
      salary: req.body.salary,
    },
  })
    .then((emp) => {
      Employee.findOne(updateId)
        .then((emp) => {
          res.send({ emp: emp });
        })
        .catch((error) => {
          res.send({ error: error });
        });
    })
    .catch((error) => {
      res.send({ error: error });
    });
});

//Put Routes End Here

//Delete Routes Start Here

router.delete('/empDelete/:id', (req, res) => {
  let deleteId = { _id: req.params.id };
  Employee.deleteOne(deleteId).then((emp) => {
    Employee.find({})
      .then((emp) => {
        res.send({ emp: emp });
      })
      .catch((error) => {
        res.send({ error: error });
      });
  });
});

//Delete Routes End Here

module.exports = router;
