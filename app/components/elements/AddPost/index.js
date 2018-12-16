import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-autosize-textarea'
import {PostContainer, StyledTextarea, DateSpan} from './styles';
import Dropzone from 'react-dropzone';
import Button from '../Button'

export class AddPost extends React.Component {
    constructor(props) {
      super(props);
      this.state =
      {
          image:[],
          text:'',
          isLast:false,
          title:''
      }
    }
 

    onImageDrop=(image)=>{
        console.log(image[0]);
        var message = document.getElementById("textAreaMessage");
        var file=image[0];

        var reader = new FileReader();
        var fileByteArray = [];
        reader.readAsArrayBuffer(file);
        reader.onloadend = function (evt) {
            if (evt.target.readyState == FileReader.DONE) {
            var arrayBuffer = evt.target.result,
                array = new Uint8Array(arrayBuffer);
            for (var i = 0; i < array.length; i++) {
                fileByteArray.push(array[i]);
                }
            }
        }
        message.innerHTML="The image "+file.name+" was loaded successfully";
        this.setState({image:fileByteArray});

        // const reader = new FileReader();
        // reader.onload = () => {
        //     message.innerHTML="The image "+file.name+" was loaded successfully";
        //     //reader.readAsArrayBuffer(file);
        //     var arrayBuffer = this.result
        //     //array = new Uint8Array(arrayBuffer)
        //     console.log(arrayBuffer)
        //    // const fileAsBinaryArray = reader.result;
        //     //console.log(fileAsBinaryArray)
        //     this.setState({image:arrayBuffer});
        //     // do whatever you want with the file content
        // };
        // reader.onabort = () => console.log('file reading was aborted');
        // reader.onerror = () => console.log('file reading has failed');    
        // reader.readAsArrayBuffer(file);
    }
  
    onChangeText=(text)=>
    {
        console.log(text.target.value);
        this.setState({text:text.target.value});
    }
    onChangeTitle=(title)=>
    {
        this.setState({title:title.target.value});
    }

    onSavePost=()=>
    {
        console.log("click");
        const date=new Date().toLocaleString();
        const post=
        {
            title:this.state.title,
            text:this.state.text,
            last:this.state.isLast,
            image:this.state.image,
            date:date
        }
        this.props.saveFunction(post);

        this.refreshState();
    }

    refreshState=()=>
    {
        this.setState({
            title:'',
            text:'',
            isLast:false,
            image:null,        
        })
    }

    handleCheck=(check)=>
    {
        this.setState({isLast:check.target.checked});
    }
    render() {
      return (
        <PostContainer>
        <StyledTextarea
        placeholder='Post title here...'
        onChange={this.onChangeTitle}
        value={this.state.title}/>

        <StyledTextarea
        placeholder='Write your post here...'
        onChange={this.onChangeText}
        value={this.state.text}/>

        <Dropzone
            multiple={false}
            accept="image/*"
            style={{width:"100%",
            height: 100,
            borderWidth: 2,
            borderColor: 'gray',
            borderStyle: 'dashed',
            marginBottom:20,
            borderRadius: 5}}
            onDrop={this.onImageDrop}
            value={this.image}>
            <DateSpan id="textAreaMessage">Drop an image or click to select a file to upload.</DateSpan>
        </Dropzone>
        <input type="checkbox" id="checkbox" onChange={this.handleCheck} defaultChecked={this.state.isLast}/>
        <label for="checkbox"> Last post </label>
        <Button text="Save post" onClick={this.onSavePost}/>
        </PostContainer>
      );
    }
  }





export default AddPost;
