import parse from 'html-react-parser';
import { Button } from 'src/components';
import { useAdmin } from 'src/contexts';

interface CardExperienceProps {
  date?: string;
  job?: string;
  link?: string;
  company?: string;
  year?: number | undefined;
  list_experience?: [{ description: string }];
}
const CardExperience = ({ date, job, link, company, list_experience }: CardExperienceProps) => {
  const { isAdmin } = useAdmin();

  return (
    <div className={'max-w-500 w-3/4 mt-4 p-4 ml-32 border border-gray-400 rounded-xlg '}>
      {isAdmin ? (
        <Button href={`/edit/experience/${company}`} variante="link">
          <h4 className="xsl:text-1-5xl  font-bold xs:text-xl">{job}</h4>{' '}
        </Button>
      ) : (
        <h4 className="xsl:text-1-5xl  font-bold xs:text-xl">{job}</h4>
      )}
      {company && (
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default CardExperience;
