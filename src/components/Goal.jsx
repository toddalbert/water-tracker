import { Box, InfoIcon, ArrowUpIcon, ArrowDownIcon, Text } from 'native-base'

export default function Goal({ goal, setGoal }) {
  return (
    <Box height={100} width={'100%'} alignSelf={'top'} bg='#151926' alignItems='center' justifyContent='center'>
      <Text color={'#3C73F4'} fontSize={'lg'}>
        <ArrowUpIcon color={'blue.300'} onPress={() => setGoal(goal + 500)} />{'  '}
        <InfoIcon color={'#3C73F4'} />{' '}
        Water Target: {goal} ml{'  '}
        <ArrowDownIcon color={'blue.300'} onPress={() => setGoal(goal - 500)} />
      </Text>
    </Box>
  )
}
