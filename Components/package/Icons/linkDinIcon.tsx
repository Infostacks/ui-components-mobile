import React from 'react';
import {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Svg,
} from 'react-native-svg';

const LinkDinIcon = () => {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <G clip-path="url(#clip0_2294_33000)">
        <Path
          d="M12.5 0C5.59638 0 0 5.59638 0 12.5C0 19.4036 5.59638 24.9999 12.5 24.9999C19.4036 24.9999 25 19.4036 25 12.5C25 5.59638 19.4035 0 12.5 0ZM9.16496 18.5431H6.42046V9.67645H9.16496V18.5431ZM7.77963 8.5153C6.88331 8.5153 6.15668 7.78274 6.15668 6.87924C6.15668 5.97564 6.88341 5.24314 7.77963 5.24314C8.67585 5.24314 9.40248 5.97564 9.40248 6.87924C9.40253 7.78279 8.6759 8.5153 7.77963 8.5153ZM19.45 18.5431H16.7188V13.8889C16.7188 12.6123 16.2339 11.8998 15.2245 11.8998C14.1259 11.8998 13.552 12.6419 13.552 13.8889V18.5431H10.9197V9.67645H13.552V10.8706C13.552 10.8706 14.3438 9.406 16.2239 9.406C18.1041 9.406 19.45 10.554 19.45 12.9289L19.45 18.5431Z"
          fill="#0575B3"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_2294_33000"
          x1="3.66115"
          y1="3.66115"
          x2="21.3388"
          y2="21.3388"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#2489BE" />
          <Stop offset="1" stop-color="#0575B3" />
        </LinearGradient>
        <ClipPath id="clip0_2294_33000">
          <Rect width="25" height="25" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default LinkDinIcon;
