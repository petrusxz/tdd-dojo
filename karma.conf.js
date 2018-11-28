module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-jasmine-html-reporter'),
      require('karma-chrome-launcher'),
      require('@angular/cli/plugins/karma')
    ],
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    files: [{
      pattern: 'src/**/*.spec.ts',
      watched: true
    }, ],
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    client: {
      clearContext: false
    },
    preprocessors: {
      './src/tests.config.ts': ['@angular/cli']
    },
    angularCli: {
      config: './.angular-cli.json',
      environment: 'dev'
    },
    port: 9876,
    logLevel: config.LOG_INFO,
    reporters: ['kjhtml']
  });
}
