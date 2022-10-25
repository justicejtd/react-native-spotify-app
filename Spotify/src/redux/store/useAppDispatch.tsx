import {useDispatch} from 'react-redux';
import {AppDispatch} from './store';

const useAppDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();

  return dispatch;
};

export default useAppDispatch;
