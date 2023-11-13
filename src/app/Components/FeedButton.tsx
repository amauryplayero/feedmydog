
import React, {useEffect} from 'react';

interface TimerProps {
  
  handleFeedClick: ()=> void;
  feedingIsOkay: boolean;
}


const FeedButton: React.FC<TimerProps> = ({ handleFeedClick, feedingIsOkay }) => {
  const calculateTimeLeft = () => {
    
    
  };


  return (
    <div>
      {feedingIsOkay ? <button className="hover:scale-110 font-semibold transition ease-in-out bg-purple px-12 py-4 bg-pink-600 rounded-full " onClick={handleFeedClick}>FEED MY DOG</button> : <button className="font-semibold transition ease-in-out bg-purple px-12 py-4 bg-pink-300 rounded-full " >Patty was already fed</button>}
    </div>
  );
};

export default FeedButton;