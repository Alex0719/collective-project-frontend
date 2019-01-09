import React from "react";
import Dashboard from "../../../containers/pages/Dashboard";
import Carousel from "nuka-carousel";
import styled from 'styled-components';
import { JAPANESE_INDIGO, AERO_BLUE } from 'constants/colors';
import "./index.css";

class Testimonials extends React.Component {

  render(){
    const {testimonials } = this.props;

    var settings = {
        slideIndex: 0,
        length: 6,
        wrapAround: true,
        underlineHeader: true,
        slidesToShow: 1,
        cellAlign: "left",
        transitionMode: "fade",
        heightMode: "max",
        withoutControls: true,
        autoplay:true,
        autoplayInterval: 3000,
        speed: 1000
      };


    return (
        testimonials == null ? null:
        <div style={{ width: "100%", height:"400px", padding:15, marginLeft:10 }}>

        <Carousel
            withoutControls={settings.withoutControls}
            transitionMode={settings.transitionMode}
            cellAlign={settings.cellAlign}
            slidesToShow={settings.slidesToShow}
            wrapAround={settings.wrapAround}
            slideIndex={settings.slideIndex}
            heightMode={settings.heightMode}
            autoplay={settings.autoplay}
            autoplayInterval={settings.autoplayInterval}
            transitionMode={settings.transitionMode}
            speed={settings.speed}
        >

            {testimonials.map((testimonial,i)=>this.renderTestimonials(testimonial,i))}
        </Carousel>
        </div>
  );
  }

renderTestimonials(testimonial,i)
{
    return(
        <div key={i} style={{margin:"auto"}}>
        {/* <TitleWrapper>
            {testimonial.firstname} {testimonial.lastname}
        </TitleWrapper> */}
            <p style={{height:"100%"}} className="legend">
                {testimonial.testimonial}
            </p>
            <Footer>{testimonial.firstname} {testimonial.lastname} {testimonial.date}</Footer>
        </div>
    );
}
}

export default Testimonials;

export const TitleWrapper = styled.div`
  text-align: center;
  font-size: 20px;
  color: ${JAPANESE_INDIGO};
`;

export const Footer = styled.div`
  text-align: right;
  font-size: 13px;
  margin-right: 8px;
  color: ${JAPANESE_INDIGO};
`;
