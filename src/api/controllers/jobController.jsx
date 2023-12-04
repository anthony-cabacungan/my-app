const Job = require('../models/jobModel.jsx');
const User = require('../models/userModel.jsx');

// create job
const createJob = async (req, res) => {
    const email = req.body.email;
    const title = req.body.title;
    const description = req.body.description;

    try {
        const user = await User.getProfileByEmail(email); 
        
        if (!user) {
            throw new Error('Email not found');
        }

        const { first_name, last_name, picture, username } = user;

        const job = await Job.createJob(email, username, title, description, first_name, last_name, picture);
        res.status(200).json(job);
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
