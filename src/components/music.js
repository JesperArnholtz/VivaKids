import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchMusic } from '../actions/music';
import Asset from './asset';

class Music extends Component {
    componentWillMount() {
      this.props.fetchMusic();
    }
    renderMusic() {
      
      return this.props.music.map((mus, index) => {
        return (
          <article key={mus.sys.id}>
            <h1>{mus.fields.headline}</h1>
            <p>{mus.fields.text}</p>
            {/* <div className="image">
            <Asset assetId={post.fields.blogImage.sys.id} />
          </div> */}
          </article>
        );
      });
    }
    render() {
      return (
        <div>
          <h2>Musik HARDCODET</h2>
          {this.renderMusic()}
        </div>
      );
    }
  }
  function mapStateToProps(state) {
    return { music: state.music.all };
  }
  export default connect(mapStateToProps, { fetchMusic })(Music);