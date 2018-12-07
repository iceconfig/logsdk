import {LogSDK} from './sdk';

const sdk = new LogSDK('/log.do');

export function sendLog(data) {
  sdk.sendLog(data);
}
