/*
This is empty on purpose! Your code to build the resume will go here.
 */

		bio = {
			name: 'Santosh Prasad',
			role: 'Devops Engineer',
			contacts: {
				mobile: '+91-9560601897',
				email: 'santoshpsd13@gmail.com',
				github: 'https://github.com/santosh1357',
				location: 'Noida',		
			},
			welcomeMessage: 'I am a Computer Science Graduate with 6+ Yrs of work experience, I have diverse set of skills '+
			'which includes Linux Adminstration, FrontEnd Devlopment(react) and Scripting(Python and BASH). '+
			'I am currently working in Snap-On Business Solutions where I work on deployments, supporting and troubleshooting ' +
			'user issues on applications like Jira, OpsView(Nagios)etc.',
			skills: ['ReactJS','Linux', 'Ansible', 'Python Scripting', 'Java Script', 'HTML', 'CSS'],
			biopic: 'images/fry.jpg',
			display: function(){
				var fomattedHeader = HTMLheaderName.replace("%data%", bio.name);
				var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
				var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
				var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
				var formattedHTMLgithub = HTMLgithub.replace("%data%", '<a href=' + bio.contacts.github+'>@santosh</a>');
				var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
				var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
				var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);		
				//var formattedHTMLgithublink = `<a href=${formattedHTMLgithub}>@santosh</a>`
				$('#header').prepend(fomattedHeader);
				$('#header h1:first-child').after(formattedHTMLheaderRole);
				$('#topContacts').append(formattedHTMLmobile);
				$('#topContacts').append(formattedHTMLemail);
				$('#topContacts').append(formattedHTMLgithub);
				$('#topContacts').append(formattedHTMLlocation);
				$('#header').append(formattedHTMLbioPic);
				$('#header').append(formattedHTMLwelcomeMsg);
				$('#header').append(HTMLskillsStart);
				bio.skills.map( function(skill) {
					var formattedHTMLskills = HTMLskills.replace("%data%", skill);
					$('#skills').append(formattedHTMLskills);
				});
			}
		}
		education= {
			schools:[
				{
					name: 'D.V(Boys) Chittaranjan',
					location: 'Chittaranjan(WB)',
					degree: 'high school',
					majors: ['Physics', 'Chemistry', 'Maths'],
					dates: '2000-02'
				},
				{
					name: 'BIT Mesra Ranchi',
					location: 'Ranchi(JH)',
					degree: 'BE',
					majors: ['Computer Science Engineering'],
					dates: '2006-10'
				}
			],
			onlineCourses: [
				{
					title: 'Learning How to Learn',
					school: 'Couresra',
					dates: '2016-17',
					url: 'https://www.coursera.org/learn/learning-how-to-learn'
				},
				{
					title: 'Freee Code Camp Front End Devloper',
					school: 'FCC',
					dates: '2015-17',
					url: 'https://www.freecodecamp.org/'
				},
				{
					title: 'Udacity FrontEnd Devloper 2 (Nano Degree)',
					school: 'Udacity',
					dates: '2018',
					url: 'https://www.https://www.udacity.com/'
				}
			],
			display: function(){
				var education = octopus.getEdu();
				$('#education').append(HTMLschoolStart);
				education.schools.map(function(edu){
					var formattedHTMLschoolName = HTMLschoolName.replace("%data%", edu.name);
					var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", edu.degree);
					var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", edu.dates);
					var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", edu.location);
					var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", edu.majors);
					$('.education-entry').append(formattedHTMLschoolName);
					$('.education-entry').append(formattedHTMLschoolDegree);
					$('.education-entry').append(formattedHTMLschoolDates);
					$('.education-entry').append(formattedHTMLschoolLocation);
					$('.education-entry').append(formattedHTMLschoolMajor);
			    });
			    $('.education-entry').append(HTMLonlineClasses);
			    education.onlineCourses.map(function(olc){
			    	var formattedHTMLonlineTitle=HTMLonlineTitle.replace("%data%", olc.title);
			    	var formattedHTMLonlineSchool=HTMLonlineSchool.replace("%data%", olc.school);
			    	var formattedHTMLonlineDates=HTMLonlineDates.replace("%data%", olc.dates);
			    	var formattedHTMLonlineURL=HTMLonlineURL.replace("%data%", olc.url);
			    	$('.education-entry').append(formattedHTMLonlineTitle);
			    	$('.education-entry').append(formattedHTMLonlineSchool);
			    	$('.education-entry').append(formattedHTMLonlineDates);
			    	$('.education-entry').append(formattedHTMLonlineURL);
			    });
			}
		}
		work={
			jobs: [
				{
					employer: 'On Mobile Global Ltd',
					title: 'operations engineer',
					location: 'Bangalore',
					dates: '2011-13',
					description: 'Scripting, SQL, Linux, Tomcat'
				},
				{
					employer: 'Ericsson India Ltd',
					title: '2nd LA engineer',
					location: 'Noida',
					dates: '2013-15',
					description: 'System Admin, Scripting, Code Deployment, '
				},
				{
					employer: 'Snap On Business Solutions',
					title: 'Devops engineer',
					location: 'Noida',
					dates: '2015-Current',
					description: 'Python, Linux, JIRA, IPA, HTML, CSS, Java Script, ANSIBLE, AWS, DOCKER'
				}
			],
			display: function(){
				var work = octopus.getWork();
				$('#workExperience').append(HTMLworkStart);
				work.jobs.map(function(job){
					var formattedHTMLworkEmployer=HTMLworkEmployer.replace("%data%", job.employer)
					var formattedHTMLworkTitle=HTMLworkTitle.replace("%data%", job.title);
					var formattedHTMLworkDates=HTMLworkDates.replace("%data%", job.dates);
					var formattedHTMLworkLocation=HTMLworkLocation.replace("%data%", job.location);
					var formattedHTMLworkDescription=HTMLworkDescription.replace("%data%", job.description);
					$('.work-entry').append(formattedHTMLworkEmployer);
					$('.work-entry').append(formattedHTMLworkTitle);
					$('.work-entry').append(formattedHTMLworkDates);
					$('.work-entry').append(formattedHTMLworkLocation);
					$('.work-entry').append(formattedHTMLworkDescription);	
				});
			}
		}
		projects= {
			projects:[
				{
					title: 'Restaurant Reviews',
					dates: '8-Jul-18 10-Jul-18',
					description: 'The Project Uses a provided backend DB API to load the details of resturants.' +
					'The resturant data is displayed with search and filter options. It also uses leaflet and Mapbox API ' +
					'to display the resturants location in a MAP. The app uses flexbox for achieving responsiveness ' +
					'suitable ARIA labels for accessiblity and Service Workers for offline availablity.',
					images: ['images/restRev1.png', 'images/restRev2.png', 'images/restRev3.png']
				},
				{
					title: 'Neighborhood-Map-React',
					dates: '10-Oct-18 3-Nov-18',
					description: 'A single-page web application, built using the React framework, that displays Arts and Museums centers located in NewDelhi. The project uses a 3rd party API (four square) to load the details of locations like their name, address etc. Then the same data is displayed on Google Map. Map Markers and serach field has been added and locations can be filtered and searched thriough them. This application follow this Udacity Project Rubric',
					images: ['images/NeighbourHoodMap.png', 'images/NeighbourHood3.png']
				}
			],
			display: function(){
					var projects = octopus.getProjects();
					projects.projects.map(function(project){
					var formattedHTMLprojectTitle=HTMLprojectTitle.replace("%data%", project.title);
					var formattedHTMLprojectDates=HTMLprojectDates.replace("%data%", project.dates);
					var formattedHTMLprojectDescription=HTMLprojectDescription.replace("%data%", project.description);
					$('.project-entry').append(formattedHTMLprojectTitle);
					$('.project-entry').append(formattedHTMLprojectDates);
					$('.project-entry').append(formattedHTMLprojectDescription);
					project.images.map(function(image){
						var formattedHTMLprojectImage=HTMLprojectImage.replace("%data%", image);
						$('.project-entry').append(formattedHTMLprojectImage);
					});
				});
			}
		};
	

	var octopus = {
		getBio: function(){
			return bio;
		},
		getEdu: function(){
			return education;
		},
		getWork: function(){
			return work;
		},
		getProjects: function(){
			return projects;
		},
	};

	var view = {
		renderBio: function(){
			var bio = octopus.getBio();
			console.log("HHN " + HTMLheaderName);
			var fomattedHeader = HTMLheaderName.replace("%data%", bio.name);
			var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
			var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
			var formattedHTMLgithub = HTMLgithub.replace("%data%", '<a href=' + bio.contacts.github+'>@santosh</a>');
			var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
			var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
			var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);		
			//var formattedHTMLgithublink = `<a href=${formattedHTMLgithub}>@santosh</a>`
			$('#header').prepend(fomattedHeader);
			$('#header h1:first-child').after(formattedHTMLheaderRole);
			$('#topContacts, #footerContacts').append(formattedHTMLmobile);
			$('#topContacts, #footerContacts').append(formattedHTMLemail);
			$('#topContacts,#footerContacts').append(formattedHTMLgithub);
			$('#topContacts,#footerContacts').append(formattedHTMLlocation);
			$('#header').append(formattedHTMLbioPic);
			$('#header').append(formattedHTMLwelcomeMsg);
			$('#header').append(HTMLskillsStart);
			bio.skills.map( function(skill) {
				var formattedHTMLskills = HTMLskills.replace("%data%", skill);
				$('#skills').append(formattedHTMLskills);
			});
		},
		renderEdu: function(){
			var education = octopus.getEdu();
			$('#education').append(HTMLschoolStart);
			education.schools.map(function(edu){
				var formattedHTMLschoolName = HTMLschoolName.replace("%data%", edu.name);
				var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", edu.degree);
				var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", edu.dates);
				var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", edu.location);
				var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", edu.majors);
				$('.education-entry').append(formattedHTMLschoolName);
				$('.education-entry').append(formattedHTMLschoolDegree);
				$('.education-entry').append(formattedHTMLschoolDates);
				$('.education-entry').append(formattedHTMLschoolLocation);
				$('.education-entry').append(formattedHTMLschoolMajor);
		    });
		    $('.education-entry').append(HTMLonlineClasses);
		    education.onlineCourses.map(function(olc){
		    	var formattedHTMLonlineTitle=HTMLonlineTitle.replace("%data%", olc.title);
		    	var formattedHTMLonlineSchool=HTMLonlineSchool.replace("%data%", olc.school);
		    	var formattedHTMLonlineDates=HTMLonlineDates.replace("%data%", olc.dates);
		    	var formattedHTMLonlineURL=HTMLonlineURL.replace("%data%", olc.url);
		    	$('.education-entry').append(formattedHTMLonlineTitle);
		    	$('.education-entry').append(formattedHTMLonlineSchool);
		    	$('.education-entry').append(formattedHTMLonlineDates);
		    	$('.education-entry').append(formattedHTMLonlineURL);
		    });
		},
		renderWork: function(){
			var work = octopus.getWork();
			$('#workExperience').append(HTMLworkStart);
			work.jobs.map(function(job){
				var formattedHTMLworkEmployer=HTMLworkEmployer.replace("%data%", job.employer)
				var formattedHTMLworkTitle=HTMLworkTitle.replace("%data%", job.title);
				var formattedHTMLworkDates=HTMLworkDates.replace("%data%", job.dates);
				var formattedHTMLworkLocation=HTMLworkLocation.replace("%data%", job.location);
				var formattedHTMLworkDescription=HTMLworkDescription.replace("%data%", job.description);
				$('.work-entry').append(formattedHTMLworkEmployer);
				$('.work-entry').append(formattedHTMLworkTitle);
				$('.work-entry').append(formattedHTMLworkDates);
				$('.work-entry').append(formattedHTMLworkLocation);
				$('.work-entry').append(formattedHTMLworkDescription);	
			});
			

		},
		renderProj: function(){
			$('#projects').append(HTMLprojectStart);
			var projects = octopus.getProjects();
			projects.projects.map(function(project){
				var formattedHTMLprojectTitle=HTMLprojectTitle.replace("%data%", project.title);
				var formattedHTMLprojectDates=HTMLprojectDates.replace("%data%", project.dates);
				var formattedHTMLprojectDescription=HTMLprojectDescription.replace("%data%", project.description);
				$('.project-entry').append(formattedHTMLprojectTitle);
				$('.project-entry').append(formattedHTMLprojectDates);
				$('.project-entry').append(formattedHTMLprojectDescription);
				project.images.map(function(image){
					var formattedHTMLprojectImage=HTMLprojectImage.replace("%data%", image);
					console.log(formattedHTMLprojectImage)
					$('.project-entry').append(formattedHTMLprojectImage);
				});
			});
		}
	};
//$(function(){	
	view.renderBio();
	view.renderEdu();
	view.renderWork();
	view.renderProj();

//}); 
// bio.display();
// education.display();
// work.display();
// projects.display();
$('#mapDiv').append(googleMap);