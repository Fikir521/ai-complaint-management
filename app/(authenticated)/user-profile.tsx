import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function UserProfile() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>Daniel Dejen</Text>
      <Text style={styles.username}>dan-kingo</Text>

      <View style={styles.form}>
        <Text style={styles.label}>First Name</Text>
        <TextInput style={styles.input} value="Daniel" />

        <Text style={styles.label}>Last Name</Text>
        <TextInput style={styles.input} value="Dejen" />

        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} value="dan-kingo" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value="kabebel123@gmail.com" />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput style={styles.input} value="989842352" />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save Now</Text>
        </TouchableOpacity>

        <Text style={styles.changePassword}>
          Do you want to change your password?{' '}
          <Text style={styles.link}>Click Here</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    flex: 1,
    paddingHorizontal: 20,
  },
  name: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  username: {
    color: 'tomato',
    fontSize: 16,
    marginBottom: 20,
  },
  form: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 20,
  },
  label: {
    color: '#ccc',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#111',
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 5,
  },
  button: {
    backgroundColor: 'orangered',
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  changePassword: {
    marginTop: 20,
    color: '#ccc',
    textAlign: 'center',
  },
  link: {
    color: 'orangered',
    fontWeight: 'bold',
  },
});
