import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../palette';
import '../../fonts/fonts.css';
import Button from '../common/Button';
import { useHistory } from 'react-router-dom';

const RegisterBlock = styled(Responsive)`
    margin-top: 8rem;
    padding-bottom: 25rem;

    @media (max-width: 1023px) {
        margin-top: 8vw;
        padding-bottom: 60vw;
    }

    > div {
        width: 60%;
        margin: 0 auto;

        @media (min-width: 768px) and (max-width: 1023px) {
            width: 80%;
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
    }
`;

const LoginBox = styled.div`
    background-color: ${palette.white_1};
    padding: 3rem 2.5rem;
    box-shadow: 5px 5px 9px -8px ${palette.gray_2};

    > form {
        width: 70%;
        margin: 0 auto;

        @media (max-width: 767px) {
            width: 88%;
        }
    }

    > form > .registerInput > input {
        display: block;
        font-size: 1rem;
        padding: 1.5rem 1rem;
        height: 2rem;
        width: 100%;
        border-radius: 3px;
        border: 1px solid ${palette.gray_1};
        margin-top: 1rem;
    }

    > form > div.buttonContainer {
        margin-top: 3rem;
        text-align: center;

        > div.backBtn {
            border: none;
            border-radius: 3px;
            display: inline-block;
            font-family: 'SansRegular';
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            margin-right: 0.8rem;
            background-color: ${palette.gray_1};
            color: ${palette.gray_4};
            padding: 0.7rem 1.5rem;
        }

        > button.registerBtn {
            padding: 0.7rem 1.5rem;
            background-color: ${palette.indigo_3};
            color: ${palette.white_1};

            border: none;
            border-radius: 3px;
            display: inline-block;
            font-family: 'SansRegular';
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            margin-right: 0.8rem;
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

const Register = ({ onSubmit, onChange, form, error }) => {
    const history = useHistory();

    return (
        <RegisterBlock>
            <div>
                <h2>REGISTER</h2>
                <LoginBox>
                    <form onSubmit={onSubmit}>
                        <div className="registerInput">
                            <input
                                placeholder="아이디"
                                name="username"
                                onChange={onChange}
                                value={form.username}
                            />
                            {error === '이미 존재하는 아이디입니다.' && (
                                <ErrorMessage>{error}</ErrorMessage>
                            )}
                            <input
                                placeholder="비밀번호"
                                type="password"
                                name="password"
                                onChange={onChange}
                                value={form.password}
                            />
                            <input
                                placeholder="비밀번호 확인"
                                type="password"
                                name="passwordConfirm"
                                onChange={onChange}
                                value={form.passwordConfirm}
                            />
                            {error === '비밀번호가 일치하지 않습니다.' && (
                                <ErrorMessage>{error}</ErrorMessage>
                            )}
                            <input
                                placeholder="성함"
                                name="name"
                                onChange={onChange}
                                value={form.name}
                            />
                            <input
                                placeholder="연락처  ex) 01012341234"
                                name="callnumber"
                                onChange={onChange}
                                value={form.callnumber}
                            />
                            <input
                                placeholder="이메일  ex) abc123@naver.com"
                                name="email"
                                onChange={onChange}
                                value={form.email}
                            />
                        </div>
                        <div className="buttonContainer">
                            <div
                                onClick={() => {
                                    history.goBack();
                                }}
                                className="backBtn"
                            >
                                뒤로가기
                            </div>
                            <button type="submit" className="registerBtn">
                                회원가입
                            </button>
                        </div>
                    </form>
                </LoginBox>
            </div>
        </RegisterBlock>
    );
};

export default Register;
