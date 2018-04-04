module.exports = function(config) {
  config.set({
    frameworks: ['jasmine-jquery', 'jasmine'],

    files: [
      'lib/**/*.js',
      'src/**/*.js',
      'specs/**/*.js'
    ],

    reporters: ['progress'],

    browsers: ['ChromeHeadless']
  })
}
