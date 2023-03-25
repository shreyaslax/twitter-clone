import React from 'react';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';

import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={'1637864015786303503'} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="LakshmanShreyas"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={'https://www.instagram.com/shreyasrocks2020/'}
          options={{ text: '#reactjs is awesome', via: 'LakshmanShreyas' }}
        />
      </div>
    </div>
  );
}

export default Widgets;
