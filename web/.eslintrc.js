module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    semi: false,
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4',
    },
  },
  parser: 'babel-eslint',
};
