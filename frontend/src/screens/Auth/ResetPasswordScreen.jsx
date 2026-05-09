// src/screens/Auth/ResetPasswordScreen.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { authAPI } from '../../services/api';
import Button from '../../components/common/Button';
import styles from './Auth.module.css';

const PASSWORD_REQS = [
  { re: /.{8,}/,      label: 'Mínimo 8 caracteres' },
  { re: /[A-Z]/,      label: 'Una mayúscula' },
  { re: /[a-z]/,      label: 'Una minúscula' },
  { re: /\d/,         label: 'Un número' },
];

function passwordStrong(password) {
  return PASSWORD_REQS.every(r => r.re.test(password));
}

export default function ResetPasswordScreen() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword]       = useState('');
  const [confirm, setConfirm]         = useState('');
  const [showPw, setShowPw]           = useState(false);
  const [loading, setLoading]         = useState(false);
  const [done, setDone]               = useState(false);
  const [invalid, setInvalid]         = useState(false);

  // Quick check on mount — if no token param, redirect
  useEffect(() => {
    if (!token) navigate('/login', { replace });
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      toast.error('Las contraseñas no coinciden');
      return;
    }
    if (!passwordStrong(password)) {
      toast.error('La contraseña no cumple los requisitos');
      return;
    }
    setLoading(true);
    try {
      await authAPI.resetPassword(token, password);
      setDone(true);
      toast.success('Contraseña actualizada');
    } catch {
      toast.error('El enlace expiró o es inválido');
      setInvalid(true);
    } finally {
      setLoading(false);
    }
  };

  if (done || invalid) {
    return (
      <div className={styles.formContainer}>
        <div className={invalid ? styles.errorBox : styles.successBox}>
          <h3>{invalid ? '❌ Enlace inválido' : '✅ Contraseña actualizada'}</h3>
          <p>
            {invalid
              ? 'Este enlace expiró o ya fue utilizado. Solicita uno nuevo.'
              : 'Ya puedes iniciar sesión con tu nueva contraseña.'}
          </p>
        </div>
        <p className={styles.switchAuth}>
          <Link to="/login" className={styles.switchLink}>← Volver al inicio de sesión</Link>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Nueva contraseña</h2>
        <p className={styles.formSubtitle}>Escribe tu nueva contraseña</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Password */}
        <div className={styles.field}>
          <label className={styles.label}>Contraseña</label>
          <div className={styles.passwordWrap}>
            <input
              type={showPw ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="new-password"
            />
            <button type="button" className={styles.eyeBtn} onClick={() => setShowPw(p => !p)}>
              {showPw ? '🙈' : '👁️'}
            </button>
          </div>
          {/* Requisitos */}
          <div className={styles.passwordStrength}>
            {PASSWORD_REQS.map(r => (
              <span key={r.label} className={r.re.test(password) ? styles.reqMet : ''}
                    style={{ fontSize: '11px', color: r.re.test(password) ? 'var(--accent-emerald)' : 'var(--text-muted)', fontWeight: '500' }}>
                ✓ {r.label}
              </span>
            ))}
          </div>
        </div>

        {/* Confirmar contraseña */}
        <div className={styles.field}>
          <label className={styles.label}>Confirmar contraseña</label>
          <div className={styles.passwordWrap}>
            <input
              type={showPw ? 'text' : 'password'}
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="new-password"
            />
          </div>
          {confirm && password !== confirm && (
            <span style={{ fontSize: '11px', color: 'var(--accent-red)' }}>Las contraseñas no coinciden</span>
          )}
        </div>

        <Button type="submit" loading={loading} fullWidth size="lg">
          Guardar nueva contraseña
        </Button>
      </form>

      <p className={styles.switchAuth}>
        <Link to="/login" className={styles.switchLink}>← Volver al inicio de sesión</Link>
      </p>
    </div>
  );
}