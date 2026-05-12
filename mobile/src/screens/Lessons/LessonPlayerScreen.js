import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LessonPlayerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reproductor de Lección</Text>
      <Text style={styles.subtitle}>Pantalla base (se ampliará con el contenido del frontend).</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0F1E', padding: 20, justifyContent: 'center' },
  title: { color: '#F1F5F9', fontSize: 22, fontWeight: '700', marginBottom: 8 },
  subtitle: { color: '#94A3B8' },
});

