import TimelineObserver from 'components/TimeLineOserver';
import Timeline from './TimeLine';

const ListExperience = () => {
  return (
    <div className=" my-16 xsl:w-3/5  sm:w-11/12  m-auto ">
      <div className="mb-2 xs:mb-12 flex-col  sm:10/11 m-auto">
        <h3 className="mb-6">Experiences</h3>
        <TimelineObserver
          initialColor="#e5e5e5"
          fillColor="#2d3748"
          handleObserve={(setObserver: any) => <Timeline setObserver={setObserver} />}
        />
      </div>
    </div>
  );
};

export default ListExperience;
