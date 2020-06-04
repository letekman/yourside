import { Component, OnInit} from '@angular/core';

import 'rxjs/add/operator/filter';
import {TokenStorageService} from './auth/token-storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'iwa-http-contacts';

    constructor(private tokenStorage: TokenStorageService) { }

    ngOnInit() {
    }
}
