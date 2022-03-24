import HeaderContainer from '../containers/common/HeaderContainer';
import PostingContainer from '../containers/bulletinBoard/PostingContainer';
import Footer from '../components/common/Footer';
import { Helmet } from 'react-helmet-async';

const PostingPage = () => {
    return (
        <div>
            <Helmet>
                <title>게시글 작성</title>
            </Helmet>            
            <HeaderContainer />
            <PostingContainer />
            <Footer />
        </div>
    );
};

export default PostingPage;
