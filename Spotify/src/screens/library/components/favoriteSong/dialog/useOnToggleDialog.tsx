import {toggleFavDialogAction} from '../../../../../redux/reducers/dialog/favDialogSlice';
import useAppDispatch from '../../../../../redux/store/useAppDispatch';

const useOnToggleDialog = () => {
  const dispatch = useAppDispatch();

  const onToggleDialog = () => dispatch(toggleFavDialogAction());

  return {onToggleDialog};
};

export default useOnToggleDialog;
