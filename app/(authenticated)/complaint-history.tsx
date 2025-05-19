// app/(authenticated)/complaint-history.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const complaints = [
  { id: '001', description: 'Unable to recharge my prepaid meter' },
  { id: '002', description: 'Received bill for a closed account.' },
  { id: '003', description: 'Bill reading issue.' },
  { id: '004', description: 'There is a bill issue in last month, the' },
  { id: '005', description: 'There is a power outage since last night.' },
  { id: '006', description: 'Nobody responds to my complaint ticket.' },
  { id: '007', description: 'I received poor service from customer care.' },
];

export default function ComplaintHistory() {
  const [search, setSearch] = useState('');

  const filtered = complaints.filter((c) =>
    c.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complaint History</Text>
      <TextInput
        style={styles.search}
        placeholder="Search complaints..."
        value={search}
        onChangeText={setSearch}
        placeholderTextColor="#999"
      />
      <View style={styles.listHeader}>
        <Text style={styles.headerText}>ID</Text>
        <Text style={styles.headerText}>Description</Text>
      </View>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.id}</Text>
            <Text style={styles.cell}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#1c1c1e',
    borderRadius: 15,
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  search: {
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
    padding: 10,
    color: '#fff',
    marginBottom: 10,
  },
  listHeader: {
    flexDirection: 'row',
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 5,
  },
  headerText: {
    flex: 1,
    color: '#999',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  cell: {
    flex: 1,
    color: '#eee',
  },
});

