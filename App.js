
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, StatusBar} from 'react-native';

import Produto from './paginas/Produto';
import Orcamento from './paginas/Orcamento';
import Home from './paginas/Home';


export default class App extends Component {



  render() {
    return (
    	<View >
    		<View>
    			<StatusBar
    			hidden={true}
	    	/>
    		</View>
    		<View>
    		<Orcamento />
    		//<Produto />
	        //<Home />
    	</View>
    		
    	</View>
    	
    		
	        
	        

    	     
    );
  }
}
