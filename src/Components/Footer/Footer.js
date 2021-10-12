import styled from 'styled-components'


const Foot = styled.div`
  height: 40px;
  background-color: #3e6053;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-bottom: solid 1px black;
  border-top: solid 1px black;
`;

const Footer = () => {

  return ( 
    <Foot>
      Opening hours: Monday - Sunday, 17.00-21:00
    </Foot>
  )
}

export default Footer;