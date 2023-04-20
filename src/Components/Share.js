import React, { useState, useEffect , useRef} from 'react';

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
function Share() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  }, []);

  const handleShareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + ' - ' + author)}`;
    window.open(url, '_blank');
  }

  const handleShareOnWhatsApp = () => {
    const shareUrl = `${quote} - ${author}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(shareUrl)}`);
  }

  const handleShareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(quote + ' - ' + author)}`;
    window.open(url, '_blank');
  }

  const handleShareOnPinterest = () => {
    const shareUrl = `https://example.com/quote`; // Replace with your actual URL
    const mediaUrl = `https://example.com/quote-image.jpg`; // Replace with your actual image URL
    window.open(`https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(mediaUrl)}&description=${encodeURIComponent(quote + ' - ' + author)}`);
  }

  const handleShareOnLinkedIn = () => {
    const shareUrl = `https://example.com/quote`; // Replace with your actual URL
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(quote)}&summary=${encodeURIComponent(author)}`);
  }

  const handleCopyToClipboard = () => {
    const quoteElement = quoteRef.current;
    const range = document.createRange();
    range.selectNode(quoteElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  };

  return (
    <div id='icon'>
      <button onClick={handleShareOnTwitter}>
        <TwitterIcon />
      </button>
      <button onClick={handleShareOnFacebook}>
        <FacebookIcon />
      </button>
      <button onClick={handleShareOnWhatsApp}>
        <WhatsAppIcon />
      </button>
      <button onClick={handleShareOnPinterest}>
        <PinterestIcon />
      </button>
      <button onClick={handleShareOnLinkedIn}>
        <LinkedInIcon />
      </button>
      <p ref={quoteRef}>{quote}</p>
      <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
    
    </div>
  );
}

export default Share;
