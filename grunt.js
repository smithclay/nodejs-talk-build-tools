module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> */'
      },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', 'js/reveal.js'],
        dest: 'js/reveal.concat.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'js/reveal.min.js'
      }
    },
    lint: {
      files: ['grunt.js', 'js/reveal.js']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true
      },
      globals: {
        exports: true,
        module: false
      }
    },
    uglify: {}
  });
  // Build task.
  grunt.registerTask('build', 'concat min');

  // Default task.
  grunt.registerTask('default', 'lint test concat min');

};