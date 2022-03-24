import styled from 'styled-components';
import MainImage from '../../images/mainver2.jpg';
import '../../fonts/fonts.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useMediaQuery } from 'react-responsive';
import palette from '../../palette';

const FirstContentBlock = styled.div`
    background: url(${MainImage});
    background-size: cover;
    height: 52.5rem;
    overflow: hidden;

    @media (min-width: 768px) and (max-width: 1200px) {
        height: 75vw;
        min-height: 730px;
        background-position: -200px 0px;
    }

    @media (max-width: 767px) {
        height: 140vw;
        background-position: -300px 0px;
    }

    > div.pcContentWrapper {
        width: 1024px;
        display: flex;
        margin: 0 auto;

        @media (min-width: 1024px) and (max-width: 1200px) {
            padding: 0 5rem;
        }
    }

    > div.mobileContentWrapper {
        width: 1024px;
        margin: 0 auto;
        align-items: flex;
    }
`;

const PcFirstContentLeft = styled.div`
    width: 60%;
    text-align: center;
    color: white;
    margin-right: 7vw;
    text-shadow: 2px 2px 1px black;

    > span {
        display: block;
        width: 95%;
        font-size: 1.2rem;
        font-family: 'SerifLight';
        letter-spacing: 0.1rem;
        color: ${palette.white_1};
        text-align: left;
        line-height: 1.5;
        text-indent: 1rem;
        padding-left: 1rem;

        @media (min-width: 1024px) and (max-width: 1200px) {
            font-size: 1.7vw;
        }

        &:first-child {
            margin-top: 18.5rem;
            margin-bottom: 3.5rem;
            font-size: 2rem;
            text-indent: 0;            

            @media (min-width: 1024px) and (max-width: 1200px) {
                font-size: 3vw;
            }
        }

        &:nth-child(2) {
            margin-bottom: 2.5rem;
        }

        > span {            
            font-family: 'SerifSemiBold';
            font-size : 2.5rem;
        }
    }
`;

const PcFirstContentRight = styled.div`
    width: 40%;
    text-align: center;
    color: white;
    display: flex;

    span.smallText {
        font-size: 3.5rem;
        font-family: 'SerifLight';
        text-shadow: 3px 3px 3px black;
        margin-top: 34rem;
        margin-right: 2.5rem;

        @media (min-width: 1024px) and (max-width: 1200px) {
            font-size: 4vw;
            margin-top: 45vw;
        }
    }

    span.bigText {
        font-size: 13rem;
        font-family: 'SerifExtraLight';
        text-shadow: 4px 4px 4px black;
        margin-top: 10rem;

        @media (min-width: 1024px) and (max-width: 1200px) {
            font-size: 16vw;
            margin-top: 10rem;
        }
    }
`;

const FirstContentTop = styled.div`
    > span {
        color: white;
        text-shadow: 2px 1px 5px black;
    }

    span.topText {
        font-size: 12rem;
        font-family: 'SerifLight';
        word-spacing: 10px;
        letter-spacing: 2.5vw;
        text-indent: 2.5vw;
        margin: 0 auto;
        display: block;
        text-align: center;
        position: absolute;
        left: 0;
        top: 14rem;
        width: 100%;

        @media (min-width: 768px) and (max-width: 1023px) {
            top: 13rem;
            font-size: 9rem;
        }

        @media (max-width: 767px) {
            top: 35vw;
            font-size: 28vw;
            letter-spacing: 2rem;
            text-indent: 2rem;
        }
    }

    span.bottomText {
        display: block;
        font-size: 2.5rem;
        font-family: 'Serif';
        text-shadow: 1px 1px 1px black;
        letter-spacing: 1vw;
        text-indent: 1vw;
        text-align: center;
        position: absolute;
        left: 0;
        top: 32rem;
        width: 100%;

        @media (min-width: 768px) and (max-width: 1023px) {
            top: 26rem;
            font-size: 2rem;
        }

        @media (max-width: 767px) {
            top: 74vw;
            font-size: 5vw;
            letter-spacing: 0.8rem;
            text-indent: 0.8rem;
        }
    }
`;

const FirstContentBottom = styled.div`
    width: 60%;
    color: white;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
    line-height: 2;
    font-family: 'Serif';
    text-shadow: 1px 1px 1px black;
    position: absolute;
    left: 0;
    top: 35rem;
    width: 100%;

    @media (min-width: 768px) and (max-width: 1023px) {
        top: 28rem;
    }

    @media (max-width: 767px) {
        top: 80vw;
    }

    > span {
        display: block;
        width: 40%;
        margin: 0 auto;
        font-size: 1.1rem;

        @media (min-width: 768px) and (max-width: 1023px) {
            width: 52%;
        }

        @media (max-width: 767px) {
            width: 60%;
            top: 12rem;
            font-size: 3.3vw;
        }
    }
`;

const FirstContent = () => {
    useEffect(() => {
        AOS.init();
    });

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
        <FirstContentBlock>
            {isPc && (
                <div className="pcContentWrapper">
                    <PcFirstContentLeft>
                        <span
                            className="topText"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            <span>'차(茶)'</span> 를 마신다는 것은
                        </span>
                        <span>
                            ' 명선 '이란 차를 마시며 선정에 드는 것을 말합니다.
                            차를 마시는 것이 곧 자기수양입니다. ' 명선 '이란
                            차를 마시며 선정에 드는 것을 말합니다. 차를 마시는
                            것이 곧 자기수양입니다.
                        </span>
                        <span>
                            차는 지방 분해에 효과적이며 건강한 카페인을
                            제공합니다. 차는 지방 분해에 효과적이며 건강한
                            카페인을 제공합니다.
                        </span>
                    </PcFirstContentLeft>
                    <PcFirstContentRight>
                        <span className="smallText">
                            명<br />선
                        </span>
                        <span className="bigText">
                            茗<br />禪
                        </span>
                    </PcFirstContentRight>
                </div>
            )}
            {(isTablet || isMobile) && (
                <div className="mobileContentWrapper">
                    <FirstContentTop>
                        <span
                            className="topText"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            茗禪
                        </span>
                        <span className="bottomText">명선</span>
                    </FirstContentTop>
                    <FirstContentBottom>
                        <span>
                            ' 명선 '이란 차를 마시며 선정에 드는 것을 말합니다.
                            {(isPc || isTablet) && <br />}
                            차를 마시는 것이 곧 자기수양입니다.
                        </span>
                    </FirstContentBottom>
                </div>
            )}
        </FirstContentBlock>
    );
};

export default FirstContent;
