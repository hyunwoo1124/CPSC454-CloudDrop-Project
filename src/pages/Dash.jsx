import React, { Component } from 'react';
import UploadButton from '../components/UploadButton';
import Filebrowser from '../components/Filebrowser';

import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

const Uppy = require('@uppy/core');
class Dash extends Component {
    constructor(props) {
        super(props);
        this.uppy = Uppy({
            restrictions: {
                allowedFileTypes: ['image/*']
            }
        });
    }

    componentWillUnmount() {
        this.uppy.close();
    }

    render() {
        return (
            <div>
                <div>
                    <UploadButton uppy={this.uppy} />
                    <div>
                        <Filebrowser />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dash;
