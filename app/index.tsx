import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'
import { Link, router, Stack } from 'expo-router'

export default function index() {
  return (
    <View style={styles.container}>
        <Link style={styles.text} href={{
          pathname: "/profile",
          params: { id: Math.random() },
        }}>Perfil</Link>
        <Button title="Go to Home" onPress={() => {router.push("/profile"), router.setParams({id: Math.random()})}} />

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