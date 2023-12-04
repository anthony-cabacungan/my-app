const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    }
});

// create job method
jobSchema.statics.createJob = async function (title, description) {
    const job = await this.create({ title, description });
    return job;
};

// get job method
jobSchema.statics.getJob = async function (jobId) {
    const job = await this.findById(jobId);
    if (!job) {
        throw new Error('Job not found');
    }

    const jobDetails = {
        title: job.title,
        description: job.description,
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
        title: job.title,
        description: job.description,
    }));

    return jobDetailsArray;
};

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
