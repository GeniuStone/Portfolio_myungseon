import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

// 각 라우터 설정하고 모든 요청이 발생 시 postInfo 함수를 호출하도록 설정
posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);
posts.get('/:id', postsCtrl.getPostById, postsCtrl.read);
posts.delete(
    '/:id',
    postsCtrl.getPostById,
    checkLoggedIn,
    postsCtrl.checkOwnPost,
    postsCtrl.remove,
);
posts.patch(
    '/:id',
    postsCtrl.getPostById,
    checkLoggedIn,
    postsCtrl.checkOwnPost,
    postsCtrl.update,
);

export default posts;
