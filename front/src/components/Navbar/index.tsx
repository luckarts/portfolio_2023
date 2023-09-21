import { NavLink } from 'react-router-dom';
import { useI18n, useStore } from 'src/contexts';
import { useState, useEffect } from 'react';
const Navbar = () => {
  //const { user, isloggin } = useAdmin();
  const [bgColor, setBgColor] = useState('transparent');

  const { language } = useI18n();
  const { setStore } = useStore();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Changez 50 par la valeur que vous souhaitez
        setBgColor('#3498db'); // Couleur de votre choix
      } else {
        setBgColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        (bgColor == 'transparent' ? 'lg:bg-transparent ' : 'lg:bg-gray-800 ') +
        'z-20 fixed xsl:top-0 w-full py-4 xs:bottom-0 sm:bg-gray-800 '
      }
    >
      <div className="flex max-w-screen-xl justify-between m-auto xsl:px-16  sm:px-8">
        <NavLink
          className="flex relative items-center"
          onClick={() => {
            setStore('tabs_id', 0);
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
              setStore('tabs_id', 2);

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

export default Navbar;
