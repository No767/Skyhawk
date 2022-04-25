import { NativeBaseProvider,  Box, Button} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <NativeBaseProvider>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button

        onPress={() => navigation.navigate('Details')}
      >Go to details</Button>
    </View>
    </NativeBaseProvider>);
}

function DetailsScreen({navigation}) {
  return (
    <NativeBaseProvider>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button

        onPress={() => navigation.navigate('HomeScreen')}
      >Go Back Home</Button>
    </View>
    </NativeBaseProvider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
