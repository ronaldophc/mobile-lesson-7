import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link, useGlobalSearchParams } from 'expo-router'

export default function profile() {

    const params = useGlobalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Id: {params.id}</Text>
      <Link style={styles.text} href={"/"}>Home</Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20,
    }
  });