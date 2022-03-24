import HeaderContainer from '../containers/common/HeaderContainer';
import RegisterContainer from '../containers/register/RegisterContainer';
import Footer from '../components/common/Footer';
import { Helmet } from 'react-helmet-async';

const RegisterPage = () => {
    return (
        <div>
            <Helmet>
                <title>회원가입</title>
            </Helmet>  
            <HeaderContainer></HeaderContainer>
            <RegisterContainer></RegisterContainer>
            <Footer></Footer>
        </div>
    );
};

export default RegisterPage;
