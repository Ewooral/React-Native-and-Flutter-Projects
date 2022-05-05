import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
// const App = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text
//         style={{
//           fontSize: 30,
//           fontWeight: 'bold',
//           color: '#000',
//         }}>
//         Hello, world!
//       </Text>
//     </View>
//   );
// };
class App extends Component {
  render() {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            color: '#000',
          }}>
          Hello, world!
        </Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 200, height: 200}}
        />
      </View>
    );
  }
}
export default App;
