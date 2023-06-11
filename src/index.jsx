
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import AppNavigator from './navigation';

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
    <AppNavigator />
  );
}


