import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    box:{
      marginBottom: 10,
      alignItems: 'center',
    },
  
    logo:{
      width: 200,
      height: 200,
      
    },
  
    inputGroupRow: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    input: {
      height: 54,
      width: "80%",
      backgroundColor: "#FFF",
      borderRadius: 8,
      justifyContent: "center",
      paddingHorizontal: 16,
      marginTop: 4,
      borderWidth: 1,
      borderColor: "#000",
  
    },
  
    button:{
    backgroundColor: "#0000FF",
    width: '80%',
    height:54,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    borderRadius:8,
    marginTop: 16,
    },
  
    buttonText: {
      
      color: '#FFF',
      fontSize: 12,
  
    },
  
  
  
  });
  
  export default styles;