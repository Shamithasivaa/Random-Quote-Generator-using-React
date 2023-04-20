import React,{useRef} from 'react';
import Quotes from './Quotes';
const Copy = () => {
    const [quote, setQuote] = useState('');
    const quoteRef = useRef(null);
    <Quotes/>
};
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
        <div>
          <p ref={quoteRef}>{quote}</p>
          <button onClick={generateQuote}>Generate Quote</button>
          <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
        </div>
      );
    
    export default Copy;