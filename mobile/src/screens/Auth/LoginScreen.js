import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import useAuthStore from '../../store/authStore';

export default function LoginScreen({ navigation }) {
  const { login, isLoading } = useAuthStore();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setError(null);
    const result = await login(form.email, form.password);
    if (result.success) {
      navigation?.replace?.('Main');
    } else {
      setError(result.error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="tu@correo.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={form.email}
        onChangeText={(email) => setForm((p) => ({ ...p, email }))}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        autoCapitalize="none"
        value={form.password}
        onChangeText={(password) => setForm((p) => ({ ...p, password }))}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={isLoading}>
        {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Entrar</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation?.navigate?.('Register')} style={styles.link}>
        <Text style={styles.linkText}>No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0A0F1E', justifyContent: 'center' },
  title: { color: '#F1F5F9', fontSize: 22, fontWeight: '700', marginBottom: 16 },
  input: { backgroundColor: '#0F172A', borderWidth: 1, borderColor: 'rgba(99,102,241,0.15)', borderRadius: 12, padding: 12, color: '#F1F5F9', marginBottom: 12 },
  button: { backgroundColor: '#6366F1', borderRadius: 12, padding: 14, alignItems: 'center', marginTop: 6 },
  buttonText: { color: '#fff', fontWeight: '700' },
  error: { color: '#F87171', marginBottom: 10 },
  link: { marginTop: 16, alignItems: 'center' },
  linkText: { color: '#A5B4FC' },
});

