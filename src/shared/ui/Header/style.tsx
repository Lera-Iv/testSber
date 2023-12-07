import styled from 'styled-components';

export const Head = styled.header`
  width: 100%;
  padding: 0 29px;
  display: flex;
  flex-direction: start;
  background-color: none;
`;

export const ImageContainer = styled.div`
  width: 225px;
  position: absolute;
  top: 0;
  right: 16px;
  z-index: 1;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;