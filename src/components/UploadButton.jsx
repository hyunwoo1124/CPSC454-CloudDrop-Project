import React, {Component} from 'react'
import {DashboardModal} from '@uppy/react'

import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

class UploadButton extends Component {
    constructor (props) {
      super(props)
  
      this.state = {
        modalOpen: false
      }
  
      this.handleOpen = this.handleOpen.bind(this)
      this.handleClose = this.handleClose.bind(this)
    }
  
    handleOpen () {
      this.setState({
        modalOpen: true
      })
    }
  
    handleClose () {
      this.setState({
        modalOpen: false
      })
    }
  
    render () {
      return (
        <div>
          <button onClick={this.handleOpen}>Upload</button>
          <DashboardModal
            uppy={this.props.uppy}
            closeModalOnClickOutside
            open={this.state.modalOpen}
            onRequestClose={this.handleClose}
          />
        </div>
      );
    }
  }
  
  export default UploadButton