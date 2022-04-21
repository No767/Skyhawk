import { NativeBaseProvider, Text, Box, Button} from 'native-base';
export default function App() {
  return (

    <NativeBaseProvider>
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Text>Data Testing</Text>
      <Button>test</Button>
    </Box>
  </NativeBaseProvider>
  );
}
