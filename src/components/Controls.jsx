import { Box, AddIcon, Icon, Text, Button } from 'native-base'
// import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Controls({ setIntake, intake }) {
  return (
    <Box height={200} width={'100%'} alignSelf={'top'} bg='#151926' alignItems='center' justifyContent='center'>
      <Text color={'whitesmoke'} fontSize={'xl'} mb={4}>
        <AddIcon color={'whitesmoke'} />{' '}
        Add a portion of water
      </Text>
      <Box mb={6} flexDir={'row'} justifyContent={'space-around'} width={'80%'}>
        <Button
          colorScheme="blue"
          borderRadius={16}
          pl={6} pr={6}
          onPress={() => setIntake(intake + 250)} size={'lg'}>
            <Text color={'whitesmoke'} fontSize={'lg'} fontWeight={'500'}>🥤 One Cup</Text>
        </Button>
        <Button
          colorScheme="blue"
          borderRadius={16}
          pl={6} pr={6}
          onPress={() => setIntake(intake + 1000)} size={'lg'}>
            <Text color={'whitesmoke'} fontSize={'lg'} fontWeight={'500'}>💧 Bottle</Text>
        </Button>
      </Box>

      <Button
          colorScheme="gray"
          pl={8} pr={8}
          borderRadius={16}
          onPress={() => setIntake(0)} size={'lg'}>
            <Text color={'whitesmoke'} fontSize={'lg'} fontWeight={'500'}>🚫 Reset</Text>
        </Button>
    </Box>
  )
}
