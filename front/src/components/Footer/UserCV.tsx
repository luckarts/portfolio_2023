interface BannerUserProps {
  name: string;
}
interface RecordData {
  userProfile?: {
    description?: string;
    cv?: string;
  }[];
}
import { useRecord } from 'contexts/RecordContext/useRecord';

export const Usercv = ({ name }: BannerUserProps) => {
  const { userProfile } = useRecord(name) as RecordData;

  return (
    <>
      {userProfile && userProfile.length > 0 ? (
        <a className="link-icon" href={`/img/${userProfile[0]?.cv}`} target="_self" rel="noopener noreferrer">
          <img className={'rounded-full w-8 h-auto mx-2'} src="/img/logocv.jpg" alt="cv" />
        </a>
      ) : null}
    </>
  );
};
