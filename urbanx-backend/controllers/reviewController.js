const Review = require('../models/Review');

// POST: Add new review
exports.createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ message: "Error creating review", error: err.message });
  }
};

// GET: Get reviews for a service
exports.getReviewsByService = async (req, res) => {
  try {
    console.log("👉 Received serviceId:", req.params.serviceId);

    const reviews = await Review.find({ service: req.params.serviceId });

    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ message: "No reviews found for this service" });
    }

    res.json(reviews);
  } catch (err) {
    console.error("❌ Error in getReviewsByService:", err.message);
    res.status(500).json({ message: "Error fetching reviews", error: err.message });
  }
};

