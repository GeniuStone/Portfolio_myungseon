import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SchedulePage from './pages/SchedulePage';
import CommunityPage from './pages/CommunityPage';
import PostingPage from './pages/PostingPage';
import PostViewerPage from './pages/PostViewerPage';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const App = () => {
    return (
        <div>
            <Helmet>
                <title>안녕하세요. 명선화다례원 홈페이지입니다.</title>
            </Helmet>
            <Route component={MainPage} path={'/'} exact></Route>
            <Route component={LoginPage} path={'/login'}></Route>
            <Route component={RegisterPage} path={'/register'}></Route>
            <Route component={SchedulePage} path={'/schedule'}></Route>
            <Route component={CommunityPage} path={['/community']}></Route>
            <Route component={PostingPage} path={'/posting'}></Route>
            <Route
                component={PostViewerPage}
                path={'/@:username/:postId'}
            ></Route>
        </div>
    );
};

export default App;
