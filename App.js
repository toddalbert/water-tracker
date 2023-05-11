import { useState, useEffect } from 'react';
import { NativeBaseProvider, Box, Toast } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Title from './src/components/Title';
import Goal from './src/components/Goal';
import Tacker from './src/components/Tracker';
import Controls from './src/components/Controls';

export default function App() {

  const [intake, setIntake] = useState(0);
  const [goal, setGoal] = useState(3000);

  const getPrevIntake = async () => {
    const value = await AsyncStorage.getItem('@storage_Key');
    if(value) {
      setIntake(JSON.parse(value));
    }
  }

  const setPrevIntake = async () => {
    if(intake) {
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(intake))
    }
  }

  useEffect(() => {
    getPrevIntake();
    return setPrevIntake;
  }, []);

  useEffect(() => {
    setPrevIntake();
    if(intake >= goal) {
      Toast.show({
        title: "Hooray!",
        description: "You met your water intake goal!",
        bg: "blue.400",
      });
    }
  }, [intake])

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#151926" alignItems="center" justifyContent="flex-start">
        <Box height={50} width={'100%'} bg='#29313C'></Box>
        <Title />
        <Goal goal={goal} setGoal={setGoal} />
        <Tacker intake={intake} goal={goal} setIntake={setIntake} />
        <Controls setIntake={setIntake} intake={intake} />
      </Box>
    </NativeBaseProvider>
  );
}
