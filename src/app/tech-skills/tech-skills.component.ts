import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-tech-skills',
    templateUrl: './tech-skills.component.html',
    styleUrls: ['./tech-skills.component.css']
})
export class TechSkillsComponent implements OnInit {

    techSkills: string[] = ['Java', 'Python', 'Node JS', 'Selenium', 'Appium', 'Jira', 'QC', 'Test Analysis', 'Test Case Creation', 'Bug Reporting', 'Cucumber', 'JavaScript',
     'Angular', 'HTML', 'CSS', 'SQL', 'SQLite', 'Excel', 'Tomcat', 'Postman', 'Spring Boot', 'Django', 'Express', 'Kivy'];

    ngOnInit(): void {
       
    }    
}