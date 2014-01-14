module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['src/scripts/main.js', 'src/scripts/vendor/*.js'],
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
                    nospawn: true
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
        jsbeautifier: {
            files: [
                'src/scripts/**/*',
                'Gruntfile.js'
            ],
            options: {}
        },
        uglify: {
            options: {
                // expand: true,
                mangle: true,
                compress: true,
                report: 'min',
                preserveComments: false,
                banner: '',
                footer: ''
            },
            // my_target: {
            //     files: {
            //         'src/scripts/dist/main.min.js': ['src/scripts/main.js']
            //     }
            // }
            js : {
                files : {
                    'src/scripts/dist/main.min.js' : [
                        'src/scripts/vendor/backbone/backbone.js',
                        'src/scripts/vendor/**/*.js',
                        'src/scripts/views/**/*.js',
                        'src/scripts/main.js'
                    ]
                }
            }
        }

        // Future support for requirejs
        //,
        // requirejs: {
        //   production: {
        //     options: {
        //       baseUrl: "src/scripts",
        //       mainConfigFile: "src/scripts/main.js",
        //       name: "main",
        //       out: "src/scripts/dist/main.min.js",
        //       include: ['vendor/requirejs/require.js']
        //     }
        //   }
        // }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Clean the vendor files using "grunt bower_clean" or 
    // "grunt bower_clean --dry-run" to see what files will be removed
    grunt.loadNpmTasks('grunt-bower-clean');

    // Future support for requirejs
    //grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default grunt task when running "grunt"
    grunt.registerTask('default', ['uglify', 'compass', 'watch']);

    // Compass task run "grunt styles"
    grunt.registerTask('styles', ['compass']);

    // Uglify scripts run "grunt scripts"
    grunt.registerTask('scripts', ['uglify']);

    // Beautify js run "grunt beautify"
    grunt.registerTask('beautify', ['jsbeautifier']);

};
