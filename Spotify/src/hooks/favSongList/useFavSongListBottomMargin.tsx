import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {getFavSongListBottomMargin} from '../../constants/favSongList/favSongList';

/**
 * Calculates the favorite song list bottom margin.
 * @returns {number} Returns the sum of library header height plus favorite song list title padding and bottom tab height.
 */
const useFavSongListBottomMargin = (): number => {
  const tabBarHeight = useBottomTabBarHeight();
  const bottomMargin = getFavSongListBottomMargin(tabBarHeight);

  return bottomMargin;
};

export default useFavSongListBottomMargin;
