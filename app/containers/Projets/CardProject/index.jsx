import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { Button } from 'components';

const propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  techno: PropTypes.string,
  description: PropTypes.string,
  linkCode: PropTypes.string,
  linkWebsite: PropTypes.string,
  edit: PropTypes.bool,
  id: PropTypes.number
};

const CardProject = ({ keyID, title, img, techno, description, linkCode, linkWebsite, edit, id }) => {
  return (
    <div className={`mb-6 ${keyID % 2 === 0 ? 'md:pr-4' : ''} `}>
      <div className="border border-gray-400 bg-white rounded-xlg shadow hover:shadow-md ">
        <a className="cursor-pointer " href={linkWebsite}>
          <div className="overflow-hidden relative rounded-t-xlg ">
            <div
              className="bg-cover bg-center w-full  transition duration-500 ease-in-out hover:scale-110"
              style={{ backgroundImage: 'url(' + img + ')', height: '250px' }}
            ></div>
          </div>
        </a>
        <div className="p-4 md:h-72 xl:h-64 flex justify-between flex-col">
          <h3 className=" py-2 text-primary">{title}</h3>
          {description && <p className=" text-gray-700">{parse(description)}</p>}
          <p className="mb-4 py-2 text-gray-800">
            Techno: <span className="font-bold">{techno}</span>
          </p>

          <div>
            {edit && (
              <Button
                link={title.toLowerCase()}
                className={`text-secondary small rounded border-2 border-secondary ${linkCode && 'mr-4'}`}
              >
                <span> Edit</span>
              </Button>
            )}
            {linkCode && (
              <a href={linkCode} className={`text-secondary small rounded border-2 border-secondary`}>
                <span> Code</span>
              </a>
            )}
            {linkWebsite && (
              <a
                className={`text-secondary small rounded border-2 border-secondary ${linkCode && 'ml-4'}`}
                href={linkWebsite}
              >
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
CardProject.propTypes = propTypes;
export default CardProject;
