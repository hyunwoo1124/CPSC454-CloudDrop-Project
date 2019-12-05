import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import history from '../utils/history';

const StyledDiv = styled.div`
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    margin: 0;
`;

const StyledForm = styled.div`
    max-width: 600px;
    padding: 40px;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 0px 2px 4px #abaaaa;
`;

const StyledInput = styled.input`
    width: 300px;
    border-radius: 4px;
    margin: 10px 0px 20px;
`;

const StyledButton = styled.button`
    width: 150px;
    margin: 10px auto;
    border-radius: 4px;
    background-color: #008aff;
    color: white;

    :hover {
        background-color: #42a8ff;
    }
`;

const NewImage = () => {
    const [newImage, setNewImage] = useState(null);

    const onSubmit = async () => {
        const formData = new FormData();
        formData.append('newImage', newImage, newImage.name);
        await axios.post(`/api/images`, formData, {
            name: newImage.name
        });
        history.push('/dashboard');
    };

    return (
        <>
            <div style={{ margin: '30px' }}>
                <h3 style={{ color: '#555555', letterSpacing: '-1px' }}>
                    Upload
                </h3>
            </div>
            <StyledDiv>
                <StyledForm>
                    <StyledInput
                        type="file"
                        onChange={e => setNewImage(e.target.files[0])}
                    />
                    <StyledButton type="submit" onClick={onSubmit}>
                        Upload
                    </StyledButton>
                </StyledForm>
            </StyledDiv>
        </>
    );
};

export default NewImage;
