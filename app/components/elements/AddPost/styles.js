import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import { JAPANESE_INDIGO, AERO_BLUE } from 'constants/colors';
import Dropzone from 'react-dropzone';

export const StyledTextarea = styled(TextareaAutosize)`
resize: none;
width: 100%;
padding:20px;
margin-bottom:20px;
`;

export const DateSpan = styled.span`
    float:left;
    font-size:15px;
    line-height:23px;
    opacity:0.6;
    text-size-adjust:100%;
    color: ${JAPANESE_INDIGO};
    padding:3%;
`;

export const PostContainer = styled.div`
    border-bottom-right-radius:4px;
    border-bottom-left-radius:4px;
    border-top-right-radius:4px;
    border-top-right-radius:4px;
    box-shadow: -19px 15px 40px -12px rgba(0,0,0,0.39);
    box-sizing:border-box;
    color:rgb(0,0,0);
    display:block;
    font-size:15px;
    line-height:23px;
    margin-bottom:16px;
    margin-left:16px;
    margin-right:16px;
    margin-top:16px;
    text-size-adjust:100%;
    padding-left:16px;
    padding-right:16px;
    padding-top:0.15px;
    background-color:${AERO_BLUE};
    width:60%;
    padding:3%;
`;
