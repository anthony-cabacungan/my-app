const Job = require('../models/jobModel.jsx');

// create job
const createJob = async (req, res) => {
    const username = req.body.username;
    const title = req.body.title;
    const description = req.body.description;

    try {
        const job = await Job.createJob(username, title, description);
        res.status(200).json({ title });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get one job
const getOneJob = async (req, res) => {
    const { jobId } = req.params;

    try {
        const job = await Job.getJob(jobId);
        console.log(job);
        res.status(200).json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get all jobs
const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.getAllJobs();
        console.log(jobs);
        res.status(200).json(jobs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createJob, getOneJob, getAllJobs };
