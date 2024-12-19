import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface PickerSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  items: { label: string; value: string }[];
}

export const PickerSelect: React.FC<PickerSelectProps> = ({
  value,
  onValueChange,
  items,
}) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={value}
        onValueChange={onValueChange}
        style={pickerSelectStyles.input}
      >
        {items.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    padding: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    paddingHorizontal: 10,
    color: 'black',
  },
});
