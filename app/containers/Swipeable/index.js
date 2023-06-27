import React, { useEffect, useState, Children, useContext } from 'react';
import useWindowDimensions from 'utils/useWindowDimensions';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';
import { StoreContext } from 'store/StoreContext';

const propTypes = {
  current_tabs: PropTypes.number,
  activeTab: PropTypes.func,
  children: PropTypes.element
};

const RIGHT = -1;
const LEFT = 1;

const pagePaths = {
  2: '/luc_bachelerie',
  3: '/'
};

const NavTabs = ({ children }) => {
  const { width } = useWindowDimensions();

  const { dispatch, store } = useContext(StoreContext);
  const { tab_id } = store;
  const [trackMouse, setTrackMouse] = useState(false);
  const pagesSwipable = [0, 1, 2];

  const onSwiped = (direction) => {
    const change = direction === RIGHT ? 1 : -1;
    const adjustedIdx = tab_id + change;

    if (adjustedIdx in pagePaths) {
      // push(pagePaths[adjustedIdx]);
    }
    const newIdx = (adjustedIdx + pagesSwipable.length) % pagesSwipable.length;
    dispatch({ type: 'tabs_id', payload: newIdx === 0 ? 1 : newIdx });
  };

  if (width <= 500 && trackMouse === true) {
    setTrackMouse(true);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => onSwiped(RIGHT),
    onSwipedRight: () => onSwiped(LEFT),
    preventDefaultTouchmoveEvent: trackMouse,
    trackMouse: trackMouse
  });
  return <div {...handlers}>{tab_id != 0 && Children.only(children)}</div>;
};

NavTabs.propTypes = propTypes;
export default NavTabs;
