import {nanoid} from 'nanoid';
import keyboardLayout from '../assets/keyboardLayout';
import Button from './Button';
import Row from './Row';

interface props {
  onPress: (ch: string) => void;
}

export default (props: props) => {
  return (
    <>
      {keyboardLayout.primary.map(row => (
        <Row key={nanoid()}>
          {row.map(ch => (
            <Button
              key={nanoid()}
              label={ch}
              onPress={() => props.onPress(ch)}
            />
          ))}
        </Row>
      ))}
    </>
  );
};
