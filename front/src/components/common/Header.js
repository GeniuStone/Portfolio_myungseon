import styled, { css } from 'styled-components';
import Responsive from './Responsive';
import { HiViewList } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';
import '../../fonts/fonts.css';
import { Link } from 'react-router-dom';
import palette from '../../palette';
import { useRef } from 'react';
import { MdPersonOutline } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

const HeaderWrapper = styled.div`
    position: relative;
    z-index: 50;
    width: 100%;
    top: 0;
    padding-bottom: 0.4rem;
    box-shadow: 1px -4px 8px ${palette.gray_4};

    ${(props) =>
        props.main &&
        css`
            position: absolute;
            padding-bottom: 0;
            box-shadow: none;
        `}
`;

const HeaderTop = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0.25rem 0;

    .headerTopList {
        margin-left: 0.6rem;
        color: ${palette.gray_4};
        font-size: 0.9rem;

        ${(props) =>
            props.main &&
            css`
                color: white;
            `}

        &.logoutBtn {
            cursor: pointer;
        }

        &:hover {
            text-decoration: underline;
        }
    }
`;

const HeaderBottom = styled.div`
    display: flex;
    justify-content: space-between;
    height: 4rem;

    ${(props) =>
        props.main &&
        css`
            border-bottom: 1px solid white;
            height: 4.5rem;
        `}

    .logo {
        display: flex;
        align-items: center;
        color: black;
        font-size: 2rem;
        font-family: 'SerifMedium';

        ${(props) =>
            props.main &&
            css`
                color: white;
            `}

        @media (min-width: 768px) and (max-width: 1023px) {
            font-size: 1.8rem;
        }

        @media (max-width: 767px) {
            font-size: 1.6rem;
        }
    }

    .mainMenu {
        display: flex;
        align-items: center;
        height: 100%;

        .mainMenuList {
            margin-left: 1.6rem;
            font-size: 1.2rem;
            font-weight: 600;
            color: ${palette.gray_4};
            display: flex;
            align-items: center;
            cursor: pointer;

            &:hover {
                color: ${palette.indigo_3};
            }

            ${(props) =>
                props.main &&
                css`
                    color: white;
                    text-shadow: 1px 1px 1px black;

                    &:hover {
                        color: white;
                    }
                `}
        }
    }

    .mobileNavBtn {
        font-size: 2.2rem;
        display: flex;
        align-items: center;
        color: ${palette.gray_4};
        cursor: pointer;

        ${(props) =>
            props.main &&
            css`
                color: white;
            `}
    }
`;

const UserInfo = styled.div`
    margin-right: 1rem;
    color: black;
    font-size: 0.9rem;

    ${(props) =>
        props.main &&
        css`
            color: white;
        `}
`;

const MobileNavBlock = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    text-align: right;
    display: none;
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
        cursor: pointer;

        &:hover {
            color: ${palette.indigo_3};
        }
    }
`;

const Header = ({ user, onLogout, ...props }) => {
    const isPc = useMediaQuery({
        query: '(min-width:1024px)',
    });
    const isTablet = useMediaQuery({
        query: '(min-width:768px) and (max-width:1023px)',
    });
    const isMobile = useMediaQuery({
        query: '(max-width:767px)',
    });

    const mobileNavBox = useRef();

    function mobileNavAppear() {
        const mobileNav = mobileNavBox.current;
        mobileNav.style.display = 'block';
    }

    function MobileNavClose() {
        const mobileNav = mobileNavBox.current;
        mobileNav.style.display = 'none';
    }

    return (
        <HeaderWrapper {...props}>
            <Responsive>
                {isPc && (
                    <HeaderTop {...props}>
                        {user && (
                            <UserInfo {...props}>
                                {user.username}님 반갑습니다.
                            </UserInfo>
                        )}
                        {user ? (
                            <div
                                className="headerTopList logoutBtn"
                                to={'/logout'}
                                onClick={onLogout}
                            >
                                로그아웃
                            </div>
                        ) : (
                            <Link className="headerTopList" to={'/login'}>
                                로그인
                            </Link>
                        )}
                        {!user && (
                            <Link className="headerTopList" to={'/register'}>
                                회원가입
                            </Link>
                        )}
                        <Link className="headerTopList" to={'/login'}>
                            마이페이지
                        </Link>
                    </HeaderTop>
                )}
                <HeaderBottom {...props}>
                    <Link className="logo" to={'/'}>
                        명선화다례원
                    </Link>
                    {isPc && (
                        <div className="mainMenu">
                            <div className="mainMenuList">공지사항</div>
                            <div className="mainMenuList">교육과정</div>
                            <div className="mainMenuList">수업일정</div>
                            <div className="mainMenuList">갤러리</div>
                            <Link className="mainMenuList" to={'/community'}>
                                회원게시판
                            </Link>
                        </div>
                    )}
                    {(isMobile || isTablet) && (
                        <div className="mobileNavBtn" onClick={mobileNavAppear}>
                            <HiViewList />
                        </div>
                    )}
                </HeaderBottom>
            </Responsive>
            {(isTablet || isMobile) && (
                <MobileNavBlock ref={mobileNavBox}>
                    <MobileNavBox ref={mobileNavBox}>
                        <NavClose>
                            <MdClose
                                className="navCloseBtn"
                                onClick={MobileNavClose}
                            />
                        </NavClose>
                        <MobileNavLogin>
                            {user && (
                                <div>
                                    <div>
                                        <MdPersonOutline className="loginIcon"></MdPersonOutline>
                                    </div>
                                    <Link className="userInfo">
                                        <span>{user.username}</span>님
                                        반갑습니다.
                                    </Link>
                                    <div
                                        className="logoutBtn"
                                        onClick={onLogout}
                                    >
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
                                <div className="NavListItem">공지사항</div>
                                <div className="NavListItem">교육과정</div>
                                <div className="NavListItem">수업일정</div>
                                <div className="NavListItem">갤러리</div>
                                <Link to={'/community'} className="NavListItem">
                                    회원게시판
                                </Link>
                            </div>
                        </MobileNavList>
                    </MobileNavBox>
                </MobileNavBlock>
            )}
        </HeaderWrapper>
    );
};

export default Header;
