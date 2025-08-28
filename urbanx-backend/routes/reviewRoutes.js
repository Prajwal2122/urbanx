const express = require('express');
const router = express.Router();
const { createReview, getReviewsByService } = require('../controllers/reviewController');

// POST /api/reviews
router.post('/', createReview);

// GET /api/reviews/:serviceId
router.get('/:serviceId', getReviewsByService);

module.exports = router;
