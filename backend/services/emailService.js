// services/emailService.js
const logger = require('../utils/logger');

const BASE_URL = process.env.CLIENT_URL || 'http://localhost:3000';
const FROM = `"Fluenta" <${process.env.FROM_EMAIL || 'noreply@fluenta.app'}>`;

// Resend fue eliminado/deshabilitado como prueba.
// Para evitar que Render crashee si falta RESEND_API_KEY, este servicio hace "silent disable".
// Cuando se intente enviar un email, solo se loggea y no se envía nada.

exports.sendVerificationEmail = async (email, name, token) => {
  const url = `${BASE_URL}/verify-email/${token}`;
  logger.warn(
    `Email provider disabled (Resend removed). Would send verification email to ${email}. URL=${url} FROM=${FROM} Name=${name}`
  );
};

exports.sendPasswordResetEmail = async (email, name, token) => {
  const url = `${BASE_URL}/reset-password/${token}`;
  logger.warn(
    `Email provider disabled (Resend removed). Would send password reset email to ${email}. URL=${url} FROM=${FROM} Name=${name}`
  );
};

exports.sendLevelCertificate = async (email, name, language, level) => {
  logger.warn(
    `Email provider disabled (Resend removed). Would send level certificate to ${email}. Level=${level} Language=${language} Name=${name} FROM=${FROM}`
  );
};
