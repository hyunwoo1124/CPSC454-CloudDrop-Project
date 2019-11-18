import React, { useState } from 'react';
import axios from 'axios';

const NewImage = () => {
    const [newImage, setNewImage] = useState(null);

    const onSubmit = async () => {
        const formData = new FormData();
        formData.append('newImage', newImage, newImage.name);
        await axios.post(`/api/images`, formData, {
            name: newImage.name
        });
    };

    return (
        <div>
            <input type="file" onChange={e => setNewImage(e.target.files[0])} />
            <button type="submit" onClick={onSubmit}>
                Upload
            </button>
        </div>
    );
};

export default NewImage;
