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

    this.jobs = [
        {
            title: 'IT Consultant',
            period: '2017- (current position)',
            company: 'Enioka (Paris, France)',
            companyColorId: 'enioka-orange',
            description: 'Working as a consultant/developer for a smaller consultant company (25-30 people). In particular I participate in the development of a wide variety of different- and complex projects for clients such as Pickup, Nexity & Geodis.',
            website: 'http://enioka.com'
        },
        {
            title: 'Digital Project Assistant',
            period: '2013-2015 (2½ years)',
            company: 'OgilvyOne (Copenhagen, Denmark)',
            companyColorId: 'ogilvy-red',
            description: 'Working with strategy, design, development and maintenance of emails and websites for some of the biggest companies in Denmark (Direct Marketing). Primarily working with the CRM system Agillic Dialogue in order to automate flows between web, e-mail and text messages. In terms of web developing, I was using HTML, CSS, native JavaScript and jQuery for the front-end and Java (JSP/Servlets) for the back-end.Furthermore, I did quantitative analyses of different data from clients, in order to improve performance and value.',
            website: 'http://ogilvy.dk'
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
        'Git',
        'Bootstrap',
        'NPM',
        'Bower',
        'Gulp/Grunt',
        'User Centred Design',
        'C#',
    ];

    this.skillsOther = [
    	'Android Studio (Java)',
    	'xcode (objective C)',
    	'C',
        'XML',
    	'Heroku',
        'LaTeX',
    ];

  });
