import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdModeEdit } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';

const CustomLink = ({ editIcon, addIcon, className, variante, href, children }) => {
  return (
    <>
      {variante === 'a' && href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {children}
        </a>
      ) : variante === 'link' && editIcon ? (
        <Link to={href} className={'link ' + className}>
          <MdModeEdit />
          <span className="ml-2">{children}</span>
        </Link>
      ) : (
        variante === 'link' &&
        addIcon && (
          <Link to={href} className={'link ' + className}>
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
