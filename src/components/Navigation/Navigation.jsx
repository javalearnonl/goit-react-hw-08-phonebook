import { useAuth } from "hooks";
import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? css.navButtonIsActive : css.navButton
        }
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/phonebook"
          className={({ isActive }) =>
            isActive ? css.navButtonIsActive : css.navButton
          }
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}