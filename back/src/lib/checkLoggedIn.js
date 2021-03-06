// 사용자가 로그인을 한 상태인지 검증하는 미들웨어
const checkLoggedIn = (ctx, next) => {
    // 컨텍스트에 user라는 state가 있는 경우에만 다음 미들웨어 실행
    // user state는 토큰의 유무에 따라 생성되므로 user state로 로그인 상태를 판단하면 됨
    if (!ctx.state.user) {
        ctx.status = 204;
        return;
    }

    return next();
};

export default checkLoggedIn;