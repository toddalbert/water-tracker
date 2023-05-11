import { View } from 'react-native';
import { Box, Progress, Text, Image } from 'native-base';

export default function Tacker({ intake, goal, setIntake }) {
  return (
    <Box
      height={400}
      width={'100%'}
      alignSelf={'top'}
      alignItems='center'
      justifyContent='center'>
        <View
            onTouchStart={e=> this.touchY = e.nativeEvent.pageY}
            onTouchEnd={e => {
              const swipeY = Math.round(this.touchY - e.nativeEvent.pageY)
              if (swipeY >= 20 || swipeY <= -20) setIntake(intake + swipeY * 5)
            }}>
          <Image
            size={200}
            borderColor={'blue.300'}
            borderWidth={8}
            mb={6}
            borderRadius={100}
            source={{
              uri: 'https://wallpaperaccess.com/full/380161.jpg',
            }}
            alt='Alternate Text'
          />
        </View>
      <Text color={'whitesmoke'} fontSize={'2xl'} fontWeight={'900'}>
        {intake} ml
      </Text>
      <Box w='90%' maxW='400'>
        <Progress
          size='2xl'
          colorScheme="blue"
          mt={8}
          mb={4}
          value={intake}
          max={goal}
        />
      </Box>
    </Box>
  )
}
