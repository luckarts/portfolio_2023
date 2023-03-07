import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdModeEdit } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';
import { createStructuredSelector } from 'reselect';
import { makeSelectLanguage } from 'containers/LanguageProvider/selectors';
import { useSelector } from 'react-redux';

const key = 'global';

const stateSelector = createStructuredSelector({
  language: makeSelectLanguage()
});

const CustomLink = ({ editIcon, addIcon, className, variante, href, children }) => {
  let { language } = useSelector(stateSelector);

  return (
    <>
      {variante === 'a' && href ? (
        <a href={`/${language}${href}`} target="_blank" rel="noopener noreferrer" className={className}>
          {children}
        </a>
      ) : variante === 'link' && editIcon ? (
        <Link to={`/${language}${href}`} className={'link ' + className}>
          <MdModeEdit />
          <span className="ml-2">{children}</span>
        </Link>
      ) : (
        variante === 'link' &&
        addIcon && (
          <Link to={`/${language}${href}`} className={'link ' + className}>
            <IoIosAdd />
            <span className="ml-2">{children}</span>
          </Link>
        )
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

CustomLink.propTypes = propTypes;
export default CustomLink;
