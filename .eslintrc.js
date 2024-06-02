module.exports = {
  root: true,
  extends: ['@react-native', 'prettier', 'plugin:prettier/recommended'],
  plugins: [
    ['import', {libraryName: '@ant-design/react-native'}], // 与 Web 平台的区别是不需要设置 style
  ],
};
