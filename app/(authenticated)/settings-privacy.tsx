// app/(authenticated)/setting-privacy.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const SettingsPrivacy = () => {
  const [firstName, setFirstName] = useState('Daniel');
  const [lastName, setLastName] = useState('Dejen');
  const [username, setUsername] = useState('dan-kingo');
  const [email, setEmail] = useState('kabebel123@gmail.com');
  const [phone, setPhone] = useState('989842352');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Settings & Privacy</Text>
      <View style={styles.box}>
        <Text style={styles.sectionTitle}>Profile Settings</Text>

        <Text style={styles.label}>First Name</Text>
        <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} />

        <Text style={styles.label}>Last Name</Text>
        <TextInput style={styles.input} value={lastName} onChangeText={setLastName} />

        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} value={username} onChangeText={setUsername} />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SettingsPrivacy;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    padding: 16,
    flexGrow: 1,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  box: {
    backgroundColor: '#1f1f1f',
    borderRadius: 12,
    padding: 20,
  },
  sectionTitle: {
    color: '#eee',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  label: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#2a2a2a',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  saveButton: {
    marginTop: 10,
    backgroundColor: '#FF7A3D',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


