import React from 'react';
import PropTypes from 'prop-types';
import {PostContainer, StyledTextarea} from 'components/elements/AddPost/styles';
import Button from '../Button';

export default class AddTestimonial extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      testimonial: '',
    };
  }

  onChangeTestimonial(event) {
    this.setState({testimonial: event.target.value})
  }

  saveTestimonial() {
    this.props.addTestimonial(this.state);
    this.setState({
      testimonial: '',
    });
  }

  render() {
    return (
      <PostContainer>
        <StyledTextarea
          placeholder='Scrie testimonial aici...'
          onChange={event => this.onChangeTestimonial(event)}
          value={this.state.testimonial}
        />
        <Button text="Trimite testimonial" onClick={() => this.saveTestimonial()}/>
      </PostContainer>
    );
  }
}
