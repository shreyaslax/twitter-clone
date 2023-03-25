import React, { useEffect, useState } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import Widgets from './Widgets';
import db from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import FlipMove from 'react-flip-move';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Firebase 8
    // db.collection('posts').onSnapshot((snapshot) =>
    //   setPosts(snapshot.docs.map((doc) => doc.data()))
    // );
    return onSnapshot(collection(db, 'posts'), (querySnapshot) => {
      const updatedPosts = querySnapshot.docs.map((doc) => doc.data());
      setPosts(updatedPosts);
    });
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* Add tweets */}
      <TweetBox />

      {/* Post tweets*/}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>

      {/* <Post
        displayName="Sonny Sangha"
        username="ssssangha"
        verified={true}
        text="I am Papa React"
        avatar="https://pbs.twimg.com/profile_images/1587503936503619589/x2bDktpK_400x400.jpg"
        image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
      />
      <Post
        displayName="Bill Gates"
        username="BillGates"
        verified={true}
        text="Founder of Microsoft"
        image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
        avatar="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
      />
      <Post
        displayName="Carl Pei"
        username="getpeid"
        verified={true}
        text="Founder of Nothing"
        image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
        avatar="https://pbs.twimg.com/profile_images/1637809235168829440/uTXqYBo7_400x400.jpg"
      />
      <Post
        displayName="Ishan Sharma"
        username="Ishansharma7390"
        verified={false}
        text="Founder of markitup"
        avatar="https://pbs.twimg.com/profile_images/1600872174734016512/guvu6WNX_400x400.jpg"
        image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
      /> */}

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default Feed;
