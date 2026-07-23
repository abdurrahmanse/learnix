import React from 'react';

interface OtpEmailProps {
  otpCode: string;
  userName?: string;
}

export const OtpEmailTemplate: React.FC<OtpEmailProps> = ({
  otpCode,
  userName = 'User',
}) => {
  return (
    <div style={styles.main}>
      <div style={styles.container}>
        {/* Brand/Logo Placeholder */}
        <div style={styles.header}>
          <h1 style={styles.brandName}>Learnix</h1>
        </div>

        {/* Content */}
        <div style={styles.content}>
          <h2 style={styles.heading}>Verify your email address</h2>
          <p style={styles.text}>
            Hello {userName},
          </p>
          <p style={styles.text}>
            Thank you for registering. To complete your verification, please use the
            One-Time Password (OTP) below:
          </p>

          {/* OTP Code Display */}
          <div style={styles.otpContainer}>
            <p style={styles.otpCode}>{otpCode}</p>
          </div>

          <p style={styles.text}>
            <strong>Note:</strong> This code will expire in 10 minutes.
          </p>

          <hr style={styles.divider} />

          {/* Security Note */}
          <p style={styles.securityNote}>
            If you didn&apos;t request this email, there&apos;s nothing to worry about — you can safely ignore it.
            Never share your OTP with anyone.
          </p>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            © {new Date().getFullYear()} Learnix. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

// Inline styles for email clients compatibility
const styles = {
  main: {
    backgroundColor: '#f6f9fc',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
    padding: '40px 0',
  },
  container: {
    backgroundColor: '#ffffff',
    border: '1px solid #eee',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    margin: '0 auto',
    maxWidth: '560px',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#2563eb', // Blue brand color
    padding: '24px',
    textAlign: 'center' as const,
  },
  brandName: {
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: '700',
    margin: '0',
    letterSpacing: '1px',
  },
  content: {
    padding: '32px 40px',
  },
  heading: {
    color: '#333333',
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '20px',
  },
  text: {
    color: '#555555',
    fontSize: '16px',
    lineHeight: '24px',
    margin: '12px 0',
  },
  otpContainer: {
    backgroundColor: '#f3f4f6',
    border: '1px dashed #cbd5e1',
    borderRadius: '6px',
    margin: '24px 0',
    padding: '20px',
    textAlign: 'center' as const,
  },
  otpCode: {
    color: '#0f172a',
    fontSize: '32px',
    fontWeight: '700',
    letterSpacing: '8px',
    margin: '0',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #eaeaea',
    margin: '24px 0',
  },
  securityNote: {
    color: '#888888',
    fontSize: '14px',
    lineHeight: '20px',
    margin: '0',
  },
  footer: {
    backgroundColor: '#fafafa',
    borderTop: '1px solid #eaeaea',
    padding: '20px',
    textAlign: 'center' as const,
  },
  footerText: {
    color: '#a1a1aa',
    fontSize: '12px',
    margin: '0',
  },
};
