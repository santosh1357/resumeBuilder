/*
This is empty on purpose! Your code to build the resume will go here.
 */
$(function(){
	var model = {
		bio: {
			name: 'Santosh Prasad',
			role: 'Devops Engineer',
			contacts: {
				mobile: '+91-9560601897',
				email: 'santoshpsd13@gmail.com',
				github: 'https://github.com/santosh1357',
				location: 'Noida',		
			},
			welcomeMessage: 'Hi! Welcome to dynamic resume of Santosh !!!',
			skills: ['Linux', 'Ansible', 'Python Scripting', 'Java Script', 'HTML', 'CSS'],
			biopic: '../images/fry.jpg'
		},
		education: {
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
			]
		},
		work:{
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
				},
			]
		},
		projects: {
			projects:[
				{
					title: 'Attendance Sheet',
					dates: '8-Jul-18 10-Jul-18',
					description: 'Maintance attendace for students',
					images: ['../images/attendace.jpg']
				},
			]
		}
	};

	var octopus = {
		getBio: function(){
			return model.bio;
		},
		getEdu: function(){
			return model.education;
		},
		getWork: function(){
			return model.work;
		},
		getProjects: function(){
			return model.projects;
		},
	};

	var view = {
		renderBio: function(){
			var bio = octopus.getBio();
			var fomattedHeader = HTMLheaderName.replace("%data%", bio.name);
			$('#header').append(fomattedHeader);
			console.log($("#header"));
		},
		renderEdu: function(){
			var education = octopus.getEdu();
		},
		renderWork: function(){
			var work = octopus.getWork();

		},
		renderProj: function(){
			var projects = octopus.getProjects();

		}
	};
view.renderBio();
view.renderEdu();
view.renderWork();
view.renderProj();
}); 