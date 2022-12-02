/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
	Keyboard,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	StyleSheet
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Button, Icon, Input, Card }  from "@rneui/base";

//Por props envío: sentido
export default function FiltroOrigen(props) {
	const [paradasOrigenDescripcion, setParadasOrigenDescripcion] = useState([]);
    const [cooldownBusquedaOrigen, setCoolDownBusquedaOrigen] = useState(1);

	useEffect(() => {
		console.log('Sentido es: ' + props.navigation.getParam('sentido'));
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					backgroundColor: 'blue',
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: 20
				}}>
				<Input
					placeholder="Buscar Parada donde subís"
					leftIcon={<Icon name="search" size={24} color="black"  />}
					onChangeText={texto => {
						console.log(texto);
					}}
				/>
			</View>

			<View
				style={{
					backgroundColor: 'red',
					height: 30,
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				<Text>{'Paradas Sugeridas'}</Text>
			</View>

			<ScrollView keyboardShouldPersistTaps={'always'}>
				{paradasOrigenDescripcion &&
					paradasOrigenDescripcion.map((nombreParada,k) => {
						return (
							<Button
                                key={k}
								buttonStyle={{ marginVertical: 5}}
								onPress={() => {props.navigation.goBack({nombreParada})}}
								title={nombreParada}
							/>
						);
					})}
			</ScrollView>
		</View>
	);
}
