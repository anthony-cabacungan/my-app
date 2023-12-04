const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String
    }
});

// create job method
jobSchema.statics.createJob = async function (username, title, description, first_name, last_name, picture) {
    const job = await this.create({ username, title, description, first_name, last_name, picture});
    return job;
};

// get job method
jobSchema.statics.getJob = async function (jobId) {
    const job = await this.findById(jobId);
    if (!job) {
        throw new Error('Job not found');
    }

    const jobDetails = {
        username: job.username,
        title: job.title,
        description: job.description,
        first_name: job.first_name,
        last_name: job.last_name,
        picture: job.picture,
        _id: job._id
    };

    return jobDetails;
};

// get all jobs method
jobSchema.statics.getAllJobs = async function () {
    const jobs = await this.find({});
    if (jobs.length === 0) {
        throw new Error('No jobs in the database');
    }

    const jobDetailsArray = jobs.map((job) => ({
        username: job.username,
        title: job.title,
        description: job.description,
        first_name: job.first_name,
        last_name: job.last_name,
        picture: job.picture,
        _id: job._id
    }));

    return jobDetailsArray;
};

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
