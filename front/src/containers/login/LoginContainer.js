import Login from '../../components/login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import { useEffect } from 'react';
import { check } from '../../modules/user';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';

const LoginContainer = ({ history }) => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));

    // 입력 박스 값 업데이트 함수
    const onChange = (e) => {
        const { value, name } = e.target;

        dispatch(
            changeField({
                form: 'login',
                key: name,
                value,
            }),
        );
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { username, password } = form;
        dispatch(login({ username, password }));
    };  

    useEffect(() => {
        dispatch(initializeForm('login'));

        if (authError) {
            console.log('오류 발생');
            console.log(authError);
            setError('아이디 또는 비밀번호가 틀립니다.');
            return;
        }

        if (auth) {
            console.log('로그인 성공');
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if (user) {
            history.push('/');

            try {
                localStorage.setItem('user', JSON.stringify(user));
            } catch (e) {
                console.log('localStorage가 동작하지 않습니다.');
            }
        }
    }, [user, history]);

    return (
        <Login
            onChange={onChange}
            onSubmit={onSubmit}
            form={form}
            error={error}
        />
    );
};

export default withRouter(LoginContainer);
