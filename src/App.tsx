import {evaluate, format} from 'mathjs';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Keypad from './components/Keypad';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: 'black',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});

export default () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const onPress = (ch: string) => {
    switch (ch) {
      case 'C':
        setText('');
        break;

      case '=':
        setResult(format(evaluate(text)));
        setText('');
        break;

      case '÷':
        onPress('/');
        break;

      case '×':
        onPress('*');
        break;

      case '<':
        setText(text.slice(0, -1));
        break;

      default:
        setText(text + ch);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.5,
          backgroundColor: '#111',
        }}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.text}>{result}</Text>
      </View>
      <View
        style={{
          flex: 0.5,
        }}>
        <Keypad onPress={onPress} />
      </View>
    </View>
  );
};
