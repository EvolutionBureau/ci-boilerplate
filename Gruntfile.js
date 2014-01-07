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
                'src/js/**/*'
            ],
            options: {}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-develop');
    grunt.loadNpmTasks('grunt-jsbeautifier');

    grunt.registerTask('default', ['compass', 'watch']);
    grunt.registerTask('styles', ['compass']);
    grunt.registerTask('beautify', ['jsbeautifier']);

};
