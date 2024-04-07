import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList,ImageBackground } from 'react-native';

const DeleteScreen = () => {
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [issue, setIssue] = useState('');
  const [status, setStatus] = useState('');
  const [ticketsData, setTicketsData] = useState([]);

  const handleDeleteTicket = () => {
    // Filter out the ticket with the entered name
    const updatedTickets = ticketsData.filter(ticket => ticket.name !== name);
    // Update the tickets data array with the filtered tickets
    setTicketsData(updatedTickets);
    // Reset input fields
    setName('');
    setProduct('');
    setIssue('');
    setStatus('');
  };

  const renderTicketItem = ({ item }) => (
    <View style={styles.ticketRow}>
      {/* <View style={styles.ticketCell}><Text>{item.name}</Text></View>
      <View style={styles.ticketCell}><Text>{item.product}</Text></View>
      <View style={styles.ticketCell}><Text>{item.issue}</Text></View>
      <View style={styles.ticketCell}><Text>{item.status}</Text></View> */}
    </View>
  );

  return (
    <ImageBackground
      source={require('../image/bgs1.jpg')} // Replace with the path to your background image
      style={styles.backgroundImage}
    >
    <View style={styles.container}>
      <Text style={styles.heading}>Delete a data</Text>
      <View style={styles.table}>
        {/* <View style={styles.tableHeader}> */}
          {/* <View style={styles.tableHeaderCell}><Text>Name</Text></View>
          <View style={styles.tableHeaderCell}><Text>Product</Text></View>
          <View style={styles.tableHeaderCell}><Text>Issue</Text></View>
          <View style={styles.tableHeaderCell}><Text>Status</Text></View> */}
        {/* </View> */}
        <FlatList
          data={ticketsData}
          renderItem={renderTicketItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={styles.inputContainer}>
      <Text style={styles.heading1}>Enter the Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.heading1}>Enter the Product</Text>
        <TextInput
          style={styles.input}
          value={product}
          onChangeText={setProduct}
        />
        <Text style={styles.heading1}>Enter the Issue</Text>
        <TextInput
          style={styles.input}
          value={issue}
          onChangeText={setIssue}
        />
        
        <TouchableOpacity style={styles.addButton} onPress={handleDeleteTicket}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  heading1: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginTop: 10,
  },
  
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
  },
  tableHeaderCell: {
    flex: 1,
    alignItems: 'center',
  },
  ticketRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingVertical: 10,
  },
  ticketCell: {
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    padding: 4,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    paddingTop:10,
    marginTop:25

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
   
  },
});

export default DeleteScreen;