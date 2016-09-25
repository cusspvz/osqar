import React, { Component } from 'react'
import { subscribe } from 'horizon-react'

import Avatar from 'rebass/dist/Avatar'

class UserAvatar extends Component {
  render () {
    const { id, size } = this.props

    return (
      <Link to={`/user/${id}`}>
        <Avatar circle size={size || 64} src={this.getSource()} />
      </Link>
    )
  }

  getSource () {
    
  }
}

export default subscribe({
  mapDataToProps: {
    user: ( horizon, props ) => horizon( 'users' ).find(  ),
  }
})( UserAvatar )
