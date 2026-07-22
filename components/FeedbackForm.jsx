"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    customRole: "", // Added for custom role input
    mobile: "",
    email: "",
    description: "",
    stars: 0,
    // Honeypot: real users never see or fill this field (hidden off-screen,
    // not display:none, and out of the tab order). Bots that auto-fill every
    // input on the page will fill it, which is how we catch them below.
    website: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleStarClick = (rating) => {
    setFormData({ ...formData, stars: rating });
    setErrors({ ...errors, stars: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.role.trim()) newErrors.role = "Role is required";
    else if (formData.role === "Other" && !formData.customRole.trim())
      newErrors.role = "Please specify the role";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^\+?[1-9]\d{1,19}$/.test(formData.mobile))
      newErrors.mobile = "Invalid mobile number";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    )
      newErrors.email = "Invalid email address";
    if (formData.stars === 0) newErrors.stars = "Please select a star rating";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot tripped: silently pretend it worked instead of tipping the
    // bot off that it was caught, but don't actually write to Supabase.
    if (formData.website.trim()) {
      setSuccess(true);
      setFormData({
        name: "",
        role: "",
        customRole: "",
        mobile: "",
        email: "",
        description: "",
        stars: 0,
        website: "",
      });
      setTimeout(() => setSuccess(false), 3000);
      return;
    }

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!supabase) {
      setErrors({
        submit: "Feedback is temporarily unavailable. Please try again later.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("feedback").insert({
        name: formData.name,
        role: formData.role === "Other" ? formData.customRole : formData.role,
        mobile: formData.mobile,
        email: formData.email || null,
        description: formData.description,
        stars: formData.stars,
        status: "pending",
      });

      if (error) throw error;
      setSuccess(true);
      setFormData({
        name: "",
        role: "",
        customRole: "",
        mobile: "",
        email: "",
        description: "",
        stars: 0,
        website: "",
      });
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      setErrors({ submit: "Failed to submit feedback. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card feedback-form-card">
      <h3>Share Your Feedback</h3>
      {errors.submit && <p className="error-message">{errors.submit}</p>}
      <div className="feedback-form">
        {/* Honeypot field: hidden from real users (off-screen, not
            display:none so it still "exists" to bots that skip hidden
            fields), out of tab order, and hidden from screen readers. Any
            value here means it was auto-filled by a bot, not a person. */}
        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? "input-error" : ""}
            required
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="role">Role *</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className={errors.role ? "input-error" : ""}
            required
          >
            <option value="">Select Role</option>
            <option value="Teacher">Teacher</option>
            <option value="Professor">Professor</option>
            <option value="Friend">Friend</option>
            <option value="Colleague">Colleague</option>
            <option value="Coworker">Coworker</option>
            <option value="Other">Other</option>
          </select>
          {formData.role === "Other" && (
            <input
              type="text"
              name="customRole"
              value={formData.customRole}
              onChange={handleInputChange}
              placeholder="Specify role"
              className={errors.role ? "input-error" : ""}
            />
          )}
          {errors.role && <span className="error-message">{errors.role}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number *</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            className={errors.mobile ? "input-error" : ""}
            required
          />
          {errors.mobile && (
            <span className="error-message">{errors.mobile}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email (Optional)</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="description">Review *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className={errors.description ? "input-error" : ""}
            required
          ></textarea>
          {errors.description && (
            <span className="error-message">{errors.description}</span>
          )}
        </div>
        <div className="form-group">
          <label>Rating *</label>
          <div
            className="star-rating"
            style={{
              fontSize: "2rem",
              display: "flex",
              justifyContent: "center",
              gap: "0.3rem",
            }}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${formData.stars >= star ? "filled" : ""}`}
                onClick={() => handleStarClick(star)}
                role="button"
                aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                style={{ cursor: "pointer" }}
              >
                ★
              </span>
            ))}
          </div>
          {errors.stars && (
            <span className="error-message">{errors.stars}</span>
          )}
        </div>

        {success && (
          <p
            className="success-message"
            style={{
              color: "green",
              textAlign: "center",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            Thank you for your feedback!
          </p>
        )}

        <button
          type="submit"
          className="btn-view-project submit-btn"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Feedback"}
        </button>
      </div>
    </div>
  );
}
