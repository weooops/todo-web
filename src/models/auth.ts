type AuthType = {
  /**
   * 로그인 여부
   */
  isLoggedIn: boolean;
  /**
   * 토큰 값
   */
  token: string | null;
};

export default AuthType;
