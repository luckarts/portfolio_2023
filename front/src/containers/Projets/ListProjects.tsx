import { useState, useEffect } from 'react';
import { Card } from 'src/components';
import { useStore, useRecord } from 'src/contexts';

interface ListProjectsProps {
  name: string;
}
interface Project {
  name: string;
  id: string;
  techno?: string;
}
interface ProjectData {
  projects?: Project[];
}
const ListProjects = ({ name }: ListProjectsProps) => {
  const { projects } = useRecord(name) as ProjectData;
  const [datafilter, setFilterProject] = useState(projects || []);
  const { getStore } = useStore();

  const filterProjects = (projects: Project[], tag: string) => {
    return projects.filter((project) => project.techno?.split(' / ').includes(tag));
  };
  const tag = getStore('tag');
  let tagValue;

  useEffect(() => {
    if (Array.isArray(tag)) {
      tagValue = tag.join(','); // Convertit le tableau en chaîne de caractères
    } else {
      tagValue = tag;
    }
    if (tag) {
      setFilterProject(filterProjects(projects || [], tagValue));
    } else {
      setFilterProject(projects || []);
    }
  }, [projects, tag]);
  return (
    <>
      {datafilter.length > 0 &&
        datafilter?.map((projet, key) => (
          <div
            className={`md:w-1/2 sm:w-full fadeSlide delay-${key === 0 ? 200 : (key / 5.0) * 1000 + 200}`}
            key={projet.id}
          >
            <Card keyID={key} {...projet} />
          </div>
        ))}
    </>
  );
};

export default ListProjects;
