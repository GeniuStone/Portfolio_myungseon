import styled from 'styled-components';
import '../../fonts/fonts.css';
import palette from '../../palette';

const ContentTitleBlock = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-bottom: 3rem;
    padding-bottom: 1rem;
    font-family: 'SansMedium';
    font-size: 2rem;
    text-align: center;

    @media (max-width: 767px) {
        font-size: 5vw;
    }

    > hr {
        display: inline-block;
        width: 40%;
        line-height: 100%;
        margin-bottom: 10px;

        @media (min-width: 768px) and (max-width: 1023px) {
            width: 35%;
        }

        @media (max-width: 767px) {
            width: 30%;
        }

        &:first-child {
            margin-right: 20px;
        }

        &:last-child {
            margin-left: 20px;
        }
    }
`;

const ContentTitle = ({ children }) => {
    return (
        <ContentTitleBlock>
            <hr />
            {children}
            <hr />
        </ContentTitleBlock>
    );
};

export default ContentTitle;
