import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { setTab } from 'containers/Swipeable/actions';
import { useDispatch } from 'react-redux';
import { makeSelectLanguage } from 'containers/LanguageProvider/selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';

const propTypes = {
  current_tabs: PropTypes.number,
  activeTab: PropTypes.func
};
const Navbar = () => {
  const dispatch = useDispatch();
  const stateSelector = createStructuredSelector({
    locale: makeSelectLanguage()
  });
  const { locale } = useSelector(stateSelector);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <nav className="bg-gray-800 z-20 fixed xsl:top-0 w-full py-4 xs:bottom-0 ">
      <div className="flex max-w-screen-xl justify-between m-auto xsl:px-16  sm:px-8">
        <NavLink
          className="flex relative items-center"
          onClick={() => {
            dispatch(setTab(0));
          }}
          to={`/${locale}/`}
        >
          <img src={'/img/logo8.png'} className="nav-logo" alt="logo" />
          <img src={'/img/LOGO7.png'} className="nav-logoName" alt="logoName" />
        </NavLink>
        <div className={`flex relative items-center`}>
          <NavLink
            to={`/${locale}/`}
            onClick={() => {
              scrollTop();
            }}
            className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}
          >
            Projets
          </NavLink>
          <NavLink
            to={`/${locale}/luc_bachelerie`}
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
