import React from 'react';
import PropTypes from 'prop-types';
import InternshipImg1 from './internship1.png';
import InternshipImg2 from './internship2.jpg';

import { DateSpan, PostContainer, ImgPost, ReadMoreSpan,LargeImgPost} from './styles';

const text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const limit=200

const renderText=(content)=>{
    if(content.length<=limit) return(<p><ImgPost id="img" src={InternshipImg1} alt="no image found" />{content}</p>);
    return(<p><ImgPost id="img" src={InternshipImg1} alt="no image found" />{content.substring(0,limit)}<span id="dots">...</span><ReadMoreSpan id="more">{content.substring(limit+1, content.length)}</ReadMoreSpan></p>); 
}

const renderReadMoreButton=(content)=>{
    if(text.length<=limit)  return null; 
    return(<button type="button" id="myBtn" onClick={() => {onReadMore()}}>Read more</button>); 
}

const onReadMore=()=>{
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
        img.style.width="30%";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
        img.style.width="100%";
    }
}

const Post = () => {
return(
<PostContainer>
    <br/> 
    <DateSpan>30 ianuarie 2018</DateSpan>
    <h4>Acesta e titlul postarii</h4><br/>
    <hr/>
    {renderText(text)}  
    {renderReadMoreButton(text)}   
 </PostContainer>
)};

export default Post;
