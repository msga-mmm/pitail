import {Text, TouchableOpacity} from 'react-native';

interface props {
  label: string;
  onPress: () => void;
}

export default (props: props) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={props.onPress}>
      <Text
        style={{
          color: 'white',
          fontSize: 24,
        }}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};
