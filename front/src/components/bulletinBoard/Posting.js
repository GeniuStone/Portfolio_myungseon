import styled from 'styled-components';
import palette from '../../palette';
import Responsive from '../../components/common/Responsive';
import '../../fonts/fonts.css';
import { useHistory } from 'react-router-dom';
import Quill from 'quill';
import { useRef, useEffect } from 'react';
import 'quill/dist/quill.snow.css';

const PostingBlock = styled(Responsive)`
    padding: 6rem 4rem 25rem;    

    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 5rem 4rem 24rem;    
    }

    @media (max-width: 767px) {
        padding: 3rem 1rem 21rem;    
    }

    > div > h2 {
        border-left: 5px solid ${palette.indigo_3};
        padding-left: 0.8rem;
        font-size: 2rem;
        margin-bottom: 2rem;

        @media (min-width: 768px) and (max-width: 1023px) {
            font-size: 4vw;
        }

        @media (max-width: 767px) {
            font-size: 6vw;
        }
    }
`;

const InputContainer = styled.div`
    > input {
        display: block;
        width: 100%;
        font-size: 1.2rem;
        padding: 0.8rem 1rem;
        border: 1px solid lightgray;
        margin-bottom: 0.5rem;
    }

    > .editor {
        height: 440px;
        font-size: 1.1rem;
        border: 1px solid lightgray;        
    }
`;

const ButtonContainer = styled.div`
    margin-top: 3rem;
    text-align: center;

    > div.backBtn {        
        border-radius: 3px;
        display: inline-block;
        font-family: 'SansMedium';
        font-size: 1.1rem;        
        cursor: pointer;
        margin-right: 0.8rem;
        background-color: ${palette.gray_1};
        color: ${palette.gray_4};
        padding: 0.5rem 1.7rem;
    }

    > .publishBtn {
        padding: 0.5rem 1.7rem;
        background-color: ${palette.indigo_3};
        color: white;        
        border-radius: 3px;
        display: inline-block;
        font-family: 'SansMedium';
        font-size: 1.1rem;        
        cursor: pointer;
        margin-right: 0.8rem;
    }
`;

const Posting = ({ title, body, onChangeField, onPublish, isEdit }) => {
    const history = useHistory();

    // quill이 들어갈 태그
    const quillElement = useRef(null);
    // quill의 인스턴스
    const quillInstance = useRef(null);

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'snow',
            placeholder: '내용을 작성해주세요.',
            modules: {
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [
                        { list: 'ordered' },
                        { list: 'bullet' },
                        { indent: '-1' },
                        { indent: '+1' },
                    ],
                    ['link', 'image'],
                    [{ align: [] }, { color: [] }, { background: [] }],
                    ['clean'],
                ],
            },
        });

        const quill = quillInstance.current;
        quill.on('text-change', (delta, oldDelta, source) => {
            if (source === 'user') {
                onChangeField({ key: 'body', value: quill.root.innerHTML });
            }
        });
    }, [onChangeField]);

    const mounted = useRef(false);
    useEffect(() => {
        if (mounted.current) return;
        mounted.current = true;
        quillInstance.current.root.innerHTML = body;
    }, [body]);

    const onChangeTitle = (e) => {
        onChangeField({ key: 'title', value: e.target.value });
    };

    return (
        <PostingBlock>
            <div>
                <h2>게시글 작성</h2>
                <div>
                    <InputContainer>
                        <input placeholder="제목" onChange={onChangeTitle} value={title}/>
                        <div ref={quillElement} className="editor"></div>
                    </InputContainer>
                    <ButtonContainer>
                        <div
                            onClick={() => {
                                history.goBack();
                            }}
                            className="backBtn"
                        >
                            취소
                        </div>                        
                        <div onClick={onPublish} className="publishBtn">{isEdit ? '수정' : '등록'}</div>
                    </ButtonContainer>
                </div>
            </div>
        </PostingBlock>
    );
};

export default Posting;
