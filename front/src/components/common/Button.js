import styled from 'styled-components';
import palette from '../../palette';
import '../../fonts/fonts.css';

const ButtonBlock = styled.div`
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
`;

const Button = ({ children, props }) => {
    return <ButtonBlock {...props}>{children}</ButtonBlock>;
};

export default Button;
