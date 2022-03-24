import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';
import palette from '../../palette';
import '../../fonts/fonts.css';

const LoginBlock = styled(Responsive)`
    margin-top: 8rem;
    padding-bottom: 25rem;

    @media (min-width: 768px) and (max-width: 1023px) {
        margin-top: 13vw;
        padding-bottom: 55vw;
    }

    @media (max-width: 767px) {
        margin-top: 15vw;
        padding-bottom: 75vw;
    }

    > div {
        width: 45%;
        margin: 0 auto;

        @media (min-width: 768px) and (max-width: 1023px) {
            width: 60%;
        }

        @media (max-width: 767px) {
            width: 100%;
        }
    }

    > div > h2 {
        border-left: 5px solid ${palette.indigo_3};
        padding-left: 0.8rem;
        font-size: 2rem;
        margin-bottom: 1rem;

        @media (min-width: 768px) and (max-width: 1023px) {
            font-size: 4vw;
        }

        @media (max-width: 767px) {
            font-size: 6vw;
        }
    }
`;

const LoginBox = styled.div`
    background-color: ${palette.white_1};
    padding: 3rem 2.5rem;
    box-shadow: 5px 5px 9px -8px ${palette.gray_2};

    > form {
        display: flex;

        > .loginInput {
            margin-right: 0.5rem;
            flex-grow: 1;

            > input {
                display: block;
                font-size: 1rem;
                padding: 1.5rem 1rem;
                height: 2rem;
                width: 100%;
                border-radius: 3px;
                border: 1px solid ${palette.gray_1};

                &:first-child {
                    margin-bottom: 0.5rem;
                }
            }
        }
    }

    > form > button {
        font-size: 1.2rem;
        background-color: ${palette.indigo_1};
        color: white;
        font-family: 'SansMedium';
        border: none;
        cursor: pointer;
        flex-grow: 1;

        &:hover {
            background-color: ${palette.indigo_3};
        }

        @media (max-width: 767px) {
            font-size: 3.5vw;
        }
    }
`;

const LoginLink = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > .registerBtn {
        border: none;
        border-radius: 3px;
        display: inline-block;
        background-color: white;
        padding: 0.5rem 2rem;
        font-family: 'SansRegular';
        font-size: 1.1rem;
        font-weight: bold;
        color: ${palette.indigo_1};
        cursor: pointer;

        &:hover {
            background-color: ${palette.indigo_3};
            color: white;
        }
    }

    > div:last-child {
        display: flex;

        > .loginLinkList {
            color: ${palette.gray_3};
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }

        > span {
            display: inline-block;
            margin: 0 0.2rem;
        }
    }
`;

const ErrorMessage = styled.div`
    color: red;
    text-align: left;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    padding-left: 0.5rem;
`;

const Login = ({onChange, onSubmit, form, error}) => {
    return (
        <LoginBlock>
            <div>
                <h2>LOGIN</h2>
                <LoginBox>
                    <form onSubmit={onSubmit}>
                        <div className="loginInput">
                            <input
                                placeholder="아이디"
                                name="username"
                                onChange={onChange}
                                value={form.login}
                            />
                            <input
                                placeholder="비밀번호"
                                type="password"
                                name="password"
                                onChange={onChange}
                                value={form.login}
                            />
                        </div>
                        <button type="submit">로그인</button>
                    </form>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <LoginLink>
                        <Link to={'/register'} className="registerBtn">
                            회원가입
                        </Link>
                        <div>
                            <div className="loginLinkList">아이디 찾기</div>
                            <span>/</span>
                            <div className="loginLinkList"> 비밀번호 찾기</div>
                        </div>
                    </LoginLink>
                </LoginBox>
            </div>
        </LoginBlock>
    );
};

export default Login;
