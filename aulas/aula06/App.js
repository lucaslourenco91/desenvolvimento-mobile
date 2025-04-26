import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Perfil from './screens/Perfil';
import NavegacaoPilha from './routes/NavegacaoPilha';
import NavegacaoAbaInferior from './routes/NavegacaoAbaInferior';
import NavegacaoAbaSuperior from './routes/NavegacaoAbaSuperior';
import NavegacaoGaveta from './routes/NavegacaoGaveta';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavegacaoGaveta/>
      </NavigationContainer>
    </SafeAreaProvider>
    
  );
}

export default App;



