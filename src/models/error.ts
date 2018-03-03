type ErrorType = {
  /** 로그인 에러 메세지 */
  login: { message?: string; } | null,
  /** 회원가입 에러 메세지 */
  signup: { message?: string; } | null,
  /** 공통 에러 메세지 */
  common: { message?: string; } | null
};

export default ErrorType;
