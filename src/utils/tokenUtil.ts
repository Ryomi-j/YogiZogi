import jwtDecode, { JwtPayload } from 'jwt-decode';

export const decoderToken = (token: string) => {
  try {
    const decodedToken: JwtPayload = jwtDecode(token);
    // 유효 시간 확인
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp) {
      if (decodedToken.exp < currentTime) {
        return { user: {}, expiration: false };
      }
    }
    return {
      user: {
        id: Number(decodedToken.jti),
        nickname: decodedToken.iss,
        email: decodedToken.sub
      },
      expiration: true,
      isLoggedIn: true
    };
  } catch (error) {
    return
  }
};
