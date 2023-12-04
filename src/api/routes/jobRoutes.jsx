const express = require('express');
const { createJob, getOneJob, getAllJobs } = require('../controllers/jobController.jsx');

const router = express.Router();

// create job route
router.post('/create', createJob);

// get one job route
router.get('/:jobId', getOneJob);

// get all jobs route
router.get('/all', getAllJobs);

module.exports = router;