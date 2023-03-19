import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import BannerProfile from './BannerProfile';
import { Button } from 'components';
import { makeSelectUSer } from 'containers/UserPage/selectors';
import { makeIsLoggedSelector } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import saga from 'containers/UserPage/saga';
import reducer from 'containers/UserPage/reducer';
import { useDispatch } from 'react-redux';
import { getUserAction } from 'containers/UserPage/actions';

const stateSelector = createStructuredSelector({
  user: makeSelectUSer(),
  isLogged: makeIsLoggedSelector()
});

const key = 'User';
const BannerUser = ({ edit }) => {
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const getUser = () => dispatch(getUserAction());
  const { user, isLogged } = useSelector(stateSelector);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <BannerProfile user={user} />

      {!edit && isLogged && (
        <Button editIcon variante="link" href="/edit/profile" className="link">
          Gerer mon profil
        </Button>
      )}

      {user.description && (
        <div className="w-3/5 sm:w-11/12 m-auto animation-FadeUp animation-once delay-1000">
          <h3 className="pt-2">Information</h3>
          <div className="flex justify-between">
            <img className="resumeSvg text-center m-auto" src="/img/experiences.png" />

            <p className="pt-2 ">{parse(user.description)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BannerUser;
