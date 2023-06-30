import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { Button } from '@mantine/core';

const SeachBox = () => {

    const inputStyles = {
        border: '1px solid var(--light-border)',
        borderRadius: '12px',
    };

    return ( 
        <TextInput 
        icon={<IconSearch size="1.1rem" stroke={1.5} />}
        size="lg"
        bord
        placeholder="Введите название вакансии"
        rightSection={
            <Button radius="md" size="xs" variant="filled" fullWidth 
            style={{
              width: '83px',
              height: '32px',
              padding: '4px 20px',
              position: 'absolute',
              top: '8px',
              bottom: '8px',
              right: '12px'}}>
              Поиск
            </Button>
        }
        styles={{ input: inputStyles }}
        />
    );
}
 
export default SeachBox;