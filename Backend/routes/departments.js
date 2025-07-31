const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

router.get('/', async (req, res) => {
  const depts = await Department.find();
  res.json(depts);
});

module.exports = router;