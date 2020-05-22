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
    private roles: string[];
    private authority: string;

    constructor(private tokenStorage: TokenStorageService) { }

    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getAuthorities();
            this.roles.every(role => {
                if (role === 'ROLE_ADMIN') {
                    this.authority = 'admin';
                    return false;
                }
                this.authority = 'user';
                return true;
            });
        }
    }
}
