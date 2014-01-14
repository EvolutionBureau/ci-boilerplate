module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['src/scripts/*.js', 'src/scripts/vendor/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                }
            },
            sass: {
                files: [
                    'src/css/**/*'
                ],
                tasks: ['compass'],
                options: {
                    nospawn: true,
                    livereload: true
                }
            }
        },
        compass: {
            dev: {
                options: {
                    config: 'config/config.rb',  // css_dir = 'dev/css'
                    sassDir: 'src/css/sass',
                    cssDir: 'src/css'
                }
            }
        },
        // jsbeautifier: {
        //     files: [
        //         'src/scripts/**/*',
        //         'Gruntfile.js'
        //     ],
        //     options: {}
        // },
        // uglify: {
        //     options: {
        //         // expand: true,
        //         mangle: true,
        //         compress: true,
        //         report: 'min',
        //         preserveComments: false,
        //         banner: '',
        //         footer: ''
        //     },
        //     my_target: {
        //         files: {
        //             'src/scripts/dist/main.min.js': ['src/scripts/main.js']
        //         }
        //     }
        // },
        requirejs: {
          production: {
            options: {
              baseUrl: "src/scripts",
              mainConfigFile: "src/scripts/main.js",
              name: "main",
              out: "src/scripts/dist/main.min.js",
              include: ['vendor/requirejs/require.js']
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    // grunt.loadNpmTasks('grunt-jsbeautifier');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['requirejs', 'compass', 'watch']);
    grunt.registerTask('styles', ['compass']);
    // grunt.registerTask('scripts', ['uglify']);
    // grunt.registerTask('beautify', ['jsbeautifier']);

};
