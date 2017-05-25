"use strict";angular.module("dawartzApp",["ui.router","ngAnimate"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("home",{url:"/",templateUrl:"views/main.html"}).state("me",{url:"/me",templateUrl:"views/me.html",controller:"MeCtrl",controllerAs:"me"}).state("projects",{url:"/projects",templateUrl:"views/projects.html",controller:"ProjectsCtrl",controllerAs:"project"})}]).animation(".fade-project",function(){return{enter:function(a,b){a.css("display","none"),$(a).fadeIn(1500,function(){b()})},leave:function(a,b){$(a).fadeOut(1e3,function(){b()})},move:function(a,b){a.css("display","none"),$(a).fadeOut(500,function(){b()})}}}),angular.module("dawartzApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("dawartzApp").controller("MeCtrl",function(){this.showBubble=!1,this.socialMedias=[{link:"http://www.linkedin.dk/in/nielsdawartz",fa:"fa-linkedin-square"},{link:"http://www.github.com/nielsdaw",fa:"fa-github github-grey"},{link:"http://www.facebook.dk/dawartz",fa:"fa-facebook-official"},{link:"http://www.soundcloud.com/nillernoels",fa:"fa-twitter"},{link:"http://www.twitter.com/nillernoels",fa:"fa-soundcloud soundcloud-orange"},{link:'href="http://www.vimeo.com/nielsdaw',fa:"fa-vimeo"}],this.skills=["HTML5","CSS3","JavaScript","jQuery","Angular","Java","Python","php","Django","SQL","Bootstrap","User Centred Design"],this.skillsOther=[".net (C#)","Android Studio (Java)","xcode (objective C)","C","XML","Heroku","LaTeX"]}),angular.module("dawartzApp").controller("ProjectsCtrl",function(){this.menuItems=["All Projects","School Projects","Personal Projects"],this.activeMenu=this.menuItems[0],this.setActive=function(a){this.activeMenu=a},this.personalProjects=[{img:"images/bug-runner.f228f821.png",title:"Bug Runner",description:"My version of the classic frogger game. Disclaimer:This is developed by following the course 'Object oriented JavaScript', and the engine.js file (the picture manipulation) is pre-made by the udacity team. The logic of the game everything else is developed by me.",links:[{a:"https://www.dawartz.dk/bug-runner/",text:"Try to beat the highscore",fa:"fa-trophy"},{a:"https://github.com/nielsdaw/Bug-Runner",text:"See code on Github",fa:"fa-github github-grey"}]},{img:"images/web.1e4d3814.png",title:"Website",description:"I developed the website for my mother's company. The website is staitc and developed with HTML5, CSS3, vanillaJS, some jQuery bootstrap and PHP.",links:[{a:"http://www.anettedawartz.dk",text:"Check out the website (it's in Danish)",fa:"fa-file-code-o"}]}],this.schoolProjects=[{img:"images/social_me_logo.f229ff6f.png",title:"The Social Me",description:"My thesis project about Deleuzes Data Doubles.I developed a web application (in Python/Django)that allows the user to get a quick overview of his/herinformation online, based on data from social media API’s(Facebook, Instagram, LinkedIn & Spotify).",links:[{a:"https://the-social-me.herokuapp.com",text:"The Social Me on Heroku",fa:"fa-cloud"},{a:"http://www.github.com/nielsdaw/Social-Me",text:"See code on Github",fa:"fa-github github-grey"}]},{img:"images/blog.96dc142b.png",title:"Blog",description:"My first project was to develop a web application using HTML, CSS, native JavaScript, PHP and MySql. The application is a simple blog where you can create a user, write blog post and make comments.",links:[{a:"https://www.dawartz.dk/blog/",text:"Try the blog",fa:"fa-pencil-square-o"}]},{img:"images/project.3613f121.png",title:"Project & Team Organizer",description:"The project was to develop a web application using HTML, CSS, native JavaScript, PHP and MySql. The application is makes it possible for students and teachers, to organize projects and which students are in which teams.",links:[{a:"https://www.dawartz.dk/project1/",text:"Try the application",fa:"fa-archive"},{a:"https://github.com/ZuzanaLietavcova/Training-center-project",text:"See code on Github",fa:"fa-github github-grey"}]}],this.allProjects=this.schoolProjects.concat(this.personalProjects),this.curentProjects=this.allProjects,this.changePreview=function(a){switch(a){case this.menuItems[0]:this.showAllProjects();break;case this.menuItems[1]:this.showSchoolProjects();break;case this.menuItems[2]:this.showPersonalProjects()}},this.showPersonalProjects=function(){this.curentProjects=this.personalProjects},this.showSchoolProjects=function(){this.curentProjects=this.schoolProjects},this.showAllProjects=function(){this.curentProjects=this.allProjects}}),angular.module("dawartzApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="row center-flex"> <div class="text-center col-md-6 col-md-offset-3 col-xs-12 col-sm-8 col-sm-offset-2"> <h1>welcome to dawartz.dk</h1> <h4>the goal is simple</h4> <p> this website is made to present a little bit about my self and show some of my projects. </p> </div> </div>'),a.put("views/me.html",'<div class="window-height"> <div class="center-flex m-b-2"> <div class="row"> <div class="col-md-4 col-md-offset-4 text-center"> <div class="hidden talk-bubble" ng-class="{show: project.showBubble}"> <i>&ldquo; I speak Danish, English and French &rdquo;</i></div> <img src="/images/profile-sm.1c70e39b.png" alt="..." class="img-circle img-profile" ng-mouseenter="project.showBubble = true" ng-mouseleave="project.showBubble = false"> <p class="lead">Niels Dawartz</p> </div> <div class="col-md-6 col-md-offset-3 text-center"> <p> I have a passion for web development, and I love creative, beautiful, user- and mobile friendly web applications. I\'m a recent graduate in Software Development Technology (April 2017), with a background in Communication and IT. Finally I have a user-centred approach when analysing user-needs, designing and developing. </p> <p><a href="mailto:niels@dawartz.dk"><i class="fa fa-envelope" aria-hidden="true"></i> niels@dawartz.dk</a></p> </div> </div> </div> <div class="row"> <div class="col-md-offset-3 col-md-6 text-center"> <div class="col-md-2 col-xs-2" ng-repeat="item in me.socialMedias"> <a href="{{item.link}}"><h2><i class="fa {{item.fa}}" aria-hidden="true"></i></h2></a> </div> </div> </div> </div> <div class="row section-shadow m-b-4"> <h3 class="m-b-1 text-center"><i class="fa fa-briefcase" aria-hidden="true"></i> Work Experience</h3> <div class="col-md-2 col-md-offset-1 col-sm-2 col-sm-offset-1 col-xs-12" id="work-title"> <p><span class="lead">Digital Project Assistant</span><br> <span class="text-muted">2013-2015 (2 &#189 years)</span> </p> </div> <div class="col-md-8 col-xs-12 col-sm-8"> <blockquote> <p class="lead" id="ogilvy-red">OgilvyOne Denmark</p> <span> Working with strategy, design, development and maintenance of emails and websites for some of the biggest companies in Denmark (Direct Marketing). Primarily working with the CRM system Agillic Dialogue in order to automate flows between web, e-mail and text messages. In terms of web developing, I was using HTML, CSS, native JavaScript and jQuery for the front-end and Java (JSP/Servlets) for the back-end. Furthermore, I did quantitative analyses of different data from clients, in order to improve performance and value.</span> <p><a target="_blank" class="btn btn-primary" href="http://ogilvy.dk">Company website</a></p> </blockquote> </div> </div> <div class="row m-b-4 section-shadow"> <h3 class="m-b-2 text-center"><i class="fa fa-graduation-cap" aria-hidden="true"></i> Education</h3> <div class="col-md-12"> <div class="row m-b-2"> <div class="col-md-6 col-xs-12 col-sm-12"> <p><b><span class="text-primary">Master of Science, Software Development Technology (Web Specialization)</span></b><br> IT University of Copenhagen<br> <span class="text-muted">2014 - 2017</span></p> <p>This programme gave me access to cutting edge knowledge in software design, programming languages, databases, distributed systems, algorithms, development processes, requirements as well as management. I specialized in web development and completed advanced courses which included markup- and programming languages as HTML5, CSS3, JavaScript, PHP, Java, Python and more.</p> </div> <div class="col-md-6 col-xs-12 col-sm-12"> <p><b><span class="text-primary">Bachelor of Arts in Communication and IT</span></b><br> University of Copenhagen<br> <span class="text-muted">2011 - 2014 </span></p> <p>Communication and IT focuses on the use of digital information and communication technologies within the fields of communication, collaboration, innovation and design. The program integrates media studies and computer science. During my sixth semester I completed two different elective courses, “Web Interaction Design” at Copenhagen Business School and “Web Applications” University of Roskilde.</p> </div> </div> <div class="row"> <div class="col-md-6 col-xs-12 col-sm-12" id="edu-div"> <p><b><span class="text-primary">Exchange programme in Paris, France </span></b> École pour l\'informatique et les techniques avanceés (EPITA)<br> <span class="text-muted">2015 - 2016</span></p> <p>I completed the specialization semester at EPITA, with a wide variety of relevant courses ex. Advanced C, Advanced Database & Web development, XML Technologies, Advanced Java Programming, Android Initiation, iOS, .Net and C# Programming.</p> </div> </div> </div> </div> <div class="row m-b-4 section-shadow"> <h3 class="text-center m-b-1"><i class="fa fa-superpowers" aria-hidden="true"></i>Development Skills</h3> <p class="lead text-center">top skills</p> <div class="text-center col-md-6 col-md-offset-3 shadow-box skills-inline"> <span ng-repeat="skill in me.skills" class="skill-box">{{skill}}</span> </div> <div class="clearfix m-b-1"></div> <p class="lead text-center">other</p> <div class="text-center col-md-6 col-md-offset-3 shadow-box skills-inline"> <span ng-repeat="skill in me.skillsOther" class="skill-box">{{skill}}</span> </div> </div>'),a.put("views/projects.html",'<div class="row section-shadow project-row"> <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1"> <h3 class="text-center m-b-1">Projects</h3> <div class="col-md-12 col-xs-12 col-sm-12 text-center m-b-2"> <ul class="nav nav-tabs project-menu"> <li ng-repeat="item in project.menuItems"> <a class="btn" ng-class="{active : project.activeMenu === item}" ng-click="project.changePreview(item); project.setActive(item)">{{item}}</a> </li> </ul> </div> <div class="col-md-4 col-xs-12 col-sm-6 project-xs fade-project" ng-class="{\'col-md-offset-2\':$index == 3 || ($first && project.curentProjects.length < 3)}" ng-repeat="item in project.curentProjects"> <div class="project-inner text-center"> <img class="project-img" ng-src="{{item.img}}"> <div class="project-content text-left"> <h4>{{item.title}}</h4> <div class="project-description"> {{item.description}} </div> <div class="project-links"> <a ng-repeat="link in item.links" target="_blank" href="{{link.a}}"><i class="fa {{link.fa}}" aria-hidden="true"></i> {{link.text}}</a> </div> </div> </div> </div> </div> </div>')}]);