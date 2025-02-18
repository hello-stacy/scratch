import React from 'react';

export default function Post({
  title,
  body,
  styling,
  votes,
  postId,
  userId,
  upVoteFunc,
  downVoteFunc,
  currentUserId,
  username,
  bannedFunc,
}) {
  //console.log(styling);
  return (
    <div className={`Post ${styling}`}>
      <div className="TitleAndBody">
        <h4 className="MessageUsername">{username}</h4>
        <h4>{title}</h4>
        <p className="PostBody">{body}</p>
      </div>
      <div className="ButtonsAndCounter">
        <div className="ButtonsContainer">
          <button
            type="button"
            className="upVoteButton"
            id="upvote"
            onClick={(e) => {
              //var socket = io();
              e.preventDefault();
              upVoteFunc(votes, postId, userId, currentUserId);
              // socket.emit('new upvote', `emitting from Post: ${votes}`);
              // socket.emit('new upvote', {votes: votes,userId: userId,currentUserId: currentUserId})
            }}
          >
            🐃
          </button>
          <button
            type="button"
            className="downVoteButton"
            id="downvote"
            onClick={(e) => {
              e.preventDefault();
              downVoteFunc(votes, postId, userId, currentUserId);
            }}
          >
            💥
          </button>
          <button
            type="button"
            className="bannedButton"
            id="banned"
            onClick={(e) => {
              //var socket = io();
              e.preventDefault();
              alert('BANNED!!!! Please refresh page.');
              bannedFunc(username, userId);
              // socket.emit('new upvote', `emitting from Post: ${votes}`);
              // socket.emit('new upvote', {votes: votes,userId: userId,currentUserId: currentUserId})
            }}
          >
            🆘
          </button>
        </div>
        <div className="votesCounter" id="votes">
          {votes} Yaks
        </div>
      </div>
    </div>
  );
}
