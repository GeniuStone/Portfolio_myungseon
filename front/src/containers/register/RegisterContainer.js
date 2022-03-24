import Register from "../../components/register/Register";
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import { useEffect } from 'react';
import { check } from '../../modules/user';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';

const RegisterContainer = ({history}) => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));

    const onChange = (e) => {
        const { value, name } = e.target;

        dispatch(
            changeField({
                form: 'register',
                key: name,
                value,
            }),
        );
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const { username, password, passwordConfirm, name, callnumber, email } =
            form;

        if (
            [
                username,
                password,
                passwordConfirm,
                name,
                callnumber,
                email,
            ].includes('')
        ) {
            alert('빈 칸을 모두 입력해주세요.');
        }

        if (password !== passwordConfirm) {
            setError('비밀번호가 일치하지 않습니다.');
            dispatch(
                changeField({ form: 'register', key: 'password', value: '' }),
            );
            dispatch(
                changeField({
                    form: 'register',
                    key: 'passwordConfirm',
                    value: '',
                }),
            );
            return;
        }

        dispatch(register({ username, password, name, callnumber, email }));
    };

    useEffect(() => {
        dispatch(initializeForm('register'));

        if (authError) {
            if (authError.response.status === 409) {
                setError('이미 존재하는 아이디입니다.');
                return;
              }
              // 기타 이유
              alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
              return;
        }

        if (auth) {
            console.log('회원가입 성공');
            console.log(auth);
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
    }, [history, user]);

    return <Register onChange={onChange} onSubmit={onSubmit} form={form} error={error}/>
};

export default withRouter(RegisterContainer);