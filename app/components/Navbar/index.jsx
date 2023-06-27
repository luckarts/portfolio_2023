import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { StoreContext } from 'store/StoreContext';
import { I18nContext } from 'containers/I18nContext/I18nContext';

const propTypes = {
  current_tabs: PropTypes.number,
  activeTab: PropTypes.func
};

const Navbar = () => {
  const locale = 'en';
  // const { locale, isLogged } =
  const { language } = useContext(I18nContext);
  const { dispatch, store } = useContext(StoreContext);
  const { tabs_id } = store;

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <nav className="bg-gray-800 z-20 fixed xsl:top-0 w-full py-4 xs:bottom-0 ">
      <div className="flex max-w-screen-xl justify-between m-auto xsl:px-16  sm:px-8">
        <NavLink
          className="flex relative items-center"
          onClick={() => {
            dispatch({ type: 'tabs_id', payload: 0 });
          }}
          to={`/${language}/`}
        >
          <img src={'/img/logo8.png'} className="nav-logo" alt="logo" />
          <img src={'/img/LOGO7.png'} className="nav-logoName" alt="logoName" />
        </NavLink>
        <div className={`flex relative items-center`}>
          {/* isLogged && (
            <NavLink
              to={`/${locale}/admin/`}
              onClick={() => {
                scrollTop();
              }}
              className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}
            >
              Admin
            </NavLink>
          )*/}
          <NavLink
            to={`/${language}/`}
            onClick={() => {
              // dispatch({ type: 'tabs_id', payload: 1 });

              scrollTop();
            }}
            className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}
          >
            Projets
          </NavLink>
          <NavLink
            to={`/${language}/luc_bachelerie`}
            className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}
            onClick={() => {
              scrollTop();
            }}
          >
            À propos
          </NavLink>
          {/*
          <NavLink to="/illustrations" activeClassName="opacity-100 scale-125 text-white" className={`${navLinkStyle}`}>
            Galerie
          </NavLink>
          */}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = propTypes;

export default Navbar;
