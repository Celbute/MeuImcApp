import { StatusBar } from 'expo-status-bar';
import { Switch, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ImageBackground,Image } from 'react-native';
import { useState } from 'react';
import styles from './aparence/style';



export default function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [genero, setGenero] = useState(false);
  const toggleSwitch = () => setGenero(previousState => !previousState);
  
  const  HandleCalcular= () => { 
   
    const height = parseFloat(altura) /100;
    const weigth = parseFloat(peso);

    const imc = weigth/(height*height);

    

      if(altura && peso <= 0)
      return Alert.alert(
        "Valor inválido",
        "Por Favor, digite um Número válido! "
      );

      if(imc < 18.5 )
        return Alert.alert(
          "Peso Baixo",
          `Seu imc é de ${imc.toFixed(2)} e está abaixo do peso normal`
        );
      
        if(imc >= 18.5 && imc <= 24.9 )
        return Alert.alert(
          "Peso Normal",
          `Seu imc é de ${imc.toFixed(2)} e está no peso normal`
        );
      
        if(imc >= 25 && imc <= 29.9 )
        return Alert.alert(
          "SobrePeso",
          `Seu imc é de ${imc.toFixed(2)} e está no sobrepeso `
        );

        if(imc >= 30 && imc <= 34.9 )
        return Alert.alert(
          "Obesidade (Grau 1)",
          `Seu imc é de ${imc.toFixed(2)} e está no estágio de obesidade grau 1`
        );

        if(imc >= 35 && imc <= 39.9 )
        return Alert.alert(
          "Obesidade severa",
          `Seu imc é de ${imc.toFixed(2)} e está em obesidade severa`
        );

        if(imc >= 40 )
        return Alert.alert(
          "Obesidade Mórbida",
          `Seu imc é de ${imc.toFixed(2)} e está em obesidade mórbida`
        );

};

  return (
    

    <ImageBackground style={styles.container } >

      <View style={styles.box}>
       <Image source={require('./assets/icon_IMC.png')} style={styles.logo}></Image>
      </View>
    
    <View style={styles.inputGroupRow}>

        <Text>Feminino</Text>

        <Switch
          trackColor={{ false: '#FFC0CB', true: '#81b0ff' }}
          thumbColor={genero ? '#81b0ff' : '#FFC0CB'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={genero}
        />
        <Text>Masculino</Text>
      </View>

      <Text>Altura em Cm</Text>
      
      <TextInput 
      keyboardType="number-pad"
      style={styles.input}
      value={altura}
       onChangeText={(text) => setAltura(text.replace( /\D/g, ""))}/>
      <Text>Peso</Text>
      
      <TextInput 
      keyboardType="number-pad"
      style={styles.input}
      value={peso} 
      onChangeText={(text) => setPeso(text.replace( /\D/g, ""))}/>

      <TouchableOpacity onPress={HandleCalcular} style={styles.button} >
        <Text style={styles.buttonText} >Calcular</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
     
    </ImageBackground>
    
  );
}


