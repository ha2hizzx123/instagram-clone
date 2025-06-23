"use client";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Heart, Send } from "lucide-react";
import "./StoryPage.css";

const storyData = {
  1: {
    username: "your_story",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e5?w=150&h=150&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e5?w=400&h=600&fit=crop",
    timeAgo: "5분 전",
  },
  2: {
    username: "emma_wilson",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop",
    timeAgo: "1시간 전",
  },
  3: {
    username: "john_doe",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    timeAgo: "3시간 전",
  },
  4: {
    username: "sarah_kim",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop",
    timeAgo: "5시간 전",
  },
  5: {
    username: "mike_chen",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop",
    timeAgo: "8시간 전",
  },
};

function StoryPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const storyId = Number.parseInt(id);
  const [progress, setProgress] = useState(0);

  const story = storyData[storyId];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          navigate("/main");
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [navigate]);

  const handlePrevious = () => {
    if (storyId > 1) {
      navigate(`/story/${storyId - 1}`);
    }
  };

  const handleNext = () => {
    if (storyId < 5) {
      navigate(`/story/${storyId + 1}`);
    } else {
      navigate("/main");
    }
  };

  const handleClose = () => {
    navigate("/main");
  };

  if (!story) {
    return <div>스토리를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="story-container">
      {/* Progress bar */}
      <div className="story-progress">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      {/* Header */}
      <div className="story-header">
        <div className="story-user-info">
          <img
            src={story.avatar || "/placeholder.svg"}
            alt={story.username}
            className="story-avatar"
          />
          <span className="story-username">{story.username}</span>
          <span className="story-time">{story.timeAgo}</span>
        </div>
        <button onClick={handleClose} className="close-button">
          <X size={24} />
        </button>
      </div>

      {/* Story content */}
      <div className="story-content">
        <img
          src={story.image || "/placeholder.svg"}
          alt="Story"
          className="story-image"
        />

        {/* Navigation areas */}
        <div className="nav-left" onClick={handlePrevious} />
        <div className="nav-right" onClick={handleNext} />
      </div>

      {/* Navigation buttons */}
      {storyId > 1 && (
        <button className="nav-button nav-button-left" onClick={handlePrevious}>
          <ChevronLeft size={32} />
        </button>
      )}

      {storyId < 5 && (
        <button className="nav-button nav-button-right" onClick={handleNext}>
          <ChevronRight size={32} />
        </button>
      )}

      {/* Bottom actions */}
      <div className="story-actions">
        <input
          type="text"
          placeholder="메시지 보내기..."
          className="message-input"
        />
        <button>
          <Heart size={24} />
        </button>
        <button>
          <Send size={24} />
        </button>
      </div>
    </div>
  );
}

export default StoryPage;
