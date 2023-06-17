
import { ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import Navigation from './navigation';
import { loadAsync } from 'expo-font';
import { Provider } from 'react-redux';
import store from './store/index';

export default function App() {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const loadFonts = async () => {
      await loadAsync({
        'Philosopher-Bold': require('../assets/fonts/Philosopher-Bold.ttf'),
        'Philosopher-BoldItalic': require('../assets/fonts/Philosopher-BoldItalic.ttf'),
        'Philosopher-Italic': require('../assets/fonts/Philosopher-Italic.ttf'),
        'Philosopher-Regular': require('../assets/fonts/Philosopher-Regular.ttf'),
      });
      setLoading(false);
    };

    loadFonts();
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}


