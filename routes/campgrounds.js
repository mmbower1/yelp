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

// @route    GET /campgrounds
// @desc     Show all campgrounds
// @access   Public
router.get("/", async (req, res) => {
  try {
    const campgrounds = await Campground.find({});
    res.json(campgrounds);
  } catch (err) {
    res.status(500).send(err + " Server error campground get");
  }
});

// @route    GET /campground/:id
// @desc     Show a specific campground thats clicked on
// @access   Public
router.get("/:id", async (req, res) => {
  try {
    const campground = await Campground.findById(req.params.id);
    res.json(campground);
  } catch (err) {
    res.status(500).send(err + " Server error campground get ID");
  }
});

// @route    POST /campgrounds
// @desc     Create new campground
// @access   Public
router.post("/", async (req, res) => {
  try {
    const campground = await Campground.create(req.body);
    await campground.save();
    res.status(201).json({ data: campground });
    // res.redirect(`/campgrounds/${campground._id}`);
  } catch (err) {
    res.status(500).send(err + " Server error campground post");
  }
});

// @route    PUT /campgrounds/:id/edit
// @desc     Edit a campground
// @access   Public
router.put("/:id/edit", async (req, res) => {
  try {
    const campground = await Campground.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!campground) return res.status(400).json({ success: false });
    res.status(200).json({ success: true, data: campground });
  } catch (err) {
    res.status(400).send(err + " Server error campground edit");
  }
});

// @route    DELETE /campgrounds/:id
// @desc     Delete a campground
// @access   Public
router.delete("/:id", async (req, res) => {
  try {
    const campground = await Campground.findByIdAndDelete(req.params.id);
    if (!campground) return res.status(400).json({ success: false });
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).send(err + " Server error campground delete");
  }
});

module.exports = router;
