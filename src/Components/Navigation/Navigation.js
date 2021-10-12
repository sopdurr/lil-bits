import styled from 'styled-components';

const Nav = styled.div`
  height: 80px;
  background-color: #3e6053;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-bottom: solid 3px black;
`;

const LinkContainer = styled.div`
  justify-content: space-between;
`;

const Links = styled.span`
  margin: 10px;
  font-size: 1.5rem;
  font-weight: 3rem;

  :hover {
    color: #c16757;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <LinkContainer>
        <Links>Restaurants</Links>
        <Links>Menu</Links>
        <Links>Groups</Links>
        <Links>Contact</Links>
      </LinkContainer>
    </Nav>
  );
};

export default Navigation;
