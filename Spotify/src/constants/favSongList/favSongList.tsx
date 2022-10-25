import {libAvatarHeight} from '../libraryHeader/libraryHeader';
import {Padding} from '../styles/styleProps';

// Favorite song list title vertical padding
export const titlePaddingVert = Padding.M;

// Get the required bottom margin for the favorite song list.
// This function calculates the bottom margin by adding tabBar height and library header height together.
export const getFavSongListBottomMargin = (tabBarHeight: number) => {
  return tabBarHeight + libAvatarHeight + titlePaddingVert;
};
