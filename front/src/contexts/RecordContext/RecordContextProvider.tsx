import { useReducer, ReactElement, useEffect, useState, ReactNode } from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
import { recordReducer } from 'contexts/RecordContext/reducer';
import { useQuery, useQueryClient } from 'react-query';
import { RecordContextType } from './type';
import { RecordContext } from './RecordContext';
import { useNotification } from '../Notification';

interface RecordContextProps<T = {}> {
  children: ReactNode | ((data: T) => ReactElement);
  name: string;
  callback: () => Promise<T>;
}

export function RecordProvider<T>({ children, name, callback }: RecordContextProps<T>) {
  const queryClient = useQueryClient();
  const [localData, setLocalData] = useState({});
  const { setNotifications } = useNotification();

  const [state, dispatch] = useReducer(recordReducer<T>, {});

  const { isLoading, isError } = useQuery<T, Error>(name, callback, {
    onSuccess: (data) => {
      // Stocker les données dans le cache de React Query
      queryClient.setQueryData(name, data);
      // Stocker les données dans le state local (via useReducer ou useState)
      dispatch({ type: 'SET_DATA', key: name, payload: data });
      setLocalData({ data });
    },
    retry: false
  });

  useEffect(() => {
    if (!name) {
      throw new Error('a name of callback to get Data is required');
    }
  }, [name]);

  useEffect(() => {
    if (isError) setNotifications([{ type: 'error', message: `error get Data from ${name}` }]);
  }, [isError]);

  if (isLoading) return <LoadingIndicator />;

  return (
    <RecordContext.Provider value={state as RecordContextType<T> | undefined}>
      {localData &&
        Object.keys(localData).length > 0 &&
        (typeof children === 'function' ? children(localData as T) : children)}
    </RecordContext.Provider>
  );
}
