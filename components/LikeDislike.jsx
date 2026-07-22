"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";

export default function LikeDislike({ itemId, itemType }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userVote, setUserVote] = useState(null); // 'like', 'dislike', or null
  const [userId, setUserId] = useState(null);
  const [isVoting, setIsVoting] = useState(false);

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      const newUserId = uuidv4();
      localStorage.setItem("user_id", newUserId);
      setUserId(newUserId);
    }
  }, []);

  useEffect(() => {
    if (!userId || !supabase) return;

    const fetchData = async () => {
      const { data: voteData, error: countError } = await supabase
        .from("likes")
        .select("vote_type")
        .eq("item_id", itemId)
        .eq("item_type", itemType);

      if (!countError) {
        const likeCount = voteData.filter((v) => v.vote_type === "like").length;
        const dislikeCount = voteData.filter(
          (v) => v.vote_type === "dislike"
        ).length;
        setLikes(likeCount);
        setDislikes(dislikeCount);
      } else {
        console.error("Error fetching vote counts:", countError);
      }

      const { data: userVoteData, error: userVoteError } = await supabase
        .from("likes")
        .select("vote_type")
        .eq("item_id", itemId)
        .eq("item_type", itemType)
        .eq("user_id", userId)
        .single();

      if (!userVoteError && userVoteData) {
        setUserVote(userVoteData.vote_type);
      }
    };

    fetchData();
  }, [itemId, itemType, userId]);

  const handleVote = async (voteType) => {
    // Guards against rapid double-clicks firing two overlapping requests --
    // previously nothing stopped a second click from starting a new
    // upsert/delete before the first one's response (and state update) had
    // landed, which could leave the displayed count out of sync with what's
    // actually in the database.
    if (!userId || !supabase || isVoting) return;

    setIsVoting(true);
    try {
      if (userVote === voteType) {
        const { error } = await supabase
          .from("likes")
          .delete()
          .eq("item_id", itemId)
          .eq("item_type", itemType)
          .eq("user_id", userId);

        if (!error) {
          setUserVote(null);
          setLikes((prev) => (voteType === "like" ? prev - 1 : prev));
          setDislikes((prev) => (voteType === "dislike" ? prev - 1 : prev));
        } else {
          console.error("Error deleting vote:", error);
        }
      } else {
        const { error } = await supabase.from("likes").upsert(
          {
            item_id: itemId,
            item_type: itemType,
            user_id: userId,
            vote_type: voteType,
          },
          { onConflict: ["item_id", "item_type", "user_id"] }
        );

        if (!error) {
          setUserVote(voteType);
          if (voteType === "like") {
            setLikes((prev) => prev + 1);
            if (userVote === "dislike") setDislikes((prev) => prev - 1);
          } else {
            setDislikes((prev) => prev + 1);
            if (userVote === "like") setLikes((prev) => prev - 1);
          }
        } else {
          console.error("Error upserting vote:", error);
        }
      }
    } finally {
      setIsVoting(false);
    }
  };

  return (
    <div
      className="like-dislike"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "10px",
        marginTop: "5px",
      }}
    >
      <div
        className="like-box"
        style={{
          background: "rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
          padding: "5px 10px",
          width: "60px",
          textAlign: "center",
        }}
      >
        <button
          className={`like-button ${userVote === "like" ? "active" : ""}`}
          onClick={() => handleVote("like")}
          disabled={isVoting}
          aria-pressed={userVote === "like"}
          style={{
            background: "none",
            border: "none",
            cursor: isVoting ? "default" : "pointer",
            opacity: isVoting ? 0.6 : 1,
            fontSize: "1rem",
            color:
              userVote === "like"
                ? "var(--primary-color, #007bff)"
                : "var(--text-secondary, #666)",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            margin: "0 auto",
          }}
        >
          👍 {likes}
        </button>
      </div>
      <div
        className="dislike-box"
        style={{
          background: "rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
          padding: "5px 10px",
          width: "60px",
          textAlign: "center",
        }}
      >
        <button
          className={`dislike-button ${userVote === "dislike" ? "active" : ""}`}
          onClick={() => handleVote("dislike")}
          disabled={isVoting}
          aria-pressed={userVote === "dislike"}
          style={{
            background: "none",
            border: "none",
            cursor: isVoting ? "default" : "pointer",
            opacity: isVoting ? 0.6 : 1,
            fontSize: "1rem",
            color:
              userVote === "dislike"
                ? "var(--primary-color, #007bff)"
                : "var(--text-secondary, #666)",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            margin: "0 auto",
          }}
        >
          👎 {dislikes}
        </button>
      </div>
    </div>
  );
}
