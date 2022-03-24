import HeaderContainer from '../containers/common/HeaderContainer';
import LoginContainer from '../containers/login/LoginContainer';
import Footer from '../components/common/Footer';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
    return (
        <div>
            <Helmet>
                <title>로그인</title>
            </Helmet>
            <HeaderContainer></HeaderContainer>
            <LoginContainer></LoginContainer>
            <Footer></Footer>
        </div>
    );
};

export default LoginPage;
