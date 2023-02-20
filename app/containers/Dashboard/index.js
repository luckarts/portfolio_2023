/**
 *
 * DashBoard
 *
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { stateSelector } from 'containers/App/selectors';

const key = 'homePage';

/**
 * @return [type]
 */
export default function Dashboard() {
  const { user, isLogged, device, collapsed } = useSelector(stateSelector);

  return (
    <div className="  h-auto text-white py-24 px-10 object-fill">
      <div className="md:w-1/2 m-auto">
        <p className="text-3xl font-bold text-title"> Welcome {user.username}</p>
      </div>
    </div>
  );
}
