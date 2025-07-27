import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask, deleteTask } from '../redux/taskSlice';
import TaskItem from '../components/Tasks/TaskItem';
import TaskModal from '../components/Tasks/TaskModal';

const TaskScreen = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.taskList);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleAdd = (title) => {
    if (editingTask) {
      dispatch(updateTask({ id: editingTask.id, newTitle: title }));
      setEditingTask(null);
    } else {
      dispatch(addTask(title));
    }
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onEdit={(task) => {
              setEditingTask(task);
              setModalVisible(true);
            }}
            onDelete={(id) => dispatch(deleteTask(id))}
          />
        )}
      />
      <Button title="Add" onPress={() => {
        setEditingTask(null);
        setModalVisible(true);
      }} />
      <TaskModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setEditingTask(null);
        }}
        onSubmit={handleAdd}
        initialValue={editingTask?.title}
      />
    </View>
  );
};

export default TaskScreen;
