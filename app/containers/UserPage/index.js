import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import BannerProfile from './BannerProfile';
import { Button } from 'components';
import { useQuery } from 'react-query';
import { fetchData } from 'utils/fetchData';
import ApiEndpoint from 'utils/api';

const key = 'User';
const BannerUser = ({ edit, isLogged }) => {
  const { data, isLoading, error } = useQuery('getUser', () => fetchData(ApiEndpoint.getUserPublicPath()));

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <BannerProfile user={data} />

      {!edit && isLogged && (
        <Button editIcon variante="link" href="/edit/profile" className="link">
          Gerer mon profil
        </Button>
      )}

      {data?.user.description && (
        <div className="w-3/5 sm:w-11/12 m-auto animation-FadeUp animation-once delay-1000">
          <h3 className="pt-2">Information</h3>
          <div className="flex justify-between">
            <img className="resumeSvg text-center m-auto" src="/img/experiences.png" />

            <p className="pt-2 ">{parse(data?.user.description)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BannerUser;
