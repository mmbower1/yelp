// express
const express = require("express");
const router = express.Router();
// middleware
// const auth = require('../middleware/auth');
// mongo
const Campground = require("../models/CampgroundModel");
// npm's
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const config = require('config');
// const { check, validationResult } = require('express-validator');

// @route    GET /campground/create
// @desc     Campground page
// @access   Public
router.get("/", async (req, res) => {
  try {
    const campgrounds = await Campground.find({});
    res.json(campgrounds);
  } catch (err) {
    res.status(500).send(err + " Server error campground");
  }
});

// @route    GET /campground/:id
// @desc     Campground ID
// @access   Public
router.get("/:id", async (req, res) => {
  try {
    const campground = await Campground.findById(req.params.id);
    res.json(campground);
  } catch (err) {
    res.status(500).send(err + " Server error campground");
  }
});

module.exports = router;
