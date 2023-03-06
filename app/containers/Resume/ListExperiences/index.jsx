import React, { useEffect, useMemo, useRef, useCallback } from 'react';
import CardExperience from './CardExperience';
import TimelineObserver from 'components/TimeLineOserver';
import LoadingIndicator from 'components/LoadingIndicator';

const Timeline = ({ setObserver, edit, listExperience }) => {
  const timeLine = useRef();
  // It Will be fired when the element crossed the middle of the screen.
  const refsById = useMemo(() => {
    const refs = {};
    listExperience.map((item, index) => {
      refs[index] = React.createRef();
    });
    return refs;
  }, [listExperience]);
  const refseById = useMemo(() => {
    const refs = {};
    listExperience.map((item, index) => {
      refs[index] = React.createRef();
    });
    return refs;
  }, [listExperience]);

  useEffect(() => {
    //setObserver(timeLine.current);
    listExperience?.map((item, index) => {
      setObserver(refseById[index].current);
      if (item.year) {
        setObserver(refsById[index].current);
      }
    });
  }, [refseById, refsById, listExperience]);
  return (
    <div className="relative">
      {listExperience.length > 0 &&
        listExperience.map((DbListExperiences, index) => {
          return [
            <div key={index} className={`x flex flex-wrap relative items-center	`}>
              <span
                className="h-105 ml-27 rounded absolute bg-primary w-2"
                id={'timeline100500' + index}
                ref={refseById[index]}
              ></span>
              {DbListExperiences.year && (
                <div
                  id={'timeline1005' + index}
                  ref={refsById[index]}
                  className="w-16 absolute flex justify-center items-center h-16 p-4 text-white rounded-full mr-20"
                >
                  <span>{DbListExperiences.year}</span>
                </div>
              )}
              <CardExperience {...DbListExperiences} edit={edit} />
            </div>
          ];
        })}
    </div>
  );
};
const ListExperience = ({ edit, isloading, listExperience, onScroll }) => {
  const ref = useRef();
  const linedraw = useRef();
  const grayLine = useRef();
  if (isloading) return <LoadingIndicator />;
  return (
    <div className=" my-16 xsl:w-3/5  sm:w-11/12  m-auto  " ref={ref}>
      <div className="mb-2 xs:mb-12 flex-col  sm:10/11 m-auto">
        <h3 className="mb-6">Experiences</h3>
        <TimelineObserver
          initialColor="#e5e5e5"
          fillColor="#2d3748"
          handleObserve={(setObserver) => (
            <Timeline edit={edit} listExperience={listExperience} className="timeline" setObserver={setObserver} />
          )}
        />
      </div>
    </div>
  );
};

export default ListExperience;
