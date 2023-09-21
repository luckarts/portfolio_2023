import { Button } from 'src/components';
import { useStore, useRecord } from 'src/contexts';
interface TagData {
  tags?: { name: string; id: string }[];
}
const ListTags = () => {
  const { tags } = useRecord('getTags') as TagData;
  const { getStore, setStore } = useStore();
  const tag = getStore('tag');

  return (
    <div className="text-center pt-6 ">
      <Button
        className={`sizeTag ${tag == undefined || tag == '' ? 'tag' : 'text-primary'} animation-FadeUp animation-once`}
        onClick={() => setStore('tag', '')}
      >
        <span>All</span>
      </Button>
      {tags &&
        tags.length > 0 &&
        tags.map(({ name }, key: number) => (
          <Button
            key={key}
            className={`sizeTag ${name === tag ? 'tag' : 'text-primary'}
      fadeSlide delay-${key === 0 ? 200 : (key / 5.0) * 1000 + 200}`}
            onClick={() => setStore('tag', name)}
          >
            <span>{name}</span>
          </Button>
        ))}
    </div>
  );
};

export default ListTags;
