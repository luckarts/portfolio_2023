interface BannerUserProps {
  name: string;
}
interface RecordData {
  userProfile?: [{ description: string; cv: string }];
}
import { useRecord } from 'src/contexts';
const BannerHeader = ({ name }: BannerUserProps) => {
  const { userProfile } = useRecord(name) as RecordData;

  const IconStyle = 'rounded-full w-8 h-auto my-4 mx-2 hover:scale-125 transition duration-300 ease-in-out ';
  return (
    <div className="rounded-xlg  w-3/5 sm:w-11/12 my-16 pt-2 mx-auto border border-gray-300 bg-white delay-600 fadeSlide ">
      <div className=" flex p-8 justify-around items-center sm:flex-col">
        <img
          className="pb-2 my-3 rounded-xlg icon-profile"
          style={{ maxWidth: '200px' }}
          src={'/img/character.png'}
          alt="img"
        />

        <div className=" flex flex-col items-center  ">
          <h1 className="text-primary pt-2 text-center">Bachelerie Luc</h1>
          <h2 className="text-primary text-1-5xl text-center pl-6 pr-6 pb-4 border-b-2 border-gray-300">
            Développeur Web Fullstack
            <br />
          </h2>
          <div className="flex flex-wrap mt-4">
            {userProfile && userProfile.length > 0 && (
              <a className="link-icon" href={'/img/' + userProfile[0].cv} target="_self" rel="noopener noreferrer">
                <img className={IconStyle} src="/img/logocv.jpg" alt="cv" />
              </a>
            )}

            <a
              className="link-icon"
              href="https://www.linkedin.com/in/luc-bachelerie-developpe.ts/"
              rel="noopener noreferrer"
            >
              <img className={IconStyle} src="/img/linkedlin.jpg" alt="linkedlin" />
            </a>
            <a className="link-icon" href="mailto:luc.bachelerieart@gmail.com">
              <img className={IconStyle} src="/img/email.jpg" alt="email" />
            </a>
            <a className="link-icon" href="tel:0771073054">
              <img className={IconStyle} src="/img/tel.jpg" alt="tel" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHeader;
