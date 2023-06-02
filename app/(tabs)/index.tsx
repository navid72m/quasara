import { StyleSheet } from 'react-native';
import TextField from '@mui/material/TextField';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import useAxios from 'axios-hooks';


// function handleClick ( ){
//   performSearch().then((response) =>  message = response)
// }

export default function TabOneScreen() {
  
  var [message, setMessage] = useState();
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const itemData = {"queryNum" : 64}
  const [sliderValue, setSliderValue] = useState(64)

  const requestOptions = {
    method: 'GET',
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  
};
  const getData = async () => {
    await fetch(
      `http://localhost:8000/${sliderValue}`, requestOptions).then(response => response.json().then(data => setMessage(data)) )
    // }
    
   
  };

  const handleClick =  () => {
    // setMessage();
    getData();
  }
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Query Dataset</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextField id="standard-basic" label="Text Query" variant="standard"  style={{margin:30, width: 300}}/>
      
      <Box width={300}>
      <Text style = {{justifyContent: 'left',}}> Number of the fetched results per query</Text>
         <Slider  onChangeCommitted={(_, v) => setSliderValue(v)} defaultValue={64} aria-label="Default" valueLabelDisplay="auto"  /></Box>
         <Button variant="contained" onClick={handleClick}>Search</Button>
        <Text style = {styles.container}> {message}</Text>
         
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical : 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
