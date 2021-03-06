import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../palette';
import '../../fonts/fonts.css';
import { useMediaQuery } from 'react-responsive';

const LastContentBlock = styled.div`
    margin-top: 240px;
    position: relative;
`;

const LastContentTop = styled.div`
    background-color: ${palette.gray_4};
    padding: 1.5rem 0;

    @media (max-width: 767px) {
        padding: 1.5rem 0 0 0;
    }

    > div > div {
        margin-bottom: 0.5rem;

        span.address {
            font-family: 'SansMedium';
            color: gray;
            font-size: 0.9rem;
        }
    }

    > div > p {
        font-family: 'SansRegular';
        color: gray;
        font-size: 0.9rem;
    }

    > div > span {
        font-family: 'SansRegular';
        color: gray;
        font-size: 0.9rem;
    }
`;

const LastContentBox = styled.div`
    background-color: ${palette.indigo_1};
    width: 340px;
    position: absolute;
    top: -144px;
    left: 65%;
    padding: 1.5rem 2rem 1.5rem;
    overflow: hidden;

    h4 {
        border-bottom: 3px solid white;
        width: 5.5rem;
        font-size: 1.3rem;
        color: white;
        padding-bottom: 0.3rem;
        font-family: 'SansRegular';
    }

    > span.callNumber {
        font-size: 2rem;
        font-weight: bold;
        color: white;
        display: block;
        margin-top: 0.8rem;
        margin-bottom: 0.5rem;
    }

    > span.callDesc {
        font-size: 1rem;
        display: block;
        margin-bottom: 1.5rem;
        font-family: 'SansRegular';
        color: ${palette.gray_1};
    }
`;

const LastContentBottom = styled.div`
    background-color: black;
    padding: 1.2rem 0;
    text-align: center;

    @media (max-width: 767px) {
        background-color: ${palette.gray_4};
        padding: 1.2rem 0;
    }

    > div > span {
        color: white;
        font-family: 'SansMedium';
        color: ${palette.gray_2};
        font-size: 0.9rem;

        @media (max-width: 767px) {
        color: gray;
    }
    }
`;

const MobileCallBox = styled.div`
    background-color: ${palette.indigo_1};
    padding: 1rem 2rem;

    > p.mobileCallNumber {
        justify-content: space-around;
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;

        > span {
            font-size: 3.5vw;
            color: white;
            font-family: 'SansMedium';
            padding-right: 1rem;
            margin-right: 1rem;

            &:first-child {
                display: inline-block;
                border-right: 3px solid white;
            }
        }

        > button {            
            font-size: 3vw;
        }
    }

    > p.mobileCallDesc {
        text-align: left;
        margin-left: 0.4rem;
        color: ${palette.gray_1};
        font-family: 'SansRegular';
        font-size: 2.5vw;
    }
`;

const LastContent = () => {
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
        <LastContentBlock>
            {isMobile && (
                <MobileCallBox>
                    <p className="mobileCallNumber">
                        <span>????????????</span>
                        <span>000 - 000 - 0000</span>
                        <Button>????????????</Button>
                    </p>
                    <p className="mobileCallDesc">
                        ?????? 9:00 ~ 18:00 / ???????????? 12:30 ~ 13:30 ( ???,??? ???
                        ????????????????????? )
                    </p>
                </MobileCallBox>
            )}
            <LastContentTop>
                <Responsive>
                    <div>
                        <span className="address">
                            ?????? : (00000) ???????????? ????????? ??????????????? ????????????
                            14?????? 125-1
                        </span>
                    </div>
                    <p>????????? ?????? ?????? : 00-0000-00000 / ?????? : ?????????</p>
                    <span>Tel : 000 - 000 - 0000 / Fax : 000 - 000 - 0000</span>
                </Responsive>
            </LastContentTop>
            {(isPc || isTablet) && (
                <LastContentBox>
                    <h4>????????????</h4>
                    <span className="callNumber">000-000-0000</span>
                    <span className="callDesc">
                        ?????? 9:00 ~ 18:00 / ???????????? 12:30 ~ 13:30 ( ???,??? ???
                        ????????????????????? )
                    </span>
                    <Button>????????????</Button>
                </LastContentBox>
            )}

            <LastContentBottom>
                <Responsive>
                    <span>Copyright all right reserved ??????????????????</span>
                </Responsive>
            </LastContentBottom>
        </LastContentBlock>
    );
};

export default LastContent;
