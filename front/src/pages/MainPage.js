import HeaderContainer from '../containers/common/HeaderContainer';
import FirstContent from '../components/mainPage/FirstContent';
import SecondContent from '../components/mainPage/SecondContent';
import ThirdContent from '../components/mainPage/ThirdContent';
import FourthContent from '../components/mainPage/FourthContent';
import Footer from '../components/common/Footer';
import { useState } from 'react';

const MainPage = () => {
    const [main, setMain] = useState(true);

    return (
        <div>                       
            <HeaderContainer main={main} />
            <FirstContent />
            <SecondContent />
            <ThirdContent />
            <FourthContent />
            <Footer />
        </div>
    );
};

export default MainPage;
