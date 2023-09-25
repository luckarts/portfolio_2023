import { GetUserProfile } from 'utils/api';
import { RecordProvider } from '../../contexts';
import { Usercv } from './UserCV';

const Footer = () => {
  const IconStyle = 'rounded-full w-8 h-auto mx-2';
  return (
    <footer>
      <img className="text-center m-auto" src="/img/work.svg" />
      <div className="border-t border-gray-400  w-full h-24  mb-4 sm:mb-24">
        <div className={`flex relative items-center  justify-center`}>
          <div className=" flex flex-col items-center">
            <h5 className="text-gray-600 text-center text-1-5xl font-bold pt-2 ">Bachelerie Luc</h5>

            <div className="flex flex-wrap mt-4">
              <RecordProvider name="UserProfile" callback={() => GetUserProfile()}>
                <Usercv name="UserProfile" />
              </RecordProvider>

              <a
                className="link-icon"
                href="https://www.linkedin.com/in/luc-bachelerie-developperjs/"
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
    </footer>
  );
};

export default Footer;
