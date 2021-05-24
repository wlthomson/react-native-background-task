import { NativeModules } from 'react-native';

const { AlarmManagerModule } = NativeModules;

export const AlarmManager = AlarmManagerModule;

export default AlarmManager;