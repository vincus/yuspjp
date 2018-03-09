/**
 * Gruntfile for task automation.
 * Includes js minify and less compiling.
 * @author György Herbszt
 */
module.exports = function (grunt) {
    "use strict";
    require('jit-grunt');

    grunt.initConfig({
        uglify: {
            my_target: {
                options: {
                    sourceMap: true
                },
                files: {
                    'dist/yusp-sandbox.min.js': [
                        'js/main.js'
                    ]
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2,
                    sourceMap: true,
                    sourceMapURL: 'yusp-sandbox.min.css.map',
                    sourceMapRootpath: '/'
                },
                files: [
                    { 'dist/yusp-sandbox.min.css': 'less/yusp-sandbox.less' }
                ]
            }
        },
        watch: {
            scripts: {
                files: 'js/**/*.js',
                tasks: ['uglify'],
                options: {
                    interrupt: true
                }
            },
            styles: {
                files: ['less/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('js', ['uglify']);
    grunt.registerTask('default', ['uglify', 'less', 'watch']);
};