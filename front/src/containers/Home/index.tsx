import { useEffect, useState, useRef } from 'react';
import useWindowDimensions from 'utils/useWindowDimensions';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Button, LoadingIndicator } from 'src/components';
import { useStore } from 'contexts/store';

const Preloader = () => {
  const { width } = useWindowDimensions();
  const [hidden, setHidden] = useState(false);
  const nodeRef = useRef(null);
  const { setStore } = useStore();

  useEffect(() => {
    const timer = setInterval(() => {
      if (width >= 1024) {
        //  setStore('tabs_id', 1);
        //setHidden(true);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [, setStore, width]);

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
            setStore('tabs_id', 1);
            setHidden(true);
          }}
        >
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="flex items-center justify-center flex-col m-auto ">
            <img className="FadeSize sm:px-4" src="/img/LOGO7.png" alt="logo" />
            <h1 className="text-white font-bold my-5 text-2xl FadeSize animation-delay-1000">
              Développeur Web Fullstack
            </h1>
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

export default Preloader;
