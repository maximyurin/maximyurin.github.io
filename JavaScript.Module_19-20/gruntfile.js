module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ''
      },
      dist: {
        src: ['javascript/src/*.js'],
        dest: 'javascript/dist/script.min.js',
        src: ['css/dist/*.css'],
        dest: 'css/dist/style.min.css'
      }
    },
    uglify:{
      dist: {
        src: ['javascript/dist/script.min.js'],
        dest: 'javascript/dist/script.min.js',
      }
    },
    sass:{
      dist: {
      files: [{
        expand: true,
        cwd: 'css/src',
        src: ['*.scss'],
        dest: 'css/dist',
        ext: '.min.css'
      }]
    }
    },
    cssmin:{
      dist: {
        src: ['css/dist/style.min.css'],
        dest: 'css/dist/style.min.css'
      }
    },
    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['css/src/*.scss'],
        tasks: ['sass']
    }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin']);

};