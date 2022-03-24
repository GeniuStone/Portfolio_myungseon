/* 메인 커맨드 센터 사령부 */
require('dotenv').config();
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import mongoose from 'mongoose';
import serve from 'koa-static';
import path from 'path';
import send from 'koa-send';

// 포트 번호 저장하기 
// eslint-disable-next-line no-undef
const {PORT, MONGO_URI} = process.env;


// api 모둠 가져와서
import api from './api';
import jwtMiddleware from '../src/lib/jwtMiddleware';

mongoose.connect(MONGO_URI, {useNewUrlParser: true}).then(() => {
    console.log('Connected to MongoDB');     
})
.catch(e => {
    console.error(e);
});
 
const app = new Koa();
const router = new Router();

// api 모둠의 라우터 메인 커멘드 센터에 적용하기
router.use('/api', api.routes());

// 라우터를 적용하기 전에 bodyParser를 적용 (json 타입으로 변환해야 하기 때무네!)
app.use(bodyParser());
app.use(jwtMiddleware);

// app 인스턴스에 라우터 적용하기
app.use(router.routes()).use(router.allowedMethods());

// eslint-disable-next-line no-undef
const buildDirectory = path.resolve(__dirname, '../../front/build');
app.use(serve(buildDirectory));
app.use(async ctx => {
  // Not Found 이고, 주소가 /api 로 시작하지 않는 경우
  if (ctx.status === 404 && ctx.path.indexOf('/api') !== 0) {
    // index.html 내용을 반환
    await send(ctx, 'index.html', { root: buildDirectory });
  }
});

const port = PORT || 4000;
app.listen(port, () => {
    console.log('%d번 포트 접속 중', port);
});
