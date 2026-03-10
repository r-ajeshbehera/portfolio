"use client";

import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const { data, error } = await supabase
          .from("feedback")
          .select("*")
          .eq("status", "approved")
          .order("created_at", { ascending: false }) // most recent first
          .limit(15); // limit to 12 recent approved
        if (error) throw error;
        setFeedbacks(data || []);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeedbacks();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setExpandedId(null); // collapse on outside click
      }
    };
    if (expandedId) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [expandedId]);

  const toggleExpand = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedId((prev) => (prev === id ? null : id));
  };

  if (loading) return <p>Loading feedback...</p>;
  if (!feedbacks.length) return <p>No feedback available.</p>;

  return (
    <div className="feedback-list" id="recent-feedback">
      <h3>Recent Feedback</h3>
      <div className="feedback-grid">
        {feedbacks.map((feedback) => {
          const needsTruncation = feedback.description.length > 20; // Heuristic for text likely to exceed two lines
          return (
            <div key={feedback.id} className="feedback-card-wrapper">
              {expandedId === feedback.id && (
                <div className="feedback-card-placeholder" />
              )}
              <div
                ref={expandedId === feedback.id ? cardRef : null}
                className={`card feedback-card ${
                  expandedId === feedback.id ? "expanded" : ""
                }`}
                style={{ zIndex: expandedId === feedback.id ? 1000 : 1 }}
              >
                <div className="feedback-content">
                  <div className="feedback-header">
                    <Image
                      src="/images/feedback-logo.png"
                      alt="Reviewer"
                      width={36}
                      height={36}
                      className="feedback-logo"
                    />
                    <div className="star-rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={`star ${
                            feedback.stars >= star ? "filled" : ""
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="feedback-body">
                    <p className="feedback-description">
                      {expandedId === feedback.id
                        ? feedback.description
                        : feedback.description}
                    </p>
                    <div className="feedback-footer">
                      <p className="feedback-meta">
                        <strong>
                          {feedback.name} - {feedback.role}
                        </strong>
                      </p>
                      <div className="feedback-footer-right">
                        <span className="feedback-date">
                          {new Date(feedback.created_at).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </span>
                        {needsTruncation && (
                          <button
                            className="link-hover read-more"
                            onClick={(e) => toggleExpand(feedback.id, e)}
                          >
                            {expandedId === feedback.id
                              ? "Show Less"
                              : "Read More"}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
