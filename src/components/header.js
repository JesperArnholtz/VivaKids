import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchMainLinks } from '../actions/navigation';
import { Link, IndexLink } from 'react-router';


class Header extends Component {
  componentWillMount() {
    this.props.fetchMainLinks();
  }
  renderLinks() {
    // console.table(this.props)
    return this.props.links.map((link, index) => {
      return (
        <span key={link.sys.id}>
          {" | "}
          <Link to={link.fields.link} activeClassName="active">{link.fields.link}</Link>
        </span>
      );
    });
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {this.renderLinks()}
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return { links: state.links.all };
}
export default connect(mapStateToProps, { fetchMainLinks })(Header);