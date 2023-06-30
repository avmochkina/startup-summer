import { useState } from 'react';
import { Button, Group, Box, NumberInput, Select, Text, Flex, UnstyledButton, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconChevronDown, IconX} from '@tabler/icons-react';

export default function SearchBox() {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const [value, setValue] = useState(0);

  return (
    <Box maw={500} mx="auto" p={20} bg="var(--white)"
    style={{
      gap: '10px',
      border: '1px solid #EAEBED',
      borderRadius: '12px'
    }}>
        <Flex gap="xl"
            align="center"
            direction="row"
            wrap="wrap"
            justify={'space-between'}
            mb={32}
        >
            <Text fw={700}fz={20}>Фильтры</Text>
            <UnstyledButton>
            <Button rightIcon={<IconX size="1rem" color="var(--light-text)"/>}  variant="subtle" c="var(--light-text)" >
                Сбросить все
            </Button>
            </UnstyledButton>
        </Flex>
        
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Group mb={20} style={{gap: '8px'}}>
            <Title order={3} fz={16}>Отрасль</Title>
            <Select
                style={{ width: '100%' }}
                placeholder="Выберете отрасль"
                rightSection={<IconChevronDown size="1rem" color='var(--light-text)' />}
                rightSectionWidth={24}
                radius={8}
                styles={{rightSection: { pointerEvents: 'none' } }}
                data={['IT, интернет, связь, телеком',
                    'Кадры, управление персоналом',
                    'Искусство, культура, развлечения',
                    'Банки, инвестиции, лизинг',
                    'Дизайн']}
            />
        </Group>
        <Group mb={20} style={{gap: '8px'}}>
          <Title order={3} fz={16}>Оклад</Title>
          <NumberInput 
            style={{ width: '100%' }}
            radius={8}
            placeholder="от"
            step={1000}
            onChange={setValue}
          />
          <NumberInput 
            style={{ width: '100%' }}
            radius={8}
            placeholder="до"
            step={1000}
            onChange={setValue}
          />
        </Group>
        
          <Button type="submit" fullWidth radius={8}>Применить</Button>
      </form>
    </Box>
  );
}