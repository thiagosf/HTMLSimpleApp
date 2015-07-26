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
            'vendor/fastclick/lib/fastclick.js', 
            'vendor/foundation/js/foundation/foundation.js', 
            'vendor/foundation/js/foundation/foundation.interchange.js', 
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
    }, // watch
  });
  
  // Plugins do grunt
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tarefas
  grunt.registerTask('default', ['compass', 'uglify']);
  grunt.registerTask('w', ['watch']);
  grunt.registerTask('p', ['uglify:plugins']);
};
