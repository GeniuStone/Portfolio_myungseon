import styled from 'styled-components';

// 반응형 공통 컴포넌트
const ResponsiveBlock = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    width: 1200px;
    margin: 0 auto;

    @media (max-width: 1200px) {
        width: 100%;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

// 자식 컴포넌트가 있을 예정
// Responsive가 받는 모든 props를 받아올 수 있도록 ...rest를 설정
const Responsive = ({ children, ...rest }) => {
    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
