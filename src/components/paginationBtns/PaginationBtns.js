import { useState } from 'react';
import { Pagination } from '@mantine/core';

const PaginationBtns = () => {
    const [activePage, setPage] = useState(1);
    return ( 
        <Pagination value={activePage} onChange={setPage} total={3}  position="center"/>
    );
}
 
export default PaginationBtns;