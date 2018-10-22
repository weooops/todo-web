import { I18n } from 'aws-amplify';

const dict = {
  fr: {
    'Sign In': 'Se connecter',
    'Sign Up': "S'inscrire"
  },
  es: {
    'Sign In': 'Registrarse',
    'Sign Up': 'Regístrate'
  },
  ko: {
    // 로그인 & 회원가입 & 비밀번호 찾기 & 로그아웃
    'Sign in to your account': '계정에 로그인 하십시오',
    Username: '사용자 이름',
    Password: '비밀번호',
    'Enter your username': '사용자 이름을 입력하십시오',
    'Enter your password': '사용자 비밀번호를 입력하십시오',
    'Forget your password? ': '비밀번호를 잊어 버렸습니까? ',
    'Reset password': '암호 재설정',
    'No account? ': '계정이 없나요? ',
    'Create account': '계정 만들기',
    'Sign In': '로그인',
    'Create a new account': '새로운 계정을 생성하십시오',
    'Create a username': '사용자 이름을 만드시오',
    'Create a password': '사용자 비밀번호를 만드시오',
    'Email Address': '이메일 주소',
    'Phone Number': '핸드폰 번호',
    'Have an account? ': '계정이 있나요? ',
    'Sign in': '로그인',
    'Create Account': '회원가입',
    'Reset your password': '당신의 비밀번호를 재설정 하십시오',
    'Back to Sign In': '로그인으로 돌아가기',
    'Send Code': '코드 전송',
    Code: '코드',
    'New Password': '새로운 비밀번호',
    'Resend Code': '코드 재전송',
    Submit: '제출',
    'Sign Out': '로그아웃',

    // 테스트
    'Todos with Amplify Client': 'Amplify 클라이언트가 있는 Todos',
    'GraphQL Query': 'GraphQL 쿼리',
    'GraphQL Mutation': 'GraphQL 변이',
    name: '이름',
    description: '설명',
    'Todos with Apollo Client': 'Apollo 클라이언트가 있는 Todos',
    Loading: '로딩중',
    Error: '에러',
    'Pick a file': '파일 선택'
  }
};

I18n.putVocabularies(dict);
