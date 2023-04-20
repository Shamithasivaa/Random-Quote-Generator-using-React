import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import {WhatsappShareButton} from 'react-share';
import {FacebookShareButton} from 'react-share';
import {TwitterShareButton} from 'react-share';
import {LinkedinShareButton} from 'react-share';
import {PinterestShareButton} from 'react-share';

const QuoteGenerator = ({ quote }) => {
  // Function to handle sharing on Twitter
  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(twitterUrl, '_blank');
  };

  // Function to handle sharing on Facebook
  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(facebookUrl, '_blank');
  };

  // Function to handle sharing on Instagram
  const shareOnInstagram = () => {
    const instagramUrl = `https://www.instagram.com/share?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(quote)}`;
    window.open(instagramUrl, '_blank');
  };

  // Function to handle sharing on WhatsApp
  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(quote + ' - ' + window.location.href)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      
      <button onClick={shareOnTwitter}>
        <TwitterIcon />
      </button>
      <button onClick={shareOnFacebook}>
        <FacebookIcon />
      </button>
      
      <button onClick={shareOnWhatsApp}>
        <WhatsAppIcon />
      </button>
    </div>
  );
};

export default QuoteGenerator;