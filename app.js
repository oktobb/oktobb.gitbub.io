'use strict';

var Hello = React.createClass({
  render: function() {
    return (
      <h2>HEADER</h2>
      );
  }
});

var TweetBox = React.createClass({
  render: function() {
    return (
      <div className="well clearfix">
        <textarea className="form-control">
        </textarea><br/>
        <button className="btn btn-primary pull-right">Tweet</button>
      </div>
    );
  }
});

React.render(
  <TweetBox />,
  document.getElementById('content')
);