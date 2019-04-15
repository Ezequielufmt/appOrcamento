import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput,  Alert } from 'react-native';





export default class Produto extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewTitle}>        
          <Text style={styles.viewTitleText}>Produto</Text>
        </View>
        <View style={styles.viewMain}>        
          <Text style={styles.SubTitle}>Cadastre seu produto</Text>
          <TextInput style={styles.imputBox}
            placeholder="Descrição do produto"
            onChangeText={(text) => this.setState({text})}
           />
          <TextInput style={styles.imputBox}
            placeholder="Valor de venda"
           />

          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
        </View>
        <TouchableOpacity onPress={msgSave} style={styles.btnSalvar}>          
          <Text style={styles.btnText}>Salvar</Text>
        </TouchableOpacity>     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#A9C959',

  },
  imputBox: {
    marginBottom: 10,
    borderRadius: 5,
    height: 40,
    marginHorizontal: 20,
    backgroundColor: 'white',
  },
  viewTitle: {
    backgroundColor: '#C54F52',
  },
  viewTitleText: {
    paddingVertical: 20,
    fontSize: 30,
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  viewMain: {
    flex: 10,
    backgroundColor: '#E7BC68',
  },
  SubTitle: {
    marginVertical: 20,
    fontSize: 20,
    textAlignVertical: 'center',
    textAlign: 'center', 
  },
  btnSalvar: {
    backgroundColor: '#7EA135',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    paddingVertical: 10, 
    textAlign: 'center',
  },

  
});
