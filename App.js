import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements'

export default function App() {

  const [num, setNum] = useState();
  const [nums, setNums] = useState([]);
  const [showMin, setShowMin] = useState(false);
  const [showMax, setShowMax] = useState(false);
  const [numMin, setNumMin] = useState();
  const [numMax, setNumMax] = useState();

  const addNum = () => {
    if (num <= 0) {
      showAlert('Error', 'Ingrese un valor arriba de cero')
    } else {
      setNums(nums => [...nums, num]);
    }
  }

  const calculate = () => {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    if (min > 10) {
      max = max + 10;
      setShowMax(true);
      setNumMax(max);
    }
    if (max < 50) {
      min = min - 5;
      setShowMin(true);
      setNumMin(min);
    }
    console.log(max);
    console.log(min);
  }

  const reset = () => {
    setNums([]);
  }

  const showAlert = (title, msg) => Alert.alert(
    title,
    msg,
    [
      {
        text: "Cerrar",
        onPress: () => console.log('close'),
        style: "destructive",
      },
    ],
  );

  return (
    <Card style={styles.container}>
      <Card.Title>
        Ejercicio - #3
      </Card.Title>
      <Card.Divider />
      <Text style={styles.paragraph}>
      Ingrese un digito y de en el boton de Agregar, luego aparecerá los resultados.
      </Text>
      <View>
      <TextInput 
        placeholder="Ingrese un numero"
        keyboardType="numeric"
        onChangeText={(val) => setNum(val)}
        style={styles.input}
      />
      </View>
      {
        nums.length < 4 &&
        <Button
          title="Agregar"
          onPress={addNum}
          style={styles.button}
        />
      }
      {
        nums.length == 4 &&
        <Button
          title="Calcular"
          onPress={calculate}
          style={styles.button}
        />
      }
      {
        nums.length == 4 &&
        <Button
          title="Reset"
          onPress={reset}
          type="clear"
          style={styles.button}
        />
      }
      <Text style={styles.value}>
        Números ingresados: 
        {
          JSON.stringify(nums)
        }
      </Text>
      {/* <Text style={styles.value}>
        Numero escribiendo: 
        {
          num
        }
      </Text> */}
      {
        showMax &&
        <Text style={styles.value}>
          El nuevo número mayor es: {numMax}
        </Text>
      }
      {
        showMin &&
        <Text style={styles.value}>
          El nuevo número menor es: {numMin}
        </Text>
      }
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    paddingLeft: 10,
    height: 45,
    marginBottom: 20,
  },
  value: {
    marginTop: 15,
    fontWeight: 'bold'
  },
  button: {
    marginBottom: 20
  }
});
