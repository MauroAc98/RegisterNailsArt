
import { ActivityIndicator } from 'react-native';
import { Turns } from './screens';
import { useFonts } from 'expo-font';

export default function App() {

  const { loaded } = useFonts({
    "Philosopher-Bold": require('../assets/fonts/Philosopher-Bold.ttf'),
    "Philosopher-BoldItalic": require('../assets/fonts/Philosopher-BoldItalic.ttf'),
    "Philosopher-Italic": require('../assets/fonts/Philosopher-Italic.ttf'),
    "Philosopher-Regular": require('../assets/fonts/Philosopher-Regular.ttf'),
  })

  if (loaded) {
    return <ActivityIndicator />;
  }

  return (
    <Turns />
  );
}


