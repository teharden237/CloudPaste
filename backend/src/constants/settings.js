/**
 * 系统设置相关常量定义
 *
 */

/**
 * 设置分组常量
 *
 */
export const SETTING_GROUPS = {
  GLOBAL: 1, // 全局设置
  WEBDAV: 3, // WebDAV设置
  SYSTEM: 99, // 系统内部设置（不在前端显示）
};

/**
 * 设置类型常量
 * 支持不同的输入组件类型
 */
export const SETTING_TYPES = {
  TEXT: "text", // 文本输入框
  NUMBER: "number", // 数字输入框
  BOOL: "bool", // 开关组件
  SELECT: "select", // 下拉选择框
  TEXTAREA: "textarea", // 多行文本框
};

/**
 * 设置权限标识常量
 * 使用位标志控制设置项的访问权限
 */
export const SETTING_FLAGS = {
  PUBLIC: 0, // 公开可见
  PRIVATE: 1, // 需要管理员权限
  READONLY: 2, // 只读
  DEPRECATED: 3, // 已废弃
};

/**
 * 分组显示名称映射
 * 用于前端界面显示
 */
export const SETTING_GROUP_NAMES = {
  [SETTING_GROUPS.GLOBAL]: "全局设置",
  [SETTING_GROUPS.WEBDAV]: "WebDAV设置",
  [SETTING_GROUPS.SYSTEM]: "系统设置",
};

/**
 * 设置项默认配置
 * 定义各个设置项的元数据
 */
export const DEFAULT_SETTINGS = {
  // 全局设置组
  max_upload_size: {
    key: "max_upload_size",
    type: SETTING_TYPES.NUMBER,
    group_id: SETTING_GROUPS.GLOBAL,
    help: "单次上传文件的最大大小限制(MB)，建议根据服务器性能设置。",
    options: null,
    sort_order: 1,
    flag: SETTING_FLAGS.PUBLIC,
    default_value: "100",
  },

  proxy_sign_all: {
    key: "proxy_sign_all",
    type: SETTING_TYPES.BOOL,
    group_id: SETTING_GROUPS.GLOBAL,
    help: "开启后所有代理访问都需要签名验证，提升安全性。",
    options: null,
    sort_order: 2,
    flag: SETTING_FLAGS.PUBLIC,
    default_value: "false",
  },

  proxy_sign_expires: {
    key: "proxy_sign_expires",
    type: SETTING_TYPES.NUMBER,
    group_id: SETTING_GROUPS.GLOBAL,
    help: "代理签名的过期时间（秒），0表示永不过期。",
    options: null,
    sort_order: 3,
    flag: SETTING_FLAGS.PUBLIC,
    default_value: "0",
  },

  // WebDAV设置组
  webdav_upload_mode: {
    key: "webdav_upload_mode",
    type: SETTING_TYPES.SELECT,
    group_id: SETTING_GROUPS.WEBDAV,
    help: "WebDAV客户端的上传模式选择。直接上传适合小文件，分片上传适合大文件。",
    options: JSON.stringify([
      { value: "direct", label: "直接上传" },
      { value: "multipart", label: "分片上传" },
    ]),
    sort_order: 1,
    flag: SETTING_FLAGS.PUBLIC,
    default_value: "multipart",
  },

  // 系统内部设置（不在前端显示）
  db_initialized: {
    key: "db_initialized",
    type: SETTING_TYPES.BOOL,
    group_id: SETTING_GROUPS.SYSTEM,
    help: "数据库初始化状态标记，系统内部使用。",
    options: null,
    sort_order: 1,
    flag: SETTING_FLAGS.READONLY,
    default_value: "false",
  },

  schema_version: {
    key: "schema_version",
    type: SETTING_TYPES.NUMBER,
    group_id: SETTING_GROUPS.SYSTEM,
    help: "数据库架构版本号，系统内部使用。",
    options: null,
    sort_order: 2,
    flag: SETTING_FLAGS.READONLY,
    default_value: "1",
  },
};

/**
 * 验证设置值的辅助函数
 * @param {string} key - 设置键名
 * @param {any} value - 设置值
 * @param {string} type - 设置类型
 * @returns {boolean} 验证结果
 */
export function validateSettingValue(key, value, type) {
  switch (type) {
    case SETTING_TYPES.NUMBER:
      const num = Number(value);
      if (isNaN(num)) return false;

      // 特定设置项的范围验证
      if (key === "max_upload_size") {
        return num > 0; // 非负数
      }
      if (key === "proxy_sign_expires") {
        return num >= 0; // 非负数
      }
      return true;

    case SETTING_TYPES.BOOL:
      return value === "true" || value === "false" || value === true || value === false;

    case SETTING_TYPES.SELECT:
      if (key === "webdav_upload_mode") {
        return ["direct", "multipart"].includes(value);
      }
      return true;

    case SETTING_TYPES.TEXT:
    case SETTING_TYPES.TEXTAREA:
      return typeof value === "string";

    default:
      return true;
  }
}

/**
 * 转换设置值为正确的类型
 * @param {any} value - 原始值
 * @param {string} type - 目标类型
 * @returns {any} 转换后的值
 */
export function convertSettingValue(value, type) {
  switch (type) {
    case SETTING_TYPES.NUMBER:
      return Number(value);
    case SETTING_TYPES.BOOL:
      return value === "true" || value === true;
    case SETTING_TYPES.TEXT:
    case SETTING_TYPES.TEXTAREA:
    case SETTING_TYPES.SELECT:
      return String(value);
    default:
      return value;
  }
}
