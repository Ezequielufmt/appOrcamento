import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput,  Alert } from 'react-native';





export default class Orcamento extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.viewTitle}>        
          <Text style={styles.viewTitleText}>Orçamento</Text>
        </View>
        <View style={styles.viewMain}>        
          <Text style={styles.SubTitle}>Adicione produto</Text>
          <TextInput style={styles.imputBox}
            placeholder="Descrição do produto"
            onChangeText={(text) => this.setState({text})}
           />
          <TextInput style={styles.imputBox}
            placeholder="R$ --"
           />
           <TextInput style={styles.imputBox}
            placeholder="Qtd"
           />
           <TextInput style={styles.imputBox}
            placeholder="Sub-total"
           />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
          <Text style={styles.labelTotalGeral}>Total geral:</Text>
          <Text style={styles.textTotalGeral}> R$ 0,00</Text>


        </View>
        <TouchableOpacity  style={styles.btnSalvar}>          
          <Text style={styles.btnText}>Finalizar</Text>
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
    backgroundColor: '#BF3A81',
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
  labelTotalGeral: {
    textAlign: 'center',
    fontSize: 20,
  },
  textTotalGeral: {
    textAlign: 'center',
    fontSize: 30,
  },

  
});
