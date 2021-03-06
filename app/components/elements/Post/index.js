import React from 'react';
import PropTypes from 'prop-types';

import { DateSpan, PostContainer, ImgPost, ReadMoreSpan,LargeImgPost} from './styles';
import { log } from 'util';

const text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const limit=200

const renderText=(content, image, id)=>{
    if(content.length<=limit)
    {
        return(<p>{image!=null?<ImgPost id={"img"+id} src={"data:image/png;base64," + image} alt="no image found" />:null} {content}</p>);
    }
    return(<p>{image!=null?<ImgPost id={"img"+id} src={"data:image/png;base64," + image} alt="no image found" />:null}{content.substring(0,limit)}<span id={"dots"+id}>...</span><ReadMoreSpan id={"more"+id}>{content.substring(limit+1, content.length)}</ReadMoreSpan></p>);
}

const renderReadMoreButton=(content,id)=>{
    if(content.length<=limit)
    {
        return (null);
    }
    return(<button type="button" id={"btnRead"+id} onClick={() => {onReadMore(id)}}>Read more</button>);
}

const onReadMore=(id)=>{
    var dots = document.getElementById("dots"+id);
    var moreText = document.getElementById("more"+id);
    var btnText = document.getElementById("btnRead"+id);
    var img = document.getElementById("img"+id);
    if (dots!=null && dots.style.display === "none") {
        dots.style.display = "inline";

        if(btnText!=null)
        {
            btnText.innerHTML = "Read more";
        }
        if(moreText!=null)
        {
            moreText.style.display = "none";
        }
        if(img!=null && img!=undefined)
        {
            img.style.width="30%";
        }
    } else {
        if(dots!=null)
        {
            dots.style.display = "none";
        }
        if(btnText!=null)
        {
            btnText.innerHTML = "Read less";
        }
        if(moreText!=null)
        {
            moreText.style.display = "inline";
        }
        if(img!=null && img!=undefined)
        {
            img.style.width="100%";
        }
    }
}

const Post = ({ post}) => {
  const {id,title, text, image, date, last}=post;
  return(
    <PostContainer>
        <br/>
        <DateSpan>{date}</DateSpan>
        <h4>{title}</h4><br/>
        <hr/>
        {renderText(text, image, id)}
        {renderReadMoreButton(text,id)}
     </PostContainer>
   );
};

export default Post;
