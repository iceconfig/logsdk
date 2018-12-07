import {Http} from './http';
import {Environment} from './environment';


export class LogSDK {

  private sdkStatus = 0;
  private backend: string;
  private http: Http;
  private userEnv: Environment;

  constructor(_backend: string) {
    this.backend = _backend;

    /**
     * 初始化HTTP
     * */
    try {
      this.http = new Http();
    } catch (e) {
      this.sdkStatus = this.sdkStatus | 1;
    }

    /**
     * 获取客户端运行环境
     * */
    try {
      this.userEnv = new Environment();
    } catch (e) {
      this.sdkStatus = this.sdkStatus | (1 << 1);
    }
  }

  /**
   * 向后端发送日志数据
   * @param data
   */
  sendLog(data: any) {
    this.http.post(this.backend, {
      data: data,
      status: this.sdkStatus,
      env: this.userEnv
    });
  }
}