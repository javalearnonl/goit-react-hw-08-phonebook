import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth.thunk';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [passwordError, setPasswordError] = useState('');
  const [disableSubmit, setDisableSubmit] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const password = form.elements.password.value;

    if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long.');
      setDisableSubmit(true);
    } else {
      try {
        await dispatch(
          register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: password,
          })
        );
        // Здесь можно добавить обработку успешного регистрации, например, перенаправление на другую страницу.
      } catch (error) {}
    }
  };

  const handlePasswordChange = e => {
    const password = e.target.value;
    setPasswordError(
      password.length < 8
        ? 'Password should be at least 8 characters long.'
        : ''
    );
    setDisableSubmit(password.length < 8);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          onChange={handlePasswordChange}
        />
      </label>
      {passwordError && <div className={css.error}>{passwordError}</div>}
      <button type="submit" disabled={disableSubmit}>
        Register
      </button>
    </form>
  );
};
