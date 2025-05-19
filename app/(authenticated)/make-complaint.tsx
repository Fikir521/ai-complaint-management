// app/(authenticated)/make-complaint.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function MakeComplaint() {
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<any>(null);

  const handleFileUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      setFile(result);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make a Complaint</Text>

      <Text style={styles.label}>Complaint Description</Text>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        placeholder="Describe your complaint..."
        value={description}
        onChangeText={setDescription}
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Upload Supporting File (Optional)</Text>
      <TouchableOpacity style={styles.fileButton} onPress={handleFileUpload}>
        <Text style={styles.fileButtonText}>
          {file ? file.name : 'Choose File'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit Complaint</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#1c1c1e',
    borderRadius: 15,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  label: {
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: '#fff',
    marginTop: 5,
    textAlignVertical: 'top',
  },
  fileButton: {
    borderColor: '#ff7849',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  fileButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#ff7849',
    borderRadius: 10,
    padding: 12,
    marginTop: 20,
  },
  submitButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});


