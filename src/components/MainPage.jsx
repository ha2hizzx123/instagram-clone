"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Home,
  Search,
  PlusSquare,
  Film,
} from "lucide-react";
import "./MainPage.css";

const stories = [
  {
    id: 1,
    username: "your_story",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e5?w=150&h=150&fit=crop&crop=face",
    isOwn: true,
  },
  {
    id: 2,
    username: "emma_wilson",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    username: "john_doe",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    username: "sarah_kim",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 5,
    username: "mike_chen",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
];

const posts = [
  {
    id: 1,
    username: "emma_wilson",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop",
    likes: 1234,
    caption: "아름다운 바다 풍경! 🌊 완벽한 휴가였어요 ☀️",
    timeAgo: "2시간 전",
  },
  {
    id: 2,
    username: "john_doe",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=600&fit=crop",
    likes: 856,
    caption: "오늘 저녁은 파스타! 직접 만든 토마토 소스가 일품 🍝",
    timeAgo: "4시간 전",
  },
  {
    id: 3,
    username: "sarah_kim",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=600&fit=crop",
    likes: 2341,
    caption: "산 정상에서 바라본 일출 🌅 힘들었지만 보람있는 등반이었어요!",
    timeAgo: "6시간 전",
  },
];

function MainPage() {
  const navigate = useNavigate();
  const [likedPosts, setLikedPosts] = useState([]);

  const handleStoryClick = (storyId) => {
    navigate(`/story/${storyId}`);
  };

  const handleProfileClick = (username) => {
    navigate(`/profile/${username}`);
  };

  const handleLike = (postId) => {
    setLikedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="main-container">
      {/* Header */}
      <header className="main-header">
        <div className="header-content">
          <h1>Instagram</h1>
          <div className="header-icons">
            <Home size={24} className="icon" />
            <Search size={24} className="icon" />
            <PlusSquare size={24} className="icon" />
            <Film size={24} className="icon" />
            <div
              className="profile-avatar"
              onClick={() => handleProfileClick("your_username")}
            >
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616c9c0e8e5?w=32&h=32&fit=crop&crop=face"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="main-content">
        {/* Stories */}
        <div className="stories-container">
          <div className="stories-scroll">
            {stories.map((story) => (
              <div
                key={story.id}
                className="story-item"
                onClick={() => handleStoryClick(story.id)}
              >
                <div
                  className={`story-avatar ${
                    story.isOwn ? "own-story" : "friend-story"
                  }`}
                >
                  <img
                    src={story.avatar || "/placeholder.svg"}
                    alt={story.username}
                  />
                </div>
                <span className="story-username">
                  {story.isOwn ? "내 스토리" : story.username}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Posts */}
        <div className="posts-container">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <div className="post-user-info">
                  <img
                    src={post.avatar || "/placeholder.svg"}
                    alt={post.username}
                    className="post-avatar"
                    onClick={() => handleProfileClick(post.username)}
                  />
                  <span
                    className="post-username"
                    onClick={() => handleProfileClick(post.username)}
                  >
                    {post.username}
                  </span>
                </div>
                <MoreHorizontal size={20} className="icon" />
              </div>

              <img
                src={post.image || "/placeholder.svg"}
                alt="Post"
                className="post-image"
              />

              <div className="post-actions">
                <div className="action-buttons">
                  <button onClick={() => handleLike(post.id)}>
                    <Heart
                      size={24}
                      className={likedPosts.includes(post.id) ? "liked" : ""}
                      fill={likedPosts.includes(post.id) ? "#ed4956" : "none"}
                    />
                  </button>
                  <button>
                    <MessageCircle size={24} />
                  </button>
                  <button>
                    <Send size={24} />
                  </button>
                </div>
                <button>
                  <Bookmark size={24} />
                </button>
              </div>

              <div className="post-info">
                <p className="likes-count">
                  좋아요 {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}개
                </p>
                <p className="post-caption">
                  <span className="username">{post.username}</span>{" "}
                  {post.caption}
                </p>
                <p className="post-time">{post.timeAgo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
