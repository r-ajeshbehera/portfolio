"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function FeedbackSlider() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [swiper, setSwiper] = useState(null);
  const [clickCount, setClickCount] = useState({});

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const { data, error } = await supabase
          .from("feedback")
          .select("*")
          .eq("status", "approved")
          .eq("stars", 5)
          .order("created_at", { ascending: false })
          .limit(5);
        if (error) throw error;
        setFeedbacks(data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeedbacks();
  }, []);

  const handleMouseEnter = () => {
    if (swiper) swiper.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (swiper) swiper.autoplay.start();
  };

  const handleCardClick = (id, e) => {
    if (e.target.classList.contains("read-more")) {
      window.location.href = `/contact#recent-feedback?expand=${id}`;
      return;
    }

    setClickCount((prev) => {
      const newCount = (prev[id] || 0) + 1;
      if (newCount === 2) {
        window.location.href = `/contact#recent-feedback?expand=${id}`;
        return { ...prev, [id]: 0 };
      }
      return { ...prev, [id]: newCount };
    });
  };

  const handleSlideChange = () => {
    setClickCount({});
  };

  if (loading) return <p>Loading testimonials...</p>;
  if (!feedbacks.length) return null;

  return (
    <section className="section feedback-slider-section">
      <div className="container">
        <h2>
          What People Say
          <p>(Double click on feedback box to read more & give feedback)</p>
        </h2>
        <div className="feedback-slider-wrapper">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop
            speed={1000}
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            className="feedback-slider"
          >
            {feedbacks.map((feedback) => (
              <SwiperSlide key={feedback.id}>
                <div
                  className="card feedback-slider-card"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={(e) => handleCardClick(feedback.id, e)}
                >
                  <div className="feedback-content">
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
                    <div className="feedback-text-container">
                      <p className="feedback-description">
                        {feedback.description.length > 100
                          ? `${feedback.description.substring(0, 100)}...`
                          : feedback.description}
                      </p>
                      {feedback.description.length > 100 && (
                        <button
                          className="link-hover read-more"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(feedback.id, e);
                          }}
                        >
                          Read More
                        </button>
                      )}
                    </div>
                    <div className="feedback-footer">
                      <p className="feedback-meta">
                        <strong>
                          {feedback.name} - {feedback.role}
                        </strong>
                      </p>
                      <p className="feedback-date">
                        {new Date(feedback.created_at).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
}