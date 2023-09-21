import React, { useEffect, useMemo } from 'react';
import CardExperience from './CardExperience';
import { useRecord } from 'contexts/RecordContext/useRecord';
interface TimelineProps {
  setObserver: any;
}
interface Experience {
  name: string;
  id: string;
  techno?: string;
  year?: number;
}
interface RecordtData {
  listExperiences?: Experience[];
}
interface RecordtData {}
const Timeline = ({ setObserver }: TimelineProps) => {
  const { listExperiences = [] } = useRecord('getResume') as RecordtData;

  //const timeLine = useRef();
  //listExperiences  It Will be fired when the element crossed the middle of the screen.
  const refsById = useMemo(() => {
    const newRefsById: { [key: number]: React.RefObject<HTMLDivElement> } = {};
    listExperiences?.forEach((_, index) => {
      newRefsById[index] = React.createRef();
    });
    return newRefsById;
  }, [listExperiences]);

  const refseById = useMemo(() => {
    const newRefseById: { [key: number]: React.RefObject<HTMLDivElement> } = {};
    // @ts-ignore
    listExperiences?.forEach((item: any, index) => {
      newRefseById[index] = React.createRef();
      if (newRefseById[index].current) {
        setObserver(newRefseById[index].current);
      }
    });
    return newRefseById;
  }, [listExperiences, setObserver]);

  useEffect(() => {
    Object.values(refsById).forEach((ref, index) => {
      const item = listExperiences[index];
      if (item?.year && ref.current) {
        setObserver(ref.current);
      }
    });
  }, [listExperiences, setObserver, refsById]);

  return (
    <div className="relative">
      {listExperiences.length > 0 &&
        listExperiences.map((DbListExperiences, index) => {
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
              <CardExperience {...DbListExperiences} />
            </div>
          ];
        })}
    </div>
  );
};

export default Timeline;
