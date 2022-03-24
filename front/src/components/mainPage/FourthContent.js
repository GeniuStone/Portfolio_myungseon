import styled from 'styled-components';
import Responsive from '../common/Responsive';
import ContentTitle from '../common/ContentTitle';
import palette from '../../palette';
import '../../fonts/fonts.css';

const FourthContentBlock = styled.div`
    margin-top: 100px;
    padding-bottom: 450px;

    @media (max-width: 767px) {
        margin-top: 15vw;
    }

    > div > p {
        text-align: center;
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
        font-family: 'SansRegular';
        color: ${palette.gray_3};

        @media (min-width: 768px) and (max-width: 1023px) {
            font-size: 2.5vw;
        }

        @media (max-width: 767px) {
            font-size: 3.5vw;
        }
    }

    .map {
        border: none;
        width: 100%;
        height: 30rem;
        box-shadow: 5px 5px 9px -6px ${palette.gray_2};

        @media (max-width: 767px) {
            height: 60vw;
        }
    }
`;

const FourthContent = () => {
    return (
        <FourthContentBlock>
            <Responsive>
                <ContentTitle>오시는 길</ContentTitle>
                <p>경상남도 창원시 마산회원구 무학산로 14번길 125-1</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13039.261442244964!2d128.5270197405507!3d35.21106783490397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f2e485b3201bd%3A0x19a94fe7af7807b3!2z66y07ZWZ7IKw!5e0!3m2!1sko!2skr!4v1644419536046!5m2!1sko!2skr"
                    loading="lazy"
                    title="MyungseonLocation"
                    className="map"
                ></iframe>
            </Responsive>
        </FourthContentBlock>
    );
};

export default FourthContent;
