module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		jshint:{
			build:['Gruntfile.js','routes/*.js'],
			option:{
				jshintrc:'node_modules\grunt-contrib-jshint\node_modules\jshint\node_modules\shelljs\.jshintrc'
			}
		}
	
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.registerTask('default',['jshint']);
};