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
            js : {
                files : {
                    'src/scripts/dist/main.min.js' : [
                        'src/scripts/vendor/jquery/jquery.js',
                        'src/scripts/vendor/underscore/underscore.js',
                        'src/scripts/vendor/backbone/backbone.js',
                        //'src/scripts/vendor/**/*.js',
                        'src/scripts/app/**/*.js',
                        'src/scripts/app/app.js',
                        'src/scripts/main.js'
                    ]
                }
            }
        }
    });
    
    // Register grunt tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default grunt task when running "grunt"
    grunt.registerTask('default', ['uglify', 'compass', 'watch']);

    // Compass task run "grunt styles"
    grunt.registerTask('styles', ['compass']);

    // Uglify scripts run "grunt scripts"
    grunt.registerTask('scripts', ['uglify']);

    // Beautify js run "grunt beautify"
    grunt.registerTask('beautify', ['jsbeautifier']);

};
