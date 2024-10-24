/*
 * AMRIT – Accessible Medical Records via Integrated Technology
 * Integrated EHR (Electronic Health Records) Solution
 *
 * Copyright (C) "Piramal Swasthya Management and Research Institute"
 *
 * This file is part of AMRIT.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see https://www.gnu.org/licenses/.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LanguageService {
  headers = new Headers(
    { 'Content-Type': 'application/json' },
    //  ,{'Access-Control-Allow-Headers': 'X-Requested-With, content-type'}
    //   ,{'Access-Control-Allow-Origin': 'localhost:4200'}
    //  ,{'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS'}
    //  ,{'Access-Control-Allow-Methods': '*'}
  );
  options: any = { headers: this.headers };
  test = [];

  private _geturl = 'http://localhost:8080/Language/iEMR/userLanguage/getData';
  private _saveurl =
    'http://localhost:8080//iEMR/userLanguage/saveUserLanguage';

  constructor(private _http: HttpClient) {}
  getLanguage() {
    return this._http.post(this._geturl, this.options);
    // .map((response:Response)=> response.json());
  }
  saveLanguage(data: any) {
    //console.log(data);
    return this._http.post(this._saveurl, data, this.options);

    // .map((response:Response)=> response.json());
  }
}
