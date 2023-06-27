/**
 *
 * LoginPage
 *
 */

import React from 'react';
import Form from 'components/Form';
import { rules } from 'common/rules';
import { useQuery } from 'react-query';
import ApiEndpoint from 'utils/apis';
//import { postData } from 'utils/fetchData';

const key = 'login';

const LoginPage = () => {
  const onFinish = async (values, e) => {
    e.preventDefault();
    try {
      //      () => postData(); // Faire quelque chose après la soumission réussie du formulaire, par exemple réinitialiser les champs ou afficher un message de succès
    } catch (error) {
      // Gérer les erreurs de soumission du formulaire
    }
  };

  const fields = [
    {
      name: 'username',
      label: 'Email',
      type: 'text'
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password'
    }
  ];

  return (
    <div className="m-auto flex">
      <Form fields={fields} rules={rules} title={'Login'} onSubmit={onFinish} />;
    </div>
  );
};
export default LoginPage;
