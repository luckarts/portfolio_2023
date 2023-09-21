import parse from 'html-react-parser';
import BannerProfile from './BannerProfile';
import { Button } from 'src/components';
interface BannerUserProps {
  name: string;
}
interface RecordData {
  userProfile?: [{ description: string }];
}

import { useRecord, useAdmin } from 'src/contexts/';
const BannerUser = ({ name }: BannerUserProps) => {
  const { userProfile } = useRecord(name) as RecordData;
  const { isAdmin } = useAdmin();

  return (
    <>
      <BannerProfile name={name} />
      {userProfile && userProfile.length > 0 && (
        <div className="w-3/5 sm:w-11/12 m-auto animation-FadeUp animation-once delay-1000">
          <h3 className="pt-2">Information</h3>
          <div className=" resumeSvg flex justify-between ">
            <img className=" text-center m-auto" src="/img/experiences.svg" />
            <p className="pt-2 ">{parse(userProfile[0]?.description)}</p>
          </div>
        </div>
      )}
      {isAdmin && (
        <Button variante="link" addIcon href={`/editProfile`} className="link">
          Edter Profile
        </Button>
      )}{' '}
    </>
  );
};

export default BannerUser;
