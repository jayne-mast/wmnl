import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';

class BlogPost extends React.Component {
  render() {
    const { config } = this.props;
    console.log(this.props);
    return (
      <Layout config={config}>
        <h1>A blog post</h1>
      </Layout>
    );
  }
}

BlogPost.propTypes = {
  config: PropTypes.object,
};

export default BlogPost;
