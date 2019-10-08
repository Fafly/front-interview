import React, { PureComponent } from 'react';

import Layout from '../components/Layout';
import Post from '../components/Post';

const URL_GET_POSTS = 'https://upply-interview.herokuapp.com/';

class Blog extends PureComponent {
  state = {
    // Posts to display
    posts: []
  }

  componentDidMount(): void {
    this.getPosts();
  }

  /*comparePost = (postA, postB) => {
    if (postA.date < postB.date) {
      return -1;
    }
    if (postA.date > postB.date) {
      return 1;
    }
    return 0;
  }*/

  getPosts = () => {
    fetch(URL_GET_POSTS)
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    const { posts } = this.state;
    return (
      <Layout>
        {posts.map(post => <Post data={post} />)}
      </Layout>
    );
  }
}

export default Blog;
