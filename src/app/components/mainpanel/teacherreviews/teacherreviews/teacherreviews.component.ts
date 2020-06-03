import {Component, OnInit} from '@angular/core';
import {TeacherProfileModel} from '../teacherprofile/teacherprofile.model';
import {TeacherProfilesService} from '../Service/teacher-profiles.service';

@Component({
    selector: 'app-teacherreviews',
    templateUrl: './teacherreviews.component.html',
    styleUrls: ['./teacherreviews.component.css']
})
export class TeacherreviewsComponent implements OnInit {

    teachers: TeacherProfileModel[];

    getProfiles() {
        this.teacherProfilesService.getEvents().subscribe(profiles => this.teachers = profiles);
    }

    constructor(private teacherProfilesService: TeacherProfilesService) {


        // this.teachers = [
        //   new TeacherProfileModel('Jan Kowalski', 'I am super teacher and i will help you', 2, 2, 1.5, 4),
        //   new TeacherProfileModel('Jan Kowalski', 'I am super teacher and i will help you', 2, 2, 1.5, 4),
        //   new TeacherProfileModel('Jan Kowalski', 'I am super teacher and i will help you', 2, 2, 1.5, 4),
        //   new TeacherProfileModel('Jan Kowalski', 'I am super teacher and i will help you', 2, 2, 1.5, 4),
        //   new TeacherProfileModel('Jan Kowalski', 'I am super teacher and i will help you', 2, 2, 1.5, 4),
        //   new TeacherProfileModel('Jan Kowalski', 'I am super teacher and i will help you', 2, 2, 1.5, 4),
        //   new TeacherProfileModel('Jan Kowalski', 'I am super teacher and i will help you', 2, 2, 1.5, 4),
        //   new TeacherProfileModel('Jan Kowalski', 'I am super teacher and i will help you', 2, 2, 1.5, 4)
        //  ]
    }

    ngOnInit(): void {
        this.getProfiles();
    }

}
