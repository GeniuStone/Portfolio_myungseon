import PostViewerContainer from "../containers/bulletinBoard/PostViewerContainer";
import HeaderContainer from "../containers/common/HeaderContainer";
import Footer from "../components/common/Footer";


const PostViewerPage = () => {
    return (
        <div>
            <HeaderContainer />
            <PostViewerContainer />   
            <Footer />         
        </div>
    );
}

export default PostViewerPage;