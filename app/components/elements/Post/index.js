import React from 'react';
import PropTypes from 'prop-types';

import { DateSpan, PostContainer, ImgPost, ReadMoreSpan,LargeImgPost} from './styles';
import { log } from 'util';

const text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const limit=200

const renderText=(content, image, id)=>{
    if(content.length<=limit) return(<p><ImgPost id={"img"+id} src={"data:image/png;base64," + image} alt="no image found" />{content}</p>);
    return(<p><ImgPost id={"img"+id} src={"data:image/png;base64," + image} alt="no image found" />{content.substring(0,limit)}<span id={"dots"+id}>...</span><ReadMoreSpan id={"more"+id}>{content.substring(limit+1, content.length)}</ReadMoreSpan></p>); 
}

const renderReadMoreButton=(content,id)=>{
    if(text.length<=limit)  return null; 
    return(<button type="button" id={"btnRead"+id} onClick={() => {onReadMore(id)}}>Read more</button>); 
}

const onReadMore=(id)=>{
    console.log("in on read",id);
    var dots = document.getElementById("dots"+id);
    var moreText = document.getElementById("more"+id);
    var btnText = document.getElementById("btnRead"+id);
    var img = document.getElementById("img"+id);
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

const Post = ({ post}) => {
    const {id,title, text, image, date, last}=post;
    console.log("in component ",id);
return(
<PostContainer>
    <br/> 
    <DateSpan>{date}</DateSpan>
    <h4>{title}</h4><br/>
    <hr/>
    {renderText(text, image, id)}  
    {renderReadMoreButton(text,id)}   
 </PostContainer>
)};

export default Post;
