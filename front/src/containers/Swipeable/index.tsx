import { useState, Children } from 'react';
import useWindowDimensions from 'utils/useWindowDimensions';
import { useSwipeable } from 'react-swipeable';
import { useStore } from 'src/contexts';
import { OnlyChildrenProps } from 'src/containers/type';

const RIGHT = -1;
const LEFT = 1;

const pagePaths = {
  2: '/luc_bachelerie',
  3: '/'
};

const NavTabs = ({ children }: OnlyChildrenProps) => {
  const { width } = useWindowDimensions();
  const { getStore, setStore } = useStore();

  const { tab_id } = getStore('tabs_id') || 0;
  const [trackMouse, setTrackMouse] = useState(false);
  const pagesSwipable = [0, 1, 2];

  const onSwiped = (direction: number) => {
    const change = direction === RIGHT ? 1 : -1;
    const adjustedIdx = tab_id + change;

    if (adjustedIdx in pagePaths) {
      // push(pagePaths[adjustedIdx]);
    }
    const newIdx = (adjustedIdx + pagesSwipable.length) % pagesSwipable.length;
    setStore('tabs_id', newIdx === 0 ? 1 : newIdx);
  };

  if (width <= 500 && trackMouse === true) {
    setTrackMouse(true);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => onSwiped(RIGHT),
    onSwipedRight: () => onSwiped(LEFT),
    preventDefaultTouchmoveEvent: trackMouse,
    trackMouse: trackMouse
  } as any);
  return <div {...handlers}>{tab_id != 0 && Children.only(children)}</div>;
};

export default NavTabs;
