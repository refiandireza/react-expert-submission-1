import React from 'react';
import { Link } from 'react-router-dom';
import { HiChatAlt2 } from 'react-icons/hi';
import LoginInput from '../component/LoginInput';

function LoginPage() {
  return (
    <section className="login-page">
      <div className="banner" />
      <div className="login-section">
        <div className="login-card">
          <h1>
            Kuora
            <HiChatAlt2 />
          </h1>
          <h2>Gain & Share Knowledge</h2>
          <article className="login-input-section">
            <LoginInput />
            <p>
              Don&apos;t have an account?
              {' '}
              <Link to="/register">Register</Link>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
