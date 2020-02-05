import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggleNavbar() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ isOpen: false })
    }
  }

  render() {
    return (
      <div className="navbar is-fixed-top">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img id="image-logo" src={this.props.logo} alt="logo"/>FETCH</Link>
          <a
            role="button"
            className={this.state.isOpen ? 'navbar-burger is-active' : 'navbar-burger'}
            onClick={() => this.toggleNavbar()}
            aria-label="menu"
            aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={this.state.isOpen ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-end">
            <div className="navbar-item">
              <Link className="navbar-item" to="/dogs">Browse Dogs</Link>
            </div>
            <div className="navbar-item">
              <Link className="navbar-item" to="/dogs/favourites">Favourites</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar)