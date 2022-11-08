import {View} from 'react-native';

interface props {
  children: JSX.Element[];
}

export default (props: props) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      {props.children}
    </View>
  );
};
