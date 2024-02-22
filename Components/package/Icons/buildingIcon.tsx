import React from 'react';
import {Path, Svg} from 'react-native-svg';

type BuildingIconProps = {
  color: string;
  size: number;
};

const BuildingIcon: React.FC<BuildingIconProps> = ({color, size}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
      <Path
        d="M12.6666 22.0001H4.24663C3.08663 22.0001 2.13663 21.0701 2.13663 19.9301V5.09011C2.13663 2.47011 4.08663 1.2801 6.47663 2.4501L10.9166 4.63011C11.8766 5.10011 12.6666 6.3501 12.6666 7.4101V22.0001Z"
        stroke="#595959"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M22.1366 15.0601V18.8401C22.1366 21.0001 21.1366 22.0001 18.9766 22.0001H12.6666V10.4201L13.1366 10.5201L17.6366 11.5301L19.6666 11.9801C20.9866 12.2701 22.0666 12.9501 22.1266 14.8701C22.1366 14.9301 22.1366 14.9901 22.1366 15.0601Z"
        stroke="#595959"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.66663 9.00012H9.13663"
        stroke="#595959"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.66663 13.0001H9.13663"
        stroke="#595959"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.6366 11.5301V14.7501C17.6366 15.9901 16.6266 17.0001 15.3866 17.0001C14.1466 17.0001 13.1366 15.9901 13.1366 14.7501V10.5201L17.6366 11.5301Z"
        stroke="#595959"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M22.1266 14.8701C22.0666 16.0501 21.0866 17.0001 19.8866 17.0001C18.6466 17.0001 17.6366 15.9901 17.6366 14.7501V11.5301L19.6666 11.9801C20.9866 12.2701 22.0666 12.9501 22.1266 14.8701Z"
        stroke="#595959"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default BuildingIcon;
