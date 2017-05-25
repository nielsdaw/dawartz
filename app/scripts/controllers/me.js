'use strict';

/**
 * @ngdoc function
 * @name dawartzApp.controller:MeCtrl
 * @description
 * # MeCtrl
 * Controller of the dawartzApp
 */
angular.module('dawartzApp')
  .controller('MeCtrl', function () {
    
    // hack to show talk bubble
    this.showBubble = false;

    this.socialMedias = [
        {
            link: 'http://www.linkedin.dk/in/nielsdawartz',
            fa: 'fa-linkedin-square',
        },
        {
            link: 'http://www.github.com/nielsdaw',
            fa: 'fa-github github-grey',
        },
        {
            link: 'http://www.facebook.dk/dawartz',
            fa: 'fa-facebook-official',
        },
        {
            link: 'http://www.soundcloud.com/nillernoels',
            fa: 'fa-twitter',
        },
        {
            link: 'http://www.twitter.com/nillernoels',
            fa: 'fa-soundcloud soundcloud-orange',
        },
        {
            link: 'href="http://www.vimeo.com/nielsdaw',
            fa: 'fa-vimeo',
        }
    ];

    this.skills = [
    	'HTML5',
    	'CSS3',
        'Sass',
    	'JavaScript',
    	'jQuery',
    	'Angular',
    	'Java',
    	'Python',
    	'php',
    	'Django',
        'SQL',
        'Bootstrap',
        'NPM',
        'Bower',
        'Gulp/Grunt',
        'User Centred Design'
    ];

    this.skillsOther = [
    	'.net (C#)',
    	'Android Studio (Java)',
    	'xcode (objective C)',
    	'C',
        'XML',
    	'Heroku',
        'LaTeX',
    ];



  });
