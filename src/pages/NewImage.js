import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
width: 400px;
display: flex;
flex-direction: column;
align-itmes:center;
justify-content: center;
padding: 20px 40px;
border-radius: 10px;
box-shadow: 0px 10px 50px #555;
background-color: #ffffff;
margin: auto;
position: absoluete;
`;

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
        <StyledDiv>
           <input type="file" onChange={e => setNewImage(e.target.files[0])} />
            <button type="submit" onClick={onSubmit}>
                Upload
            </button>
        </StyledDiv>
            
    );
};

export default NewImage;
