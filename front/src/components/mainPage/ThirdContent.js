import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../palette';
import Button from '../common/Button';
import TraditionalTea from '../../images/traditionalTea.jpg';
import RedTea from '../../images/redTea.jpg';
import TraditionalManner from '../../images/traditionalManner.jpg';
import { useMediaQuery } from 'react-responsive';
import ContentTitle from '../common/ContentTitle';
import '../../fonts/fonts.css';

// 배경용 컴포넌트
const ThirdContentWrapper = styled.div`
    margin-top: 100px;
    width: 100%;
    background-color: ${palette.white_1};
    padding: 7rem 0;

    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 4rem 0 7rem;
    }

    @media (max-width: 767px) {
        margin-top: 40vw;
        padding: 15vw 0 20vw;
    }
`;

const ThirdContentBlock = styled(Responsive)`
    @media (min-width: 768px) {
        display: flex;
    }
`;

const EducationCurriculumTitle = styled.div`
    width: 25%;
    background-color: ${palette.indigo_1};
    border-right: 1px solid ${palette.white_1};

    > span:first-child {
        color: ${palette.gray_1};
        font-size: 1rem;
        display: block;
        width: 100%;
        text-align: center;
        font-family: 'SansRegular';
        margin-top: 9rem;
    }

    > span:last-child {
        color: white;
        font-size: 2.2rem;
        display: block;
        font-weight: bold;
        width: 100%;
        text-align: center;
        font-family: 'SansRegular';
    }
`;

const EducationCurriculum = styled.div`
    width: 25%;
    height: 25rem;
    padding: 3rem 1rem;
    border-right: 1px solid ${palette.white_1};
    box-shadow: 5px 5px 9px -6px ${palette.gray_2};
    cursor: pointer;
    
    @media (min-width: 768px) and (max-width: 1023px) {
        width: 33.33%;
    }

    @media (max-width: 767px) {
        width: 100%;
        padding: 3rem 3rem;
        border-right: none;
        border-bottom: 1px solid ${palette.white_1};
    }

    &.traditionalTea {
        background: url(${TraditionalTea});
        background-size: cover;

        @media (min-width: 768px) and (max-width: 1023px) {
            background-position: -50px 0px;
        }
    }

    &.redTea {
        background: url(${RedTea});
        background-size: cover;

        @media (min-width: 768px) and (max-width: 1023px) {
            background-position: -50px 0px;
        }
    }

    &.traditionalManner {
        background: url(${TraditionalManner});
        background-size: cover;
        border: none;

        @media (min-width: 768px) and (max-width: 1023px) {
            background-position: -50px 0px;
        }

    }

    > span {
        border-bottom: 1px solid ${palette.white_1};
        color: white;
        font-size: 1.3rem;
        font-weight: bold;
        display: inline-block;
        width: 80%;
        padding-bottom: 0.5rem;
        font-family: 'SansRegular';

        @media (min-width: 768px) and (max-width: 1200px) {
            font-size: 1rem;
        }

        @media (max-width: 767px) {
            font-size: 5vw;
        }
    }

    > p {
        color: white;
        font-size: 2rem;
        margin-top: 1rem;
        margin-bottom: 8rem;
        font-family: 'SerifMedium';

        @media (min-width: 768px) and (max-width: 1200px) {
            font-size: 3vw;
        }

        @media (max-width: 767px) {
            font-size: 7vw;
        }
    }
`;

const ThirdContent = () => {
    const isPc = useMediaQuery({
        query: '(min-width:1024px)',
    });
    const isTablet = useMediaQuery({
        query: '(min-width:768px) and (max-width:1023px)',
    });
    const isMobile = useMediaQuery({
        query: '(max-width:767px)',
    });

    return (
        <ThirdContentWrapper>
            {(isTablet || isMobile) && <ContentTitle>교육 과정</ContentTitle>}
            <ThirdContentBlock>
                {isPc && (
                    <EducationCurriculumTitle>
                        <span>Curriculum</span>
                        <span>교 육 과 정</span>
                    </EducationCurriculumTitle>
                )}
                <EducationCurriculum className="traditionalTea">
                    <span>8주 과정</span>
                    <p>전통차 수업</p>
                    <Button>자세히</Button>
                </EducationCurriculum>
                <EducationCurriculum className="redTea">
                    <span>10주 과정</span>
                    <p>홍차 클래스</p>
                    <Button>자세히</Button>
                </EducationCurriculum>
                <EducationCurriculum className="traditionalManner">
                    <span>10주 과정</span>
                    <p>전통 예절</p>
                    <Button>자세히</Button>
                </EducationCurriculum>
            </ThirdContentBlock>
        </ThirdContentWrapper>
    );
};

export default ThirdContent;
