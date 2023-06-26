import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { Button } from 'components';

const propTypes = {
  className: PropTypes.string,
  experience: PropTypes.object
};

const CardExperience = ({ edit, date, job, link, company, list_experience }) => {
  const deleteExperience = (experience_id) => {
    // dispatch(deleteExperienceAction(experience_id));
  };
  return (
    <div className={'max-w-500 w-3/4 mt-4 p-4 ml-32 border border-gray-400 rounded-xlg '}>
      {edit ? (
        <Button href={`/edit/experience/${company}`} variante="link">
          <h4 className="xsl:text-1-5xl  font-bold xs:text-xl">{job}</h4>{' '}
        </Button>
      ) : (
        <h4 className="xsl:text-1-5xl  font-bold xs:text-xl">{job}</h4>
      )}
      {!edit && (
        <Button variante="a" href={link} className="text-primary text-xl font-medium xs:text-lg">
          {company}
        </Button>
      )}

      <p>{date}</p>

      {list_experience && list_experience.length > 0 && (
        <ul className=" ml-4 list-disc mt-3">
          {list_experience.map((listExp, index) => (
            <li key={index} className="text-secondary flex ">
              <p>{parse(listExp.description)}</p>
              {edit && (
                <Button className="delete" onClick={() => deleteExperience(listExp.id)}>
                  <svg role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </Button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
CardExperience.propTypes = propTypes;
export default CardExperience;
