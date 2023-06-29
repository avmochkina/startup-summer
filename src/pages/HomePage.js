import { AppShell, Container, Grid} from '@mantine/core';

import SiteHeader from '../components/header/SiteHeader';
import SearchBox from '../components/searchBox/SearchBox';
import './style.css'


const HomePage = () => {
    return ( 
    <AppShell
      padding="0px"
      header={<SiteHeader />}
    >
      <Container pt={40} pl={142} pr={142} maw={1148} className='main-container'>
        <Grid>
          <Grid.Col span={4}><SearchBox /></Grid.Col>
          <Grid.Col span={8}></Grid.Col>
        </Grid>
      </Container>
    </AppShell>
    );
}
 
export default HomePage;