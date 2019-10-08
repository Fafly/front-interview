import React, { PureComponent } from 'react';

class Post extends PureComponent {
  render() {
    const { data: {title, text, src, date} } = this.props;
    const formatDate = new Date(date);

    return (
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <img src={`/static/${src}`} alt="image of post" />
        { date !== '' && date && (
          <p>{`${formatDate.getDate()}/${formatDate.getMonth() + 1}/${formatDate.getFullYear()}`}</p>
        )}
      </div>
    );
  }
}

export default Post;
