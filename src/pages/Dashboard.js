import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const StyledGrid = styled.div`
    display: grid;
    padding: 20px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 15px;
    justify-items: center;
`;

const StyledImage = styled.img`
    width: 250px;
    border-radius: 4px;
    box-shadow: 1px 3px 4px gray;
    transition: all 0.2s ease;

    :hover {
        transform: translateZ(25px) translateY(-4px);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
        transition: all 0.2s ease;
        cursor: pointer;
    }
`;

const Dashboard = () => {
    const [images, setImages] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const images = await axios.get(`/api/images`);
            let newImages = await Promise.all(
                images.data.map(async image => {
                    const imageData = await axios.get(
                        `/api/images/${image.key}`
                    );
                    return {
                        src: 'data:image/png;base64,' + imageData.data,
                        key: image.key
                    };
                })
            );
            setImages(newImages);
        };
        fetchData();
    }, []);

    return (
        <StyledGrid>
            {images
                ? images.map(image => {
                      return (
                          <Link key={image.key} to={`/images/${image.key}`}>
                              <StyledImage
                                  key={image.key}
                                  alt={image.key}
                                  src={image.src}
                              ></StyledImage>
                          </Link>
                      );
                  })
                : null}
        </StyledGrid>
    );
};

export default Dashboard;
