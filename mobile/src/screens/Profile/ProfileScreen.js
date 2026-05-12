import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import useAuthStore from '../../store/authStore';

export default function ProfileScreen() {
  const { user, logout } = useAuthStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.text}>{user?.name ? `Hola, ${user.name}` : '—'}</Text>

      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0F1E', padding: 20, justifyContent: 'center' },
  title: { color: '#F1F5F9', fontSize: 22, fontWeight: '700', marginBottom: 12 },
  text: { color: '#94A3B8', marginBottom: 24 },
  button: { backgroundColor: '#EF4444', borderRadius: 12, padding: 14, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '800' },
});

