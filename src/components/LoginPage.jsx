"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./LoginPage.css";

function LoginPage({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-card">
          <div className="login-header">
            <div className="instagram-logo">
              <svg width="175" height="51" viewBox="0 0 175 51" fill="none">
                <path d="M0 0h175v51H0z" fill="none" />
                <text
                  x="87.5"
                  y="35"
                  textAnchor="middle"
                  fontSize="28"
                  fontFamily="serif"
                  fill="#262626"
                >
                  Instagram
                </text>
              </svg>
            </div>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
              required
            />

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            <button type="submit" className="login-button">
              로그인
            </button>
          </form>

          <div className="divider">
            <span>또는</span>
          </div>

          <button className="facebook-login">Facebook으로 로그인</button>

          <a href="#" className="forgot-password">
            비밀번호를 잊으셨나요?
          </a>
        </div>

        <div className="signup-card">
          <p>
            계정이 없으신가요? <a href="#">가입하기</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
