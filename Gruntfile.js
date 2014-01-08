module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            js: {
                files: [
                    'src/js/**/*'
                ],
                tasks: ['uglify'],
                options: {
                    nospawn: true
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
                'src/js/**/*',
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
            my_target: {
                files: {
                    'src/js/dist/require.min.js': ['src/js/lib/require-2.1.9.js'],
                    'src/js/dist/jquery.min.js': ['src/js/lib/jquery-1.10.2.js'],
                    'src/js/dist/main.min.js': ['src/js/main.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['compass', 'uglify', 'watch']);
    grunt.registerTask('styles', ['compass']);
    grunt.registerTask('scripts', ['uglify']);
    grunt.registerTask('beautify', ['jsbeautifier']);

};
