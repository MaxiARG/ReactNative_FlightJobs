import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  const [ variable, setVariable ] = React.useState('Altos del Potosi')
  console.log(variable)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>La Home</Text>
      <Button
        onPress={() => navigation.navigate('AboutScreen')}
        title="Go To About Screen" 
        />
    </View>
  );
}

function AboutScreen(props) {
  console.log("--" + props)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
      <Button
        onPress={() => props.navigation.navigate('RegisterScreen')}
        title="Go To Register Screen" 
        />
    </View>
  );
}

function RegisterScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Register Screen</Text>
      <Button
        onPress={() => props.navigation.navigate('RegistrarseConEmail')}
        title="Go To Register With Email" 
        />
        <Button
        onPress={() => props.navigation.navigate('RegistrarseConTelefonoMovil')}
        title="Go To Register With Telefono Movil" 
        />
    </View>
  );
}

//Sub Arbol de Register Screen
function RegistrarseConEmail(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Registrarse Con Email</Text>
    </View>
  );
}

function RegistrarseConTelefonoMovil(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Registrarse Con Telefono movil</Text>
      <Button
        onPress={() => props.navigation.navigate('AboutScreen')}
        title="Go To AboutScreen" 
        />
    </View>
  );
}
//Fin Sub Arbol Register Screen
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name='RegistrarseConEmail' component={RegistrarseConEmail}/>
        <Stack.Screen name='RegistrarseConTelefonoMovil' component={RegistrarseConTelefonoMovil}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;