import {Component, Input, OnInit} from '@angular/core';
import {TeacherProfileModel} from './teacherprofile.model';

@Component({
  selector: 'app-teacherprofile',
  templateUrl: './teacherprofile.component.html',
  styleUrls: ['./teacherprofile.component.css'],
  styles: [' .star {\n' +
  '      position: relative;\n' +
  '      display: inline-block;\n' +
  '      font-size: 2rem;\n' +
  '      color: #d3d3d3;\n' +
  '    }\n' +
  '    .full {\n' +
  '      color: red;\n' +
  '    }\n' +
  '    .half {\n' +
  '      position: absolute;\n' +
  '      display: inline-block;\n' +
  '      overflow: hidden;\n' +
  '      color: #347474;\n' +
  '    }']
})
export class TeacherprofileComponent implements OnInit {
  @Input()
  teacher: TeacherProfileModel;
  maxRate = 5;
  readonly = true;

  constructor() {
  }

  ngOnInit(): void {


  }
}
