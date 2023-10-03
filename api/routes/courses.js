import express from 'express';
import { createCourse, getCourse, getCourses } from '../controllers/course.js';

const router = express.Router();

/* CREATE COURSE */
router.post("/", createCourse);

/* GET COURSE */
router.get("/find/:id", getCourse);

/* GET COURSES */
router.get("/", getCourses);
router.get("/exam/:id");

export default router;