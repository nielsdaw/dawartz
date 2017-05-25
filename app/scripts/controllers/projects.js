'use strict';

/**
 * @ngdoc function
 * @name dawartzApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the dawartzApp
 */
angular.module('dawartzApp')
  .controller('ProjectsCtrl', function () {
	
	// Simple menu item control
  	this.menuItems = ['All Projects', 'School Projects', 'Personal Projects'];
  	this.activeMenu = this.menuItems[0];

  	this.setActive = function(menuItem) {
    	this.activeMenu = menuItem;
 	};

  // School projects
  this.personalProjects = [
  	{
  		img: 'images/bug-runner.png',
  		title: 'Bug Runner',
  		description: 'My version of the classic frogger game. Disclaimer:'+
  					 'This is developed by following the course \'Object oriented JavaScript\''+
  					 ', and the engine.js file (the picture manipulation) is pre-made by the udacity team. '+
  					 'The logic of the game everything else is developed by me.',
  	 	links: [
  	 		{
  	 			a: 'https://www.dawartz.dk/bug-runner/',
  	 			text: 'Try to beat the highscore',
  	 			fa: 'fa-trophy'
  	 		},
  	 		{
  	 			a: 'https://github.com/nielsdaw/Bug-Runner',
  	 			text: 'See code on Github',
  	 			fa: 'fa-github github-grey'
  	 		}
  	 	]
  	},
  	{
  		img: 'images/web.png',
  		title: 'Website',
  		description: 'I developed the website for my mother\'s company.'+
  					 ' The website is staitc and developed with HTML5, CSS3,'+
  					 ' vanillaJS, some jQuery bootstrap and PHP.',
  	 	links: [
  	 		{
  	 			a: 'http://www.anettedawartz.dk',
  	 			text: 'Check out the website (it\'s in Danish)',
  	 			fa: 'fa-file-code-o'
  	 		},
  	 	]
  	},
    {
      img: 'images/dawartz.png',
      title: 'dawartz.dk',
      description: 'dawartz.dk is made with HTML5, Sass and Angular,'+
                   'using the Yeoman Generator.'+
                   'All the code is uploaded to github and deployed on Heroku',
      links: [
        {
          a: 'https://github.com/nielsdaw/dawartz',
          text: 'See code on Github',
          fa: 'fa-github github-grey'
        },
      ]
    },
  ];

  // Personal Projects
  this.schoolProjects = [
  	{
  		img: 'images/social_me_logo.png',
  		title: 'The Social Me',
  		description: 'My thesis project about Deleuzes Data Doubles.'+
  					 'I developed a web application (in Python/Django)'+
  					 'that allows the user to get a quick overview of his/her'+
  					 'information online, based on data from social media API’s'+
  					 '(Facebook, Instagram, LinkedIn & Spotify). The app is deployed on Heroku.',
  	 	links: [
  	 		{
  	 			a: 'https://the-social-me.herokuapp.com',
  	 			text: 'The Social Me on Heroku',
  	 			fa: 'fa-cloud'
  	 		},
  	 		{
  	 			a: 'http://www.github.com/nielsdaw/Social-Me',
  	 			text: 'See code on Github',
  	 			fa: 'fa-github github-grey'
  	 		}
  	 	]
  	},
  	{
  		img: 'images/blog.png',
  		title: 'Blog',
  		description: 'My first project was to develop a web application using '+
  					 'HTML, CSS, native JavaScript, PHP and MySql. The application is a '+
  					 'simple blog where you can create a user, write blog post and make comments.',
  	 	links: [
  	 		{
  	 			a: 'https://www.dawartz.dk/blog/',
  	 			text: 'Try the blog',
  	 			fa: 'fa-pencil-square-o'
  	 		}
  	 	]
  	},
  	{
  		img: 'images/project.png',
  		title: 'Project & Team Organizer',
  		description: 'The project was to develop a web application using '+
  					 'HTML, CSS, native JavaScript, PHP and MySql. The application is '+
  					 'makes it possible for students and teachers, to organize projects '+
  					 'and which students are in which teams.',
  	 	links: [
  	 		{
  	 			a: 'https://www.dawartz.dk/project1/',
  	 			text: 'Try the application',
  	 			fa: 'fa-archive'
  	 		},
  	 		{
  	 			a: 'https://github.com/ZuzanaLietavcova/Training-center-project',
  	 			text: 'See code on Github',
  	 			fa: 'fa-github github-grey'
  	 		}
  	 	]
  	},
  ];

  // Merge both arrays
  this.allProjects = this.schoolProjects.concat(this.personalProjects);

  // Set currentProject to all projecst
  this.curentProjects = this.allProjects;

  // Change preview
  this.changePreview = function(menuitem){
  	switch (menuitem) {
      case this.menuItems[0]:
          this.showAllProjects();
          break;
      case this.menuItems[1]: 
          this.showSchoolProjects();
          break;
      case this.menuItems[2]: 
          this.showPersonalProjects();
          break;
    }
  };

  // Personal Projects
  this.showPersonalProjects = function(){
  	this.curentProjects = this.personalProjects;
  };

  // Show only school projects
  this.showSchoolProjects = function(){
  	this.curentProjects = this.schoolProjects;
  };

  // Show all projects
  this.showAllProjects = function(){
  	this.curentProjects = this.allProjects;
  };

});
