import dotenv from 'dotenv';
dotenv.config();

import connectDB from '../utils/db.js';
import { User } from '../models/user.model.js';
import { Company } from '../models/company.model.js';
import { Job } from '../models/job.model.js';
import { Application } from '../models/application.model.js';
import bcrypt from 'bcryptjs';

const seed = async () => {
  try {
    await connectDB();

    // Clear existing data (safe for development)
    await Application.deleteMany({});
    await Job.deleteMany({});
    await Company.deleteMany({});
    await User.deleteMany({});

    const password = await bcrypt.hash('Password123!', 10);

    // Create users
    const recruiter = await User.create({
      fullname: 'Acme Recruiter',
      email: 'recruiter@acme.com',
      phoneNumber: 1234567890,
      password,
      role: 'recruiter'
    });

    const student = await User.create({
      fullname: 'Jane Student',
      email: 'jane@student.com',
      phoneNumber: 9876543210,
      password,
      role: 'student'
    });

    // Create company
    const company = await Company.create({
      name: 'Acme Corp',
      description: 'Example company for seeding',
      website: 'https://acme.example',
      location: 'Remote',
      logo: '',
      userId: recruiter._id
    });

    // Create job
    const job = await Job.create({
      title: 'Frontend Developer',
      description: 'Build and maintain user interfaces',
      requirements: ['React', 'CSS', 'JavaScript'],
      salary: 60000,
      experienceLevel: 2,
      location: 'Remote',
      jobType: 'Full-time',
      position: 1,
      company: company._id,
      created_by: recruiter._id
    });

    // Create application
    const application = await Application.create({
      job: job._id,
      applicant: student._id,
      status: 'pending'
    });

    job.applications.push(application._id);
    await job.save();

    console.log('Seeding complete. Created recruiter, student, company, job, and application.');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seed();
