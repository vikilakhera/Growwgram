import React from "react";
import './index.css';

function FeedCard () {
  return(
    <div className="FC201Container">

      <div className="FC201Header">
        <div className="FC201ProfileImageWrapper">
          <img className="FC201ProfileImage" src="https://cdn.vox-cdn.com/thumbor/DFf_7DYeFj0LoGPEj5DOMf9tolg=/0x0:3926x3123/1820x1213/filters:focal(1649x1248:2277x1876):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70305223/1234657391.0.jpg" />
        </div>
        <div className="FC201ProfileUsername">
          Username
        </div>
      </div>

      <div className="FC201ImageWrapper">
        <img className="FC201CardImage" src="https://cdn.vox-cdn.com/thumbor/DFf_7DYeFj0LoGPEj5DOMf9tolg=/0x0:3926x3123/1820x1213/filters:focal(1649x1248:2277x1876):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70305223/1234657391.0.jpg"  alt='content' />
      </div>

      <div className="FC201Footer">
        <div className="FC201IconsWrapper">
          <div className="FC201IconsWrapperLeft">
            <i className="far fa-heart"></i>
            <svg width={20} xmlns="http://www.w3.org/2000/svg" stroke="currentColor" tabIndex={0} viewBox="0 0 122.97 122.88"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" d="M61.44,0a61.46,61.46,0,0,1,54.91,89l6.44,25.74a5.83,5.83,0,0,1-7.25,7L91.62,115A61.43,61.43,0,1,1,61.44,0ZM96.63,26.25a49.78,49.78,0,1,0-9,77.52A5.83,5.83,0,0,1,92.4,103L109,107.77l-4.5-18a5.86,5.86,0,0,1,.51-4.34,49.06,49.06,0,0,0,4.62-11.58,50,50,0,0,0-13-47.62Z"></path></svg>
            <svg width={20} xmlns="http://www.w3.org/2000/svg" fill="border" stroke="currentColor" tabIndex={0} viewBox="0 0 122.88 108.3"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M96.14,12.47l-76.71-1.1,28.3,27.85L96.14,12.47ZM53.27,49l9.88,39.17L102.1,22,53.27,49ZM117,1.6a5.59,5.59,0,0,1,4.9,8.75L66.06,105.21a5.6,5.6,0,0,1-10.44-1.15L41.74,49,1.67,9.57A5.59,5.59,0,0,1,5.65,0L117,1.6Z"></path></svg>
          </div>
          <div className="FC201IconsWrapperRight">
            <i className="far fa-bookmark"></i>
          </div>
        </div>
        <div className="FC201LikesWrapper">
          1009 likes
        </div>
        <div className="FC201CaptionWrapper">
          <div className="FC201ProfileUsername">
            Username
          </div>
          <div className="Fc201Caption">
            This is reserve for captions.
          </div>
        </div>
      </div>

    </div>
  )
}

export default FeedCard;