import React from 'react';

// Import Noty for nice file open notifications
import Noty from 'noty';
import 'noty/lib/noty.css';
import 'noty/lib/themes/relax.css';

// Import Chonky
import 'chonky/style/main.css';
import {FileBrowser, FileView} from 'chonky';

// Define a handler for "open file" action
const handleFileOpen = (file) => {
    const type = file.isDir ? 'folder' : 'file';
    const text = `You tried to open a ${type}: ${file.name}`;
    new Noty({text: text, type: 'success', theme: 'relax', timeout: 3000}).show();
};

// Define some files and folders
const readmeFile = {
    id: 'abcd1234',
    name: 'README.md',
    isDir: false,
};
const blueSkys = {
    id: '1',
    name: 'blueSkys.jpeg',
    thumbnailUrl: '../images/cloudDropLogo.png',
};
const myFiles = [readmeFile, blueSkys];
const parentFolder = {
    id: 'qwer5678',
    name: 'Simple example',
    isDir: true,
};
const folderChain = [parentFolder];

const thumbnailGenerator = (file) => {
    return file.thumbnailUrl;
};


// Render the file browser
const Filebrowser = () => <FileBrowser files={myFiles} 
    folderChain={folderChain}
    onFileOpen={handleFileOpen}                                                 
    view={FileView.SmallThumbs}
    thumbnailGenerator={thumbnailGenerator}
    view={FileView.SmallThumbs}/>;

export default Filebrowser;