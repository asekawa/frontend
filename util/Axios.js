import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

// For requests to server which can be done only by a authenticated user, import
// axios from this file as "import axios from 'path/to/this/file'". All requests using this
// module will have Authorization header in their request headers. 
export default axios.create({
    baseURL: 'http://192.168.1.100:3000/api/',
    timeout: 1000,
    headers: {
        'Authorization': 'Bearer '+AsyncStorage.getItem('token')}
  });

