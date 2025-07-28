export default {
  // Global settings page
  global: {
    title: "Global Settings",
    description: "Manage system global configuration and proxy signature settings",
    uploadSettings: {
      title: "Upload Limit Settings",
      description: "Set file upload size limits",
      maxUploadSizeLabel: "Maximum Upload File Size",
      maxUploadSizePlaceholder: "Enter number",
      unitKB: "KB",
      unitMB: "MB",
      unitGB: "GB",
      validationError: "Please enter a valid upload size limit",
    },
    proxySignSettings: {
      title: "Proxy Signature Settings",
      description: "Configure proxy signature functionality for file access",
      signAllLabel: "Sign All Requests",
      signAllHint: "When enabled, all file access requests will use proxy signatures",
      expiresLabel: "Signature Expiration Time",
      expiresHint: "Set proxy signature expiration time, 0 means never expires",
      expiresUnit: "seconds",
    },
    buttons: {
      updateSettings: "Update Settings",
      updating: "Updating...",
    },
    messages: {
      updateSuccess: "Settings updated successfully",
      updateFailed: "Failed to update settings",
    },
  },

  // Account management page
  account: {
    title: "Account Management",
    description: "Manage administrator account information, including username and password modification",
    adminInfo: {
      title: "Administrator Information Modification",
      description: "Modify administrator username and password",
      newUsernameLabel: "New Username",
      newUsernameHint: "Leave blank to keep current username",
      currentPasswordLabel: "Current Password",
      currentPasswordHint: "Current password is required for identity verification",
      newPasswordLabel: "New Password",
      newPasswordHint: "Leave blank to keep current password",
      newUsernamePlaceholder: "Please enter new username",
      currentPasswordPlaceholder: "Please enter current password",
      newPasswordPlaceholder: "Please enter new password",
      warningMessage: "You will be automatically logged out after modification and need to log in again",
      updateButton: "Update Account Information",
      updating: "Updating...",
    },
    buttons: {
      updateAccount: "Update Account Information",
      updating: "Updating...",
    },
    messages: {
      updateSuccess: "Account information updated successfully",
      updateFailed: "Failed to update account information",
      passwordRequired: "Please enter current password",
      newPasswordRequired: "Please enter new password",
      newUsernameRequired: "Please enter new username",
      newFieldRequired: "Please fill in at least one of new username or new password",
      samePassword: "New password cannot be the same as current password",
      logoutCountdown: "Will automatically log out in {seconds} seconds",
    },
  },

  // WebDAV settings page
  webdav: {
    title: "WebDAV Settings",
    description: "Configure WebDAV protocol related functions and parameters",
    uploadSettings: {
      title: "WebDAV Upload Settings",
      description: "Configure WebDAV client upload processing method",
      uploadModeLabel: "WebDAV Upload Mode",
      uploadModeHint: "Select the upload processing method for the WebDAV client. For worker deployment, it is recommended to use only the direct upload mode.",
      modes: {
        direct: "Direct Upload",
        multipart: "Multipart Upload",
      },
    },
    protocolInfo: {
      title: "WebDAV Protocol Information",
      description: "Basic information and usage instructions for WebDAV service",
      webdavUrlLabel: "WebDAV Address",
      webdavUrlHint: "Use this address to connect in WebDAV client",
      authMethodLabel: "Authentication Method",
      adminAuth: "Administrator: Username/Password",
      apiKeyAuth: "API Key: Key/Key",
      authHint: "API key authentication is recommended for better security",
    },
    buttons: {
      updateSettings: "Update Settings",
      updating: "Updating...",
    },
    messages: {
      updateSuccess: "WebDAV settings updated successfully",
      updateFailed: "Failed to update WebDAV settings",
    },
  },
};
