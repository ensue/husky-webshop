import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 4s ease-out;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 110px;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: white;
  position: absolute;
  opacity: 0.97;
  transition: opacity 0.7s;

  h2 {
    font-weight: 300;
    margin: 10px 15px 0px;
    font-size: 27px;
    color: #4a4a4a;
    text-transform: lowercase;
  }

  p {
    font-weight: 200;
    font-size: 15px;
    color: #bb5a00;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  min-width: 400px;
  max-width: 100%;
  min-height: 400px;
  max-height: 100%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    cursor: crosshair;

    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 12s cubic-bezier(0.45, 0.45, 0.45, 0.95);
    }

    ${Body} {
      opacity: 0.89;
    }
  }
`;
