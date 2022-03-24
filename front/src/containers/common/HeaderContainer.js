import Header from "../../components/common/Header";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../modules/user";

const HeaderContainer = ({main}) => {
    const {user} = useSelector(({user}) => ({
        user : user.user
    }));

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    }

    return <Header user={user} onLogout={onLogout} main={main}/>
};

export default HeaderContainer;