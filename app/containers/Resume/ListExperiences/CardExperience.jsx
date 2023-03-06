import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { CustomLink } from 'components';

const propTypes = {
  className: PropTypes.string,
  experience: PropTypes.object
};

const CardExperience = ({ edit, date, job, link, company, list_experience }) => {
  const component = (
    <div className={'max-w-500 w-3/4 mt-4 p-4 ml-32 border border-gray-400 rounded-xlg '}>
      <h4 className="xsl:text-1-5xl  font-bold xs:text-xl">{job}</h4>
      <CustomLink variante="a" href={link} className="text-primary text-xl font-medium xs:text-lg">
        {company}
      </CustomLink>
      <p>{date}</p>

      {list_experience && list_experience.length > 0 && (
        <ul className=" ml-4 list-disc mt-3">
          {list_experience.map((listExp, index) => (
            <li key={index} className="text-secondary">
              <p>{parse(listExp.description)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return edit ? (
    <CustomLink href={`/edit/experience/${company}`} variante="link">
      {component}
    </CustomLink>
  ) : (
    component
  );
};
CardExperience.propTypes = propTypes;
export default CardExperience;
