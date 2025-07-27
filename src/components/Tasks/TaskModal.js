import React, { useState, useEffect } from 'react';
import { Modal, Text, TextInput, Button, View } from 'react-native';

const TaskModal = ({ visible, onClose, onSubmit, initialValue }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (initialValue) setTitle(initialValue);
  }, [initialValue]);

  const handleSubmit = () => {
    if (title.trim()) {
      onSubmit(title);
      setTitle('');
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#000000aa' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <Text>Add New Task</Text>
          <TextInput
            placeholder="Enter task title"
            value={title}
            onChangeText={setTitle}
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <Button title="Cancel" color="orange" onPress={onClose} />
          <Button title="Add Task" onPress={handleSubmit} />
        </View>
      </View>
    </Modal>
  );
};

export default TaskModal;
