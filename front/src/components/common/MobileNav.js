import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdPersonOutline } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import palette from '../../palette';
import '../../fonts/fonts.css';
import { useRef } from 'react';

const MobileNavBlock = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    text-align: right;
`;

const MobileNavBox = styled.div`
    display: inline-block;
    width: 55%;
    height: 100%;
    background-color: white;
    padding: 0 0 1.5rem 1.5rem;

    @media (max-width: 767px) {
        width: 100%;
        padding: 0 0 7vw 7vw;
    }

    > hr {
        margin: 0.2rem 2rem 0.5rem 0.5rem;
    }
`;

const NavClose = styled.div`
    width: 100%;
    text-align: right;

    > .navCloseBtn {
        cursor: pointer;
        font-size: 3rem;
        color: gray;
        margin: 0.2rem 0.3rem;
    }
`;

const MobileNavLogin = styled.div`
    text-align: left;

    > div {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
    }

    .loginIcon {
        font-size: 4rem;
        color: gray;
    }

    .loginText {
        font-size: 1.3rem;
        font-family: 'SansMedium';
        text-decoration: underline;
        margin-left: 0.5rem;

        &:hover {
            color: ${palette.indigo_3};
        }
    }

    .userInfo {
        font-size: 1.3rem;
        font-family: 'SansRegular';
        margin-left: 0.5rem;
        margin-right: 1rem;

        > span {
            font-weight: bold;
            color: ${palette.indigo_3};
        }
    }

    .logoutBtn {
        font-size: 1.3rem;
        font-family: 'SansMedium';
        text-decoration: underline;
        margin-left: 0.5rem;
        cursor: pointer;

        &:hover {
            color: ${palette.indigo_3};
        }
    }
`;

const MobileNavList = styled.div`
    > div {
        padding-left: 1rem;
        width: 100%;
    }

    > div > .NavListItem {        
        display: block;
        text-align: left;
        font-family: 'SansMedium';
        font-size: 1.8rem;
        margin: 2.8rem 0;

        &:hover {
            color: ${palette.indigo_3};
        }
    }
`;

const MobileNav = ({ user, onLogout }) => {
    const mobileNavBlock = useRef();
    const mobileNavBox = useRef();

    function MobileNavClose() {
        const mobileNavBackground = mobileNavBlock.current;
        mobileNavBackground.style.display = "none";
    }

    return (
        <MobileNavBlock ref={mobileNavBlock}>
            <MobileNavBox ref={mobileNavBox}>
                <NavClose>
                    <MdClose className="navCloseBtn" onClick={MobileNavClose}/>
                </NavClose>
                <MobileNavLogin>
                    {user && (
                        <div>
                            <Link to={'/mypage'}>
                                <MdPersonOutline className="loginIcon"></MdPersonOutline>
                            </Link>
                            <Link to={'/myPage'} className="userInfo">
                                <span>{user.username}</span>님 반갑습니다.
                            </Link>
                            <div className="logoutBtn" onClick={onLogout}>
                                로그아웃
                            </div>
                        </div>
                    )}
                    {!user && (
                        <div>
                            <Link to={'/login'}>
                                <MdPersonOutline className="loginIcon"></MdPersonOutline>
                            </Link>
                            <Link to={'/login'} className="loginText">
                                로그인 해주세요.
                            </Link>
                        </div>
                    )}
                </MobileNavLogin>
                <hr />
                <MobileNavList>
                    <div className="NavListConatainer">
                        <Link to={'/login'} className="NavListItem">
                            공지사항
                        </Link>
                        <Link to={'/login'} className="NavListItem">
                            교육과정
                        </Link>
                        <Link to={'/login'} className="NavListItem">
                            수업일정
                        </Link>
                        <Link to={'/login'} className="NavListItem">
                            갤러리
                        </Link>
                        <Link to={'/login'} className="NavListItem">
                            회원게시판
                        </Link>
                    </div>
                </MobileNavList>
            </MobileNavBox>
        </MobileNavBlock>
    );
};

export default MobileNav;
