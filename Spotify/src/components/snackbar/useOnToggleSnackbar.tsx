import {toggleUndoSnackbarAction} from '../../redux/reducers/snackbar/snackbarSlice';
import useAppDispatch from '../../redux/store/useAppDispatch';

const useOnToggleSnackbar = () => {
  const dispatch = useAppDispatch();

  const onToggleSnackbar = (isVisible: boolean) =>
    dispatch(toggleUndoSnackbarAction(isVisible));

  return {onToggleSnackbar};
};

export default useOnToggleSnackbar;
