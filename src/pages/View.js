import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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

const ImageDetail = ({
    match: {
        params: { key }
    }
}) => {
    const [image, setImage] = useState(null);

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
        </StyledDiv>
    );
};

export default ImageDetail;
