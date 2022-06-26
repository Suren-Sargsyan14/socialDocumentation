import Reactotron, {
  overlay,
  networking,
  openInEditor,
  asyncStorage,
  trackGlobalErrors,
} from 'reactotron-react-native';
import {NativeModules} from 'react-native';

const oldConsoleLog = console.log;
console.log = (...args) => {
  oldConsoleLog(...args);
  Reactotron.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
  });
};

const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];

//configuration
const reactotron = Reactotron.configure({
  name: 'Chalkboard App',
  host,
  // port: 9091
})
  .use(trackGlobalErrors({}))
  .use(openInEditor({}))
  .use(overlay())
  .use(asyncStorage({}))
  .use(networking({}))
  .useReactNative({});

if (__DEV__) {
  reactotron.connect();
  reactotron?.clear?.();
}

export default reactotron;
