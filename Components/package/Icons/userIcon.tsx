import React from 'react';
import {Path, Svg} from 'react-native-svg';

type UserIconProps = {
  color: string;
  size: number;
};

const UserIcon: React.FC<UserIconProps> = ({color, size}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
      <Path
        d="M18.5 18.86H17.74C16.94 18.86 16.18 19.17 15.62 19.73L13.91 21.42C13.13 22.19 11.86 22.19 11.08 21.42L9.37 19.73C8.81 19.17 8.04 18.86 7.25 18.86H6.5C4.84 18.86 3.5 17.53 3.5 15.89V4.97998C3.5 3.33998 4.84 2.01001 6.5 2.01001H18.5C20.16 2.01001 21.5 3.33998 21.5 4.97998V15.89C21.5 17.52 20.16 18.86 18.5 18.86Z"
        stroke="#595959"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.5 10C13.7868 10 14.83 8.95681 14.83 7.66998C14.83 6.38316 13.7868 5.34003 12.5 5.34003C11.2132 5.34003 10.17 6.38316 10.17 7.66998C10.17 8.95681 11.2132 10 12.5 10Z"
        stroke="#595959"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.5 15.66C16.5 13.86 14.71 12.4 12.5 12.4C10.29 12.4 8.5 13.86 8.5 15.66"
        stroke="#595959"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default UserIcon;
