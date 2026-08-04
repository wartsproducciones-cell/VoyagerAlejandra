export const googleWorkspace = {
  isConfigured: () => false,
  calendarBookMeeting: async (...args: any[]) => ({ success: false, message: 'Not configured' }),
  gmailSendAlert: async (...args: any[]) => ({ success: false, message: 'Not configured' }),
};
