import {
  Profile,
  LoginResult,
  AccessToken,
  LoginManager,
  AccessTokenMap,
} from 'react-native-fbsdk-next';

const FACEBOOK_PERMISSIONS: string[] = ['public_profile', 'email'];

export const signIn = async () => {
  try {
    const result: LoginResult = await LoginManager.logInWithPermissions(
      FACEBOOK_PERMISSIONS,
    );

    if (result?.isCancelled) {
      console.log('Facebook Login Canceled');
      return;
    }

    const userData: AccessTokenMap | null =
      await AccessToken.getCurrentAccessToken();

    return userData;
  } catch (e) {
    console.log('Facebook Login Error', e);
  }
};

export const getUserProfile = () => {
  try {
    return Profile.getCurrentProfile();
  } catch (e) {
    console.log('Facebook Profile Get Error', e);
  }
};

export const signOut = () => {
  try {
    return LoginManager.logOut();
  } catch (e) {
    console.log('Facebook Log Out Error', e);
  }
};
