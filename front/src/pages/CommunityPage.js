import HeaderContainer from '../containers/common/HeaderContainer';
import BulletinBoardContainer from '../containers/bulletinBoard/BulletinBoardContainer';
import Footer from '../components/common/Footer';
import { Helmet } from 'react-helmet-async';

const CommunityPage = () => {
    return (
        <div>
            <Helmet>
                <title>회원 게시판</title>
            </Helmet>
            <HeaderContainer></HeaderContainer>
            <BulletinBoardContainer></BulletinBoardContainer>
            <Footer></Footer>
        </div>
    );
};

export default CommunityPage;
