import { ReactSVG } from 'react-svg';
import { Group } from '@mantine/core';
import logo from "../../assets/icons/mainLogo.svg";
import './style.css';

const Logo = () => {
  return ( 
    <Group spacing='sm' position='left' className='main-logo'>
      <ReactSVG src={logo} />
      <h1>Jobored</h1>
    </Group>
  );
}
 
export default Logo;
