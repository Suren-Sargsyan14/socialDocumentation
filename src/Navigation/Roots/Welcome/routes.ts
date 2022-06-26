import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum WelcomeRootRouteNames {
  WELCOME = 'welcome',
}

export type WelcomeRootParamList = {
  [WelcomeRootRouteNames.WELCOME]: undefined;
};

export type WelcomeNavigationProp<
  RouteName extends keyof WelcomeRootParamList = WelcomeRootRouteNames,
> = NativeStackNavigationProp<WelcomeRootParamList, RouteName>;
