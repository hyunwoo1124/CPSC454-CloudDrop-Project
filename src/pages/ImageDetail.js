import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import history from '../utils/history';

const StyledDiv = styled.div`
    display: grid;
    padding: 20px;
    grid-gap: 10px;
    justify-items: center;
`;

const StyledImage = styled.img`
    width: 350px;
    border-radius: 4px;
    box-shadow: 0px 0px 4px gray;
    transition: all 0.2s ease;
`;

const StyledInput = styled.input`
    max-width: 400px;
    width: 95%;
    height: 40px;
    border-radius: 4px;
    padding: 5px;
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

const ImageDetail = ({
    match: {
        params: { key }
    }
}) => {
    const [image, setImage] = useState(null);
    const [email, setEmail] = useState('');

    const handleChange = e => {
        setEmail(e.target.value);
    };

    const handleSubmit = async () => {
        await axios.post('/api/share', {
            email,
            key
        });
    };

    const handleDelete = async () => {
        await axios.delete('/api/images', {
            data: {
                key
            }
        });
        history.push('/dashboard');
    };

    useEffect(() => {
        const fetchData = async () => {
            const imageData = await axios.get(`/api/images/${key}`);
            const src = 'data:image/png;base64,' + imageData.data;
            setImage(src);
        };

        fetchData();
    }, [key]);

    return (
        <StyledDiv>
            <StyledImage alt="detailed" src={image}></StyledImage>
            <h4>Share with Users:</h4>
            <StyledInput
                placeholder="Enter email of shared user"
                onChange={handleChange}
                value={email}
            />
            <StyledButton type="submit" onClick={handleSubmit}>
                Share
            </StyledButton>
            <StyledButton onClick={handleDelete}>Delete</StyledButton>
        </StyledDiv>
    );
};

export default ImageDetail;
