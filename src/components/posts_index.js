import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import Asset from './asset';

class PostsIndex extends Component {
    componentWillMount() {
      this.props.fetchPosts();
    }
    renderPosts() {
      return this.props.posts.map((post, index) => {
        return (
          <article key={post.sys.id}>
            <h3>{post.fields.title}</h3>
            <p>{post.fields.description}</p>
            <p>{post.fields.blogImage.sys.id}</p>
            <div className="image">
            <Asset assetId={post.fields.blogImage.sys.id} />
          </div>
          </article>
        );
      });
    }
    render() {
      return (
        <div>
          <h2>Blog Posts</h2>
          {this.renderPosts()}
        </div>
      );
    }
  }
  function mapStateToProps(state) {
    return { posts: state.posts.all };
  }
  export default connect(mapStateToProps, { fetchPosts })(PostsIndex);