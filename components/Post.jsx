import React, { PureComponent } from 'react';

class Post extends PureComponent {
  render() {
    const { data: {title, text, src, date} } = this.props;

    return (
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <img src={`/static/${src}`} alt="image of post" />
        { !isNaN(date) && (
          <p>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</p>
        )}
      </div>
    );
  }
}

export default Post;
