import { Header, Container } from '@mantine/core';

import NavBar from '../navBar/NavBar';
import Logo from '../logo/Logo';
import './style.css';

const SiteHeader = () => {

  return ( 
    <Header height={84}>
      <Container size={1148} p={"xs"} className='header-container'>
          <Logo />
          <NavBar />    
      </Container>            
    </Header>
  );
}
 
export default SiteHeader;

