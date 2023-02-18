import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { HiChatAlt2 } from 'react-icons/hi';
import RegisterInput from '../component/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };
  return (
    <section className="register-page">
      <div className="banner" />
      <div className="register-section">
        <div className="register-card">
          <h1>
            Kuora
            <HiChatAlt2 />
          </h1>
          <h2>Gain & Share Knowledge</h2>
          <p className="register-description">Register Your Account</p>
          <article className="register-input-section">
            <RegisterInput register={onRegister} />
            <p>
              Already have an account?
              {' '}
              <Link to="/">Login</Link>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
