import DeviceInfo from 'react-native-device-info';
import {Platform} from 'react-native';

export const paginationLimit = 10;
export const DEFAULT_LANGUAGE = 'en';
export const version = DeviceInfo.getVersion();
export const systemVersion = DeviceInfo.getSystemVersion();
export const platform = Platform.OS;
export const deviceUId = DeviceInfo.getUniqueId();
export const deviceType = DeviceInfo.getDeviceType();
export const hasNotch = DeviceInfo.hasNotch();

// export const DEFAULT_LANGUAGE = "cn";
