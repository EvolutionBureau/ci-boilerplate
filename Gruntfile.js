module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            js: {
                files: [
                    'src/js/**/*'
                ],
                tasks: ['compass'],
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
                report: 'gzip',
                preserveComments: false,
                banner: '',
                footer: ''
            },
            my_target: {
                files: {
                    'src/js/dist/require.min.js': ['src/js/require-2.1.9.js'],
                    'src/js/dist/lib.min.js': ['src/js/lib/**/*.js'],
                    'src/js/dist/main.js': ['src/js/lib/**/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['compass', 'watch']);
    grunt.registerTask('styles', ['compass']);
    grunt.registerTask('scripts', ['uglify']);
    grunt.registerTask('beautify', ['jsbeautifier']);

};
