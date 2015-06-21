module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'ftp-deploy': {
      build:{
        auth: {
          host: '78.33.15.210',
          port: 21,
          authKey: 'key1'
        },
        src: 'opencart/catalog/view/theme/',
        dest: 'catalog/view/theme/',
        exclusions: ['**/.DS_Store', '**/Thumbs.db']
      }
    }
  });

  grunt.loadNpmTasks('grunt-ftp-deploy');

  // Default task(s).
  grunt.registerTask('default', ['ftp-deploy']);

};
