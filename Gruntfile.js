module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // },
    
    copy: {
      main: {
        files: [
          {src: ['bootstrap3/_gh_pages/assets/js/bootstrap.js'], dest: 'assets/', filter: 'isFile'},
          {src: ['bookstrap.js'], dest: 'assets/', filter: 'isFile'},
          {flatten: true, expand: true, src: ['assets/*'], dest: 'Samples/', filter: 'isFile'},
          {flatten: true, expand: true, src: ['assets/*'], dest: 'Samples/NTS.PhD/', filter: 'isFile'}
        ]
      }
    },

    less: {
      development: {
        files: {
          "assets/bookstrap.css": "lesscss/bookstrap.less"
        }
      },
      production: {
        options: {
          yuicompress: true
        },
        files: {
          "assets/bookstrap.min.css": "lesscss/bookstrap.less"
        }
      }
    },
    
    pandoc: {
      
    }
    
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // less
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // tasks
  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['less', 'copy', 'pandoc']);
  
  // costum pandoc task
  grunt.registerTask('pandoc', 'pandoc output', function(arg1, arg2) {
    if (arguments.length === 0) {
      grunt.log.writeln(this.name + ", no args");
    } else {
      grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
    }
  });

};