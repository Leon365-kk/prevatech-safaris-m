// Simple Email Service for demo purposes
// In production, this would connect to a real backend email service

interface VerificationEmail {
  to: string;
  code: string;
  expiryMinutes: number;
  userName?: string;
}

class EmailService {
  // Send verification code via email (demo mode)
  async sendVerificationCode(emailData: VerificationEmail): Promise<{ success: boolean; message: string }> {
    try {
      const { to, code, expiryMinutes, userName } = emailData;
      
      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Log the email content to console (demo mode)
      console.log('=== EMAIL VERIFICATION CODE ===');
      console.log('To:', to);
      console.log('Subject: Secure Access Code - Prevatech Safaris');
      console.log('Verification Code:', code);
      console.log('Expires in:', expiryMinutes, 'minutes');
      console.log('User Name:', userName || 'Not provided');
      console.log('================================');
      
      return {
        success: true,
        message: `Demo: Verification code "${code}" prepared for ${to}. In production, this would be sent via email. Check console for details.`
      };
    } catch (error) {
      console.error('Email sending failed:', error);
      return {
        success: false,
        message: 'Failed to prepare verification email. Please try again.'
      };
    }
  }
}

// Export singleton instance
export const emailService = new EmailService();

export default EmailService;
