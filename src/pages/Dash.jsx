import React, {Component, useCallback} from 'react'

import Navbar from '../components/Navbar.jsx'
import UploadButton from '../components/UploadButton'
import Filebrowser from '../components/Filebrowser'


import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

const Uppy = require('@uppy/core')
class Dash extends Component{
    constructor (props){
        super(props)
        this.uppy = Uppy()
    }

    componentWillUnmount(){
        this.uppy.close()
    }

      render() {
          return (
              <div>
                  <Navbar />
                  <div>
                      <div />
                      <UploadButton uppy={this.uppy} />
                      <div>
                        <Filebrowser />
                        </div> 
                  </div>
              </div>
          )
      }
}

export default Dash