import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdModeEdit } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';
import { createStructuredSelector } from 'reselect';
import { makeSelectLanguage } from 'containers/LanguageProvider/selectors';
import { useSelector } from 'react-redux';

const stateSelector = createStructuredSelector({
  language: makeSelectLanguage()
});

const Button = ({
  editIcon,
  addIcon,
  className,
  variante,
  href,
  children,
  type,
  onClick,
  h1,
  link,
  clearCss = false
}) => {
  let { language } = useSelector(stateSelector);
  return (
    <>
      {variante === 'link' && editIcon ? (
        <Link to={`/${language}${href}`} className={className}>
          <MdModeEdit />
          <span className="ml-2">{children}</span>
        </Link>
      ) : variante === 'link' && addIcon ? (
        <Link to={`/${language}${href}`} className={className}>
          <IoIosAdd />
          <span className="ml-2">{children}</span>
        </Link>
      ) : variante === 'link' ? (
        <Link to={`/${language}${href}`} className={className}>
          {children}
        </Link>
      ) : href ? (
        <a
          href={`/${language}${href}`}
          target="_blank"
          rel="noopener noreferrer"
          className={className ? className : 'link'}
        >
          {children}
        </a>
      ) : onClick ? (
        <button type={type} onClick={onClick} className={className}>
          {children}
        </button>
      ) : (
        <button type={type} onClick={onClick} className={className}>
          {children}
        </button>
      )}
    </>
  );
};
const propTypes = {
  children: PropTypes.node,
  variante: PropTypes.string,
  href: PropTypes.string,
  custom: PropTypes.bool,
  addIcon: PropTypes.bool,
  editIcon: PropTypes.bool,
  className: PropTypes.string
};

Button.propTypes = propTypes;
export default Button;
