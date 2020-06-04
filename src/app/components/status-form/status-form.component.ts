import {Component, Input, OnInit} from '@angular/core';
import {StatusFormModel} from "./status-form.model";
import {ReportDetailedService} from "../../services/report-detailed.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.css']
})
export class StatusFormComponent implements OnInit {
  @Input()
  reportId: string;
  status = new StatusFormModel();

  constructor(private router: Router, private reportDetailedService: ReportDetailedService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.reportDetailedService.markStatus(this.reportId, this.status.status);
    this.router.navigate(['/activeReport']);
  }

  onItemChange(value){
    this.status.status = value;
  }

}
