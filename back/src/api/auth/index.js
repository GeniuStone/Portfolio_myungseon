import Router from 'koa-router';
import * as authCtrl from './auth.ctrl';

const auth = new Router();

// 각 라우터 설정하고 모든 요청이 발생 시 postInfo 함수를 호출하도록 설정
auth.post('/register', authCtrl.register);
auth.post('/login', authCtrl.login);
auth.get('/check', authCtrl.check);
auth.post('/logout', authCtrl.logout);

export default auth;