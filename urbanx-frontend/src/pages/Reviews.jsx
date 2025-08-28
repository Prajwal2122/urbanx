import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import "../index.css";

const Reviews = () => {
  const { serviceId } = useParams();

  if (!serviceId) {
    return (
      <div className="popup-modal">
        <div className="modal-content">
          <h2>⚠️ No Service Selected</h2>
          <p>Please select a service to review.</p>
        </div>
      </div>
    );
  }

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [existingReviews, setExistingReviews] = useState([]);
  const [successMsg, setSuccessMsg] = useState(""); // ✅ success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        service: serviceId,
        rating,
        comment: reviewText,
      };
      await axios.post("/reviews", payload);
      setSuccessMsg("✅ Your review has been submitted!"); // ✅ show message
      setReviewText("");
      setRating(0);
      fetchReviews();

      // ✅ Auto-hide message after 3 seconds
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) {
      console.error("❌ Error submitting review", err);
      alert("❌ Failed to submit review");
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`/reviews/${serviceId}`);
      setExistingReviews(res.data);
    } catch (err) {
      console.error("Error loading reviews", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [serviceId]);

  return (
    <div className="popup-modal">
      <div className="modal-content">
        <h2>⭐ Rate & Review</h2>

        {/* ✅ Success message */}
        {successMsg && (
          <div className="success-msg">{successMsg}</div>
        )}

        {/* Star Rating */}
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${hover >= star || rating >= star ? "filled" : ""}`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            >
              ★
            </span>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
  <textarea
    className="styled-textarea"
    value={reviewText}
    onChange={(e) => setReviewText(e.target.value)}
    placeholder="Write your review here..."
    required
  ></textarea>

  <button type="submit" className="styled-button">
    Submit Review
  </button>
</form>


        <h3 style={{ marginTop: "1rem" }}>📄 Existing Reviews</h3>
        {existingReviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {existingReviews.map((r, i) => (
              <li key={i}>
                {"⭐".repeat(r.rating)} - {r.comment}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Reviews;
