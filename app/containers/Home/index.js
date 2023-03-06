import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import useWindowDimensions from 'utils/useWindowDimensions';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Button, LoadingIndicator } from 'components';
import { useDispatch } from 'react-redux';
import { setTab } from 'containers/Swipeable/actions';

const propTypes = {
  setTab: PropTypes.func
};

const Preloader = () => {
  const { width } = useWindowDimensions();
  const [hidden, setHidden] = useState(false);
  const dispatch = useDispatch();
  const nodeRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (width >= 1024) {
        dispatch(setTab(1));
        setHidden(true);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [dispatch, setTab, width]);

  return (
    <>
      <div
        ref={nodeRef}
        className={`pageLoader fixed top-0 z-50 h-screen bg-gradient-to-t from-fromHome to-toHome ${
          hidden ? 'active' : ''
        }`}
      >
        <div
          className="flex overflow-y-hidden h-screen relative w-full"
          onClick={() => {
            dispatch(setTab(1));
            setHidden(true);
          }}
        >
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="flex items-center justify-center flex-col m-auto ">
            <img className="FadeSize sm:px-4" src="/img/LOGO7.png" alt="logo" />
            <h1 className="text-white font-bold my-5 text-2xl FadeSize animation-delay-1000">Développeur Web </h1>
            {width >= 1024 ? (
              <LoadingIndicator className="bg-white" />
            ) : (
              <Button
                type="button"
                className="text-primary large inline-flex items-center rounded-full FadeSize animation-delay-2000"
              >
                <span>Balayer</span>
                <IoIosArrowRoundForward className="text-2xl" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Preloader.propTypes = propTypes;

export default Preloader;
