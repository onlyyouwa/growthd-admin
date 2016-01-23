module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      // if any .less file changes in directory "public/css/" run the "less"-task.
      files: "less/*.less",
      tasks: ["less"]
    },
    // "less"-task configuration
    less: {
      // production config is also available
      development: {
        files: {
          // compilation.css  :  source.less
          "css/custom.css": "less/app.less"
        }
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['watch']);

};