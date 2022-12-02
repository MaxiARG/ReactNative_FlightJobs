import React, { Component } from "react";
import { Text,View } from "react-native";
import { Icon, Header } from "react-native-elements";
import Config from "react-native-config";


export class HeaderTitulo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let fn = () => this.props.navigation.goBack();
    if(this.props.onPress){
      fn=this.props.onPress;
    }
    return <Header
			backgroundColor={"#216ab2" }
			statusBarProps={{translucent: true}}
			placement="left"
			leftComponent={<Icon name="angle-double-left" color="white" type="font-awesome" size={40} onPress={fn} />}
			centerComponent={
			<View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
				<Text style={{ fontSize: 20, fontWeight: "bold", color: "white"}}>{this.props.titulo}</Text>
			</View>
		} />;
  }
}
