import styled from 'styled-components';
import '../../fonts/fonts.css';
import { useMediaQuery } from 'react-responsive';
import Responsive from '../common/Responsive';
import OwnerImage from '../../images/person_1.jpeg';
import palette from '../../palette';
import ContentTitle from '../common/ContentTitle';

const SecondContentBlock = styled.div`
    margin-top: 100px;
    width: 100%;
    background-color: white;

    @media (max-width: 767px) {
        margin-top: 15vw;
    }

    > div > .mobileDesc {
        font-family: 'SerifMedium';        
        text-align: justify;
        width: 80%;
        margin-bottom: 2.5rem;
        font-size: 3vw;
    }

    > div > div:last-child {
        display: flex;
        position: relative;
    }
`;

const MobileDescTitle = styled.h3`
    border-left: 6px solid ${palette.indigo_2};
    font-family: 'SansRegular';
    font-size: 1.7rem;
    white-space: nowrap;    
    margin-bottom: 1.5rem;
    padding-left: 1rem;

    > span {
        color: ${palette.indigo_3};
    }
`;

const SecondContentImage = styled.div`
    flex-grow: 1;

    > img {
        width: 45rem;
        height: 34rem;

        @media (max-width: 767px) {
            width: 70vw;
            height: 59vw;
        }
    }
`;

const SecondContentDesc = styled.div`
    background-color: ${palette.white_1};
    padding: 2rem 3rem;
    position: absolute;
    top: 20%;
    left: 52%;
    width: 48%;
    box-shadow: 5px 5px 9px -8px ${palette.gray_2};

    @media (max-width: 1200px) {
        width: 45vw;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        top: 30%;
        padding: 1rem 1.5rem;
    }

    @media (max-width: 767px) {
        top: 45%;
        left: 50%;
        padding: 1.5rem 1.5rem;
        
    }

    > p {
        color: ${palette.gray_3};
        font-family: 'SerifMedium';
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        text-indent: 0.5rem;
        text-align: justify;

        @media (min-width: 768px) and (max-width: 1023px) {
            font-size: 2vw;            
        }

        @media (max-width: 767px) {
            font-size: 2.6vw;
        }
    }

    > ul > li {
        color: black;
        margin-bottom: 0.5rem;
        font-family: 'SansRegular';

        &:first-child {
            font-weight: bold;
            border-left: 4px solid ${palette.indigo_2};
            padding-left: 0.5rem;
        }

        &:nth-child(5) {
            font-weight: bold;
            border-left: 4px solid ${palette.indigo_2};
            padding-left: 0.5rem;
        }

        &:last-child {
            margin-bottom: 0;
        }

        > span {
            display: block;
            text-indent: 1rem;

            @media (max-width: 767px) {
                font-size: 2.5vw;
            }
        }
    }
`;

const SecondContentDescTitle = styled.div`
    width: 100%;
    flex-grow: 1;
    padding: 0 2rem;

    > h2 {
        font-size: 1.3rem;
        width: 9rem;
        font-family: 'SansRegular';
        white-space: nowrap;
    }

    > h3 {
        font-size: 2rem;
        margin-top: 0.2rem;
        font-family: 'SansRegular';
        white-space: nowrap;

        > span {
            color: ${palette.indigo_3};
        }
    }
`;

const SecondContent = () => {
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
        <SecondContentBlock>
            <Responsive>
                <ContentTitle>원장 소개</ContentTitle>
                {(isMobile || isTablet) && (
                    <MobileDescTitle>
                        원장<span> 조정민</span>
                    </MobileDescTitle>
                )}
                {isMobile && (
                    <p className='mobileDesc'>
                        " 안녕하세요. 명선화다례원 원장 조정민입니다.
                        명선화다례원에서는 대한민국 최고의 예절 지도사이며 티
                        마스터가 다도 교육을 가르치고 있습니다. "
                    </p>
                )}
                <div>
                    <SecondContentImage>
                        <img src={OwnerImage} alt="원장사진" />
                    </SecondContentImage>
                    <SecondContentDesc>
                        {(isPc || isTablet) && (
                            <p>
                                안녕하세요. 명선화다례원 원장 조정민입니다.
                                명선화다례원에서는 대한민국 최고의 예절
                                지도사이며 티 마스터가 다도 교육을 가르치고
                                있습니다.
                            </p>
                        )}

                        <ul>
                            <li>이력사항</li>
                            <li>
                                <span> - 티마스터 1급</span>
                            </li>
                            <li>
                                <span> - 티마스터 1급</span>
                            </li>
                            <li>
                                <span> - 티마스터 1급</span>
                            </li>
                            <li>자격사항</li>
                            <li>
                                <span> - 티마스터 1급</span>
                            </li>
                            <li>
                                <span> - 티마스터 1급</span>
                            </li>
                            <li>
                                <span> - 티마스터 1급</span>
                            </li>
                        </ul>
                    </SecondContentDesc>
                    {isPc && (
                        <SecondContentDescTitle>
                            <h2>명선화 다례원</h2>
                            <h3>
                                원장<span> 조정민</span>
                            </h3>
                        </SecondContentDescTitle>
                    )}
                </div>
            </Responsive>
        </SecondContentBlock>
    );
};

export default SecondContent;
