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

  comparePost = (postA, postB) => {
    if (postA.date.getTime() < postB.date.getTime()) {
      return -1;
    }
    if (postA.date.getTime() > postB.date.getTime()) {
      return 1;
    }
    return 0;
  }

  getPosts = () => {
    fetch(URL_GET_POSTS)
      .then(response => response.json())
      .then(posts => {
        const formatPosts = posts.map(post => ({
          ...post,
          date: new Date(post.date)
        }));
        this.setState({
          posts: formatPosts.sort(this.comparePost)
        });
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <Layout>
        {posts.map(post => <Post key={post.id} data={post} />)}
      </Layout>
    );
  }
}

export default Blog;
