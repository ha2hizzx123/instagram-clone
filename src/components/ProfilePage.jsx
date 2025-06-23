"use client";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Settings,
  Grid3X3,
  Bookmark,
  UserCheck,
  MoreHorizontal,
} from "lucide-react";
import "./ProfilePage.css";

const profileData = {
  your_username: {
    username: "your_username",
    displayName: "내 계정",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e5?w=150&h=150&fit=crop&crop=face",
    posts: 42,
    followers: 1234,
    following: 567,
    bio: "안녕하세요! 일상을 공유합니다 📸✨",
    isOwn: true,
  },
  emma_wilson: {
    username: "emma_wilson",
    displayName: "Emma Wilson",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    posts: 28,
    followers: 892,
    following: 234,
    bio: "여행을 좋아하는 사람 ✈️🌍 | 사진작가",
    isOwn: false,
  },
  john_doe: {
    username: "john_doe",
    displayName: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    posts: 156,
    followers: 2341,
    following: 432,
    bio: "음식 사진 전문가 🍕🍝 | 요리 블로거",
    isOwn: false,
  },
  sarah_kim: {
    username: "sarah_kim",
    displayName: "Sarah Kim",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    posts: 89,
    followers: 1567,
    following: 345,
    bio: "등산과 자연을 사랑하는 사람 🏔️🌲",
    isOwn: false,
  },
  mike_chen: {
    username: "mike_chen",
    displayName: "Mike Chen",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    posts: 67,
    followers: 743,
    following: 289,
    bio: "카페 탐방가 ☕ | 브런치 러버 🥐",
    isOwn: false,
  },
};

const postImages = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=300&fit=crop",
];

function ProfilePage() {
  const navigate = useNavigate();
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState("posts");

  const profile = profileData[username];

  if (!profile) {
    return <div>프로필을 찾을 수 없습니다.</div>;
  }

  const handleBack = () => {
    navigate("/main");
  };

  const userPosts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: postImages[i % postImages.length],
    likes: Math.floor(Math.random() * 1000) + 100,
  }));

  return (
    <div className="profile-container">
      {/* Header */}
      <header className="profile-header">
        <div className="profile-header-content">
          <div className="header-left">
            <button onClick={handleBack} className="back-button">
              <ArrowLeft size={24} />
            </button>
            <h1>{profile.username}</h1>
          </div>
          <div className="header-right">
            {profile.isOwn && <Settings size={24} className="icon" />}
            <MoreHorizontal size={24} className="icon" />
          </div>
        </div>
      </header>

      <div className="profile-content">
        {/* Profile Info */}
        <div className="profile-info">
          <img
            src={profile.avatar || "/placeholder.svg"}
            alt={profile.username}
            className="profile-avatar-large"
          />

          <div className="profile-details">
            <div className="profile-actions">
              <h2>{profile.username}</h2>
              {profile.isOwn ? (
                <button className="edit-profile-button">프로필 편집</button>
              ) : (
                <div className="follow-actions">
                  <button className="follow-button">팔로우</button>
                  <button className="message-button">메시지</button>
                  <button className="more-button">
                    <UserCheck size={20} />
                  </button>
                </div>
              )}
            </div>

            <div className="profile-stats">
              <div className="stat">
                <span className="stat-number">{profile.posts}</span>
                <span className="stat-label">게시물</span>
              </div>
              <div className="stat">
                <span className="stat-number">
                  {profile.followers.toLocaleString()}
                </span>
                <span className="stat-label">팔로워</span>
              </div>
              <div className="stat">
                <span className="stat-number">{profile.following}</span>
                <span className="stat-label">팔로잉</span>
              </div>
            </div>

            <div className="profile-bio">
              <div className="display-name">{profile.displayName}</div>
              <div className="bio-text">{profile.bio}</div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="highlights">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="highlight-item">
              <div className="highlight-circle"></div>
              <span className="highlight-label">하이라이트</span>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="profile-tabs">
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === "posts" ? "active" : ""}`}
              onClick={() => setActiveTab("posts")}
            >
              <Grid3X3 size={16} />
              <span>게시물</span>
            </button>
            <button
              className={`tab-button ${activeTab === "saved" ? "active" : ""}`}
              onClick={() => setActiveTab("saved")}
            >
              <Bookmark size={16} />
              <span>저장됨</span>
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "posts" && (
              <div className="posts-grid">
                {userPosts.map((post) => (
                  <div key={post.id} className="grid-post">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={`Post ${post.id}`}
                    />
                  </div>
                ))}
              </div>
            )}

            {activeTab === "saved" && (
              <div className="empty-state">
                <Bookmark size={48} />
                <p>저장된 게시물이 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
