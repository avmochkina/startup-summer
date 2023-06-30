import { AppShell, Container, Flex, Grid, Stack} from '@mantine/core';

import SiteHeader from '../components/header/SiteHeader';
import FilterBox from '../components/filterBox/FilterBox';
import SeachBox from '../components/searchBox/SearchBox';
import PaginationBtns from '../components/paginationBtns/PaginationBtns';

import './style.css'


const HomePage = () => {
    return ( 
    <AppShell
      padding="0px"
      header={<SiteHeader />}
    >
      <Container pt={40} pl={142} pr={142} maw={1148} className='main-container'>
        <Grid>
          <Grid.Col span={4}><FilterBox /></Grid.Col>
          <Grid.Col span={8}>
            <Stack>
              <SeachBox />
              
              <PaginationBtns />
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </AppShell>
    );
}
 
export default HomePage;