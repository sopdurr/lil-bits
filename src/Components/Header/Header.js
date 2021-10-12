import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 175px;
  width: 100%;
  background: #c16757;
  font-size: 5rem;
  color: black;
  border-bottom: 3px solid black;
`;

const ImgContainer = styled.div`
  height: 100%auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 350px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <ImgContainer>
        <Img src='http://ih1.redbubble.net/image.181146356.8650/sticker,375x360.u1.png' />
      </ImgContainer>
    </StyledHeader>
  );
};

export default Header;
