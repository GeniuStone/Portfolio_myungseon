import jwt from 'jsonwebtoken';
import User from '../models/user';

const jwtMiddleware = async (ctx, next) => {
    const token = ctx.cookies.get('access_token');

    if (!token) {
        return next();
    }

    try {
        // eslint-disable-next-line no-undef
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // 컨텐스트의 user라는 state 설정
        // 검증된 아이디와 유저 이름으로
        // user state 자체가 토큰의 유무로 결정되는 것이므로
        ctx.state.user = {
            _id: decoded._id,
            username: decoded.username,
        };

        // 토큰 3.5일 미만 남으면 재발급
        const now = Math.floor(Date.now() / 1000);
        if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
            const user = await User.findById(decoded._id);
            const token = user.generateToken();
            ctx.cookies.set('access_token', token, {
                maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
                httpOnly: true,
            });
        }
        console.log(decoded);
        return next();
    } catch (e) {
        return next();
    }
};

export default jwtMiddleware;
