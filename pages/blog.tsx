import React, { PureComponent } from 'react';

import Layout from '../components/Layout';

const URL_GET_POSTS = 'https://upply-interview.herokuapp.com/';

class Blog extends PureComponent {
  state = {
    // Posts to display
    posts: []
  }

  componentDidMount(): void {
    this.getPosts();
  }

  getPosts = () => {
    fetch(URL_GET_POSTS)
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <Layout>
        <h1>Blog page</h1>
      </Layout>
    );
  }
}

export default Blog;
