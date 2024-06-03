import { http } from "@/utils/http";
import { APIProxy } from "../utils/api/proxy";

export type UserResult = {
  statusCode: string;
  message: string;
  data: {
    /** 头像 */
    avatar: string;
    /** 用户名 */
    accountName: string;
    /** 当前登录用户的角色 */
    roles: Array<string>;
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

export type RefreshTokenResult = {
  success: boolean;
  data: {
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

/** 登录 */
export const emailPass = (data?: object) => {
  return http.request<UserResult>(
    "post",
    APIProxy("public/login/email/pword"),
    { data }
  );
};

/** 刷新`token` */
export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", APIProxy("token/refresh"), {
    data
  });
};

/** 退出登录 */
export const remoteLogout = () => {
  return http.request<UserResult>("delete", APIProxy("user/logout"));
};
