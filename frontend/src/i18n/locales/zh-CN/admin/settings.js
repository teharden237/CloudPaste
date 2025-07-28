export default {
  // 全局设置页面
  global: {
    title: "全局设置",
    description: "管理系统全局配置和代理签名设置",
    uploadSettings: {
      title: "上传限制设置",
      description: "设置文件上传的大小限制",
      maxUploadSizeLabel: "最大上传文件大小",
      maxUploadSizePlaceholder: "输入数字",
      unitKB: "KB",
      unitMB: "MB",
      unitGB: "GB",
      validationError: "请输入有效的上传大小限制",
    },
    proxySignSettings: {
      title: "代理签名设置",
      description: "配置文件访问的代理签名功能",
      signAllLabel: "签名所有请求",
      signAllHint: "启用后，所有文件访问请求都将使用代理签名",
      expiresLabel: "签名过期时间",
      expiresHint: "设置代理签名的过期时间，0表示永不过期",
      expiresUnit: "秒",
    },
    buttons: {
      updateSettings: "更新设置",
      updating: "更新中...",
    },
    messages: {
      updateSuccess: "设置更新成功",
      updateFailed: "更新设置失败",
    },
  },

  // 账号管理页面
  account: {
    title: "账号管理",
    description: "管理管理员账户信息，包括用户名和密码修改",
    adminInfo: {
      title: "管理员信息修改",
      description: "修改管理员用户名和密码",
      newUsernameLabel: "新用户名",
      newUsernameHint: "留空则不修改用户名",
      currentPasswordLabel: "当前密码",
      currentPasswordHint: "验证身份需要输入当前密码",
      newPasswordLabel: "新密码",
      newPasswordHint: "留空则不修改密码",
      newUsernamePlaceholder: "请输入新用户名",
      currentPasswordPlaceholder: "请输入当前密码",
      newPasswordPlaceholder: "请输入新密码",
      warningMessage: "修改后将自动退出登录，需要重新登录",
      updateButton: "更新账号信息",
      updating: "更新中...",
    },
    buttons: {
      updateAccount: "更新账号信息",
      updating: "更新中...",
    },
    messages: {
      updateSuccess: "账号信息更新成功",
      updateFailed: "更新账号信息失败",
      passwordRequired: "请输入当前密码",
      newPasswordRequired: "请输入新密码",
      newUsernameRequired: "请输入新用户名",
      newFieldRequired: "请至少填写新用户名或新密码中的一项",
      samePassword: "新密码不能与当前密码相同",
      logoutCountdown: "将在 {seconds} 秒后自动退出登录",
    },
  },

  // WebDAV设置页面
  webdav: {
    title: "WebDAV设置",
    description: "配置WebDAV协议相关的功能和参数",
    uploadSettings: {
      title: "WebDAV上传设置",
      description: "配置WebDAV客户端的上传处理方式",
      uploadModeLabel: "WebDAV上传模式",
      uploadModeHint: "选择WebDAV客户端的上传处理方式，worker部署的建议只使用直接上传模式",
      modes: {
        direct: "直接上传",
        multipart: "分片上传",
      },
    },
    protocolInfo: {
      title: "WebDAV协议信息",
      description: "WebDAV服务的基本信息和使用说明",
      webdavUrlLabel: "WebDAV地址",
      webdavUrlHint: "在WebDAV客户端中使用此地址连接",
      authMethodLabel: "认证方式",
      adminAuth: "管理员：用户名/密码",
      apiKeyAuth: "API密钥: 密钥/密钥",
      authHint: "推荐使用API密钥认证，更加安全",
    },
    buttons: {
      updateSettings: "更新设置",
      updating: "更新中...",
    },
    messages: {
      updateSuccess: "WebDAV设置更新成功",
      updateFailed: "更新WebDAV设置失败",
    },
  },
};
