import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@mui/material';
import db from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');
  const sendTweet = (e) => {
    e.preventDefault();
    addDoc(collection(db, 'posts'), {
      displayName: 'Shreyas Lakshman',
      username: 'lakshmanshreyas',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        'https://media.licdn.com/dms/image/C5603AQELAL0NDsS9oQ/profile-displayphoto-shrink_800_800/0/1661350639802?e=1684972800&v=beta&t=SAbmbjS5Di9p-NLqG60ChqlDRdF94cV-B7qVVOScuHc',
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          {/* Circular image */}
          <Avatar src="https://media.licdn.com/dms/image/C5603AQELAL0NDsS9oQ/profile-displayphoto-shrink_800_800/0/1661350639802?e=1684972800&v=beta&t=SAbmbjS5Di9p-NLqG60ChqlDRdF94cV-B7qVVOScuHc" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage} // shows latest input value
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage} // shows latest input value
          type="text"
          placeholder="Optional: Enter Image URL"
          className="tweetBox__imageInput"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
