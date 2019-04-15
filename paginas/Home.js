import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, } from 'react-native';


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Menu</Text>
   

        <TouchableOpacity style={styles.btnProduto}>          
          <Text style={styles.textBtn}>Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOrcamento}>
           <Text style={styles.textBtn}>Orçamento</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8BE68',
    fontFamily: 'arial',
  },
  welcome: {
    fontWeight: 'bold',
    color: '#515150',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 50,
  },
  btnProduto: {
    borderColor: '#A84E54',
    borderWidth: 2, 
    marginTop: 20,
    backgroundColor: '#C64F52',
    borderRadius: 14,  
    paddingVertical: 30,
    width: 300,

  },
  btnOrcamento: {
    borderColor: '#A0337C',
    borderWidth: 2, 
    marginTop: 20,    
    backgroundColor: '#C03A82',
    borderRadius: 14,
    paddingVertical: 30,
    width: 300,
  },
  textBtn: {
    alignSelf: 'center',
    fontSize: 27,
    fontWeight: 'bold',       
    color: 'white',
  },
});
