import React from 'react';
import {Path, Svg} from 'react-native-svg';

const SearchIcon = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M8.5 14C12.0899 14 15 11.0899 15 7.5C15 3.91015 12.0899 1 8.5 1C4.91015 1 2 3.91015 2 7.5C2 11.0899 4.91015 14 8.5 14Z"
        stroke="#7C7A93"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.2929 16.7071C16.6834 17.0976 17.3166 17.0976 17.7071 16.7071C18.0976 16.3166 18.0976 15.6834 17.7071 15.2929L16.2929 16.7071ZM17.7071 15.2929L13.7071 11.2929L12.2929 12.7071L16.2929 16.7071L17.7071 15.2929Z"
        fill="#7C7A93"
      />
    </Svg>
  );
};

export default SearchIcon;
