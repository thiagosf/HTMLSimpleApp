module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> by <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */\n', 
        mangle: false
      },
      app: {
        files: {
          'js/min/app-min.js': [
            'js/app.js'
          ]
        }
      },
      plugins: {
        files: {
          'js/min/plugins-min.js': [
            'vendor/jquery/dist/jquery.min.js', 
            'vendor/mustache/mustache.min.js', 
            'vendor/jquery.easing/js/jquery.easing.min.js'
          ]
        }
      }
    }, // uglify
    
    compass: {
      dist: {
        options: {
          config: "config.rb"
        }
      }
    },
    
    watch: {
      dist: {
        files: [
          'js/*',
          'scss/*', 
          'scss/**/*'
        ],
        tasks: ['compass', 'uglify:app'],
        options: {
          spawn: false,
        }
      }
    } // watch
  });
  
  // Plugins do grunt
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tarefas que serao executadas
  grunt.registerTask('default', ['compass', 'uglify']);

  // Tarefa para watch
  grunt.registerTask('w', ['watch']);
};
