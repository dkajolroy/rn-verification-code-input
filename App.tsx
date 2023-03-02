import React, {useRef, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  const ref1 = useRef<TextInput>(null);
  const ref2 = useRef<TextInput>(null);
  const ref3 = useRef<TextInput>(null);
  const ref4 = useRef<TextInput>(null);

  interface DataType {
    first: Number | undefined;
    second: Number | undefined;
    third: Number | undefined;
    forth: Number | undefined;
  }
  const [data, setData] = useState<DataType>({
    first: undefined,
    second: undefined,
    third: undefined,
    forth: undefined,
  });
  console.log(ref1);

  type PositionType = 'first' | 'second' | 'third' | 'forth';

  const handleData = (value: Number, position: PositionType) => {
    switch (position) {
      case 'first':
        setData(d => ({...d, first: value}));
        value && ref2.current?.focus();
        break;
      case 'second':
        setData(d => ({...d, second: value}));
        value ? ref3.current?.focus() : ref1.current?.focus();
        break;
      case 'third':
        setData(d => ({...d, third: value}));
        value ? ref4.current?.focus() : ref2.current?.focus();
        break;
      case 'forth':
        setData(d => ({...d, forth: value}));
        !value && ref3.current?.focus();
        break;
      default:
        setData(d => ({...d}));
    }
  };

  return (
    <View style={{marginHorizontal: 10}}>
      <Text style={{fontSize: 20}}>Verification Code</Text>
      <View style={styles.verifyBox}>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="0"
          maxLength={1}
          ref={ref1}
          onChangeText={e => handleData(parseInt(e), 'first')}
        />
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="0"
          maxLength={1}
          ref={ref2}
          onChangeText={e => handleData(parseInt(e), 'second')}
        />
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="0"
          maxLength={1}
          ref={ref3}
          onChangeText={e => handleData(parseInt(e), 'third')}
        />
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="0"
          maxLength={1}
          ref={ref4}
          onChangeText={e => handleData(parseInt(e), 'forth')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'tomato',
    borderRadius: 5,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontSize: 18,
  },
  verifyBox: {
    flexDirection: 'row',
  },
});
