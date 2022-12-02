import React, { useState, useEffect } from "react";
import { Keyboard, ScrollView, Text,TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Icon, Button } from "@rneui/base";

export default function NuevaReserva2 (props){
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

    useEffect(() => {
        console.log(props.navigation.getParam('sentido'))
      }, []);

    //Funciones de Limpieza
    const limpiarOrigenDestinoHora = () => {
        console.log("limpiar Origen Destino Hora");
    }
    const limpiarDestinoHora = () => {
        console.log("limpiar Origen Destino Hora");
    }
    const limpiarHora = () => {
        console.log("limpiar Origen Destino Hora");
    }
    //Fin Funciones de Limpieza

    const cambiarFecha = (nuevaFecha : Date) => {
        setFechaSeleccionada(nuevaFecha);
        setDatePickerVisible(false);
        limpiarOrigenDestinoHora();
    }

    return (

    <View style={{flex:1 }}>
      <HeaderTitulo
        titulo={"Nueva reserva"}
        navigation={props.navigation} />

      <DateTimePicker
        isVisible={isDatePickerVisible}
        onConfirm={(nuevaFecha) => cambiarFecha(nuevaFecha)}
        onCancel={() => setDatePickerVisible(false)}
        minimumDate={new Date()}
        maximumDate={UtilesFecha.addDays(new Date(), 15)}
      />


        <View style={estilos.cardFiltros}>
          <View style={{ backgroundColor:'blue', alignItems:'center'}} >

          <Text onPress={() => setDatePickerVisible(true)}>
           ¿Qué día viajas?:
            {'\n' + UtilesFecha.formatearFormatoPantalla2(fechaSeleccionada.toString())}
          </Text>

        <Button
            icon={<Icon type="font-awesome" name="bus" size={20} color="white" tvParallaxProperties/>}
            buttonStyle={{marginVertical:10, width: '90%'}}
            onPress={() => props.navigation.navigate('FiltroOrigen',
            {sentido: props.navigation.getParam('sentido') })}
            title=" Seleccioná dónde subís"
          />

        <Button
            icon={<Icon type="font-awesome" name="bus" size={20} color="white" tvParallaxProperties/>}
            buttonStyle={{marginBottom:10, width: '90%'}}
            onPress={() => console.log("Boton dónde bajás Presionado")}
            title=" Seleccioná dónde bajás"
          />

        <Button
            icon={<Icon type="font-awesome" name="bus" size={20} color="white" tvParallaxProperties/>}
            buttonStyle={{marginBottom:10, width: '90%'}}
            onPress={() => props.navigation.navigate('NuevaReservaOld')}
            title=" Seleccioná un horario"
          />

          <Button
            icon={
              <Icon
                type="font-awesome" name="floppy-o" size={20} color="white"
                tvParallaxProperties={undefined}
              />
            }

            buttonStyle={styles.botonGrabar}
            onPress={() => console.log("Boton Guardar Presionado")}
            title=" Guardar Reserva"
          />
          </View>
          <View style={{backgroundColor:'red', height:30, justifyContent:'center', alignItems:'center'}}>
            <Text>{'Sentido ' + (props.navigation.getParam('sentido')===1 ? 'CABA':'Provincia')}</Text>
          </View>
        </View>

    <ScrollView keyboardShouldPersistTaps={"always"} >
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
    </ScrollView>

    </View>


    );


}

const estilos = StyleSheet.create({
  headerServiciosCandidatos: {textAlign: 'center', paddingTop:20, paddingBottom:10, fontWeight:'bold'},
  cardFiltros: { backgroundColor: "#f0eff5", zIndex:99999999999999, marginLeft:1, marginRight:1, paddingBottom:5},
  autoComplete: {backgroundColor: '#dee3de',borderRadius: 5},
});
