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
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
import { ConfigService } from '../config/config.service';
// import { InterceptedHttp } from './../../http.interceptor';
// import { SecurityInterceptedHttp } from '../../http.securityinterceptor';

/**
 * Author: Diamond Khanna ( 352929 )
 * Date: 11-10-2017
 * Objective: # A service which would handle the AGENT LIST services.
 */

@Injectable()
export class AgentListCreationService {
  admin_Base_Url: any;
  common_Base_Url: any;

  get_State_Url: any;
  get_Service_Url: any;
  get_Campaign_Names_Url: any;
  save_AgentListMapping_Url: any;
  getAllAgents_Url: any;
  edit_AgentListMapping_Url: any;

  constructor(
    private http: HttpClient,
    public basepaths: ConfigService,
  ) {
    this.admin_Base_Url = this.basepaths.getAdminBaseUrl();
    this.common_Base_Url = this.basepaths.getCommonBaseURL();

    this.get_State_Url = this.admin_Base_Url + 'm/role/stateNew';
    this.get_Service_Url = this.admin_Base_Url + 'm/role/serviceNew';
    this.get_Campaign_Names_Url =
      this.common_Base_Url + '/cti/getCampaignNames';
    this.save_AgentListMapping_Url =
      this.admin_Base_Url + 'createUSRAgentMapping';
    this.getAllAgents_Url = this.admin_Base_Url + 'getAllAgentIds';
    this.edit_AgentListMapping_Url =
      this.admin_Base_Url + 'updateCTICampaignNameMapping';
  }

  getStates(userID: any, serviceID: any, isNational: any) {
    return this.http.post(this.get_State_Url, {
      userID: userID,
      serviceID: serviceID,
      isNational: isNational,
    });
    // .map(this.handleSuccess)
    // .catch(this.handleError);
  }

  getServices(userID: any) {
    return this.http.post(this.get_Service_Url, {
      userID: userID,
    });
    // .map(this.handleState_n_ServiceSuccess)
    // .catch(this.handleError);
  }
  getAllAgents(providerServiceMapID: any) {
    return this.http.post(this.getAllAgents_Url, {
      providerServiceMapID: providerServiceMapID,
    });
    // .map(this.handleSuccess)
    // .catch(this.handleError)
  }
  getCampaignNames(serviceName: any) {
    return this.http.post(this.get_Campaign_Names_Url, {
      serviceName: serviceName,
    });
    // .map(this.handleSuccess)
    // .catch(this.handleError);
  }

  saveAgentListMapping(data: any) {
    return this.http.post(this.save_AgentListMapping_Url, data);
    // .map(this.handleSuccess)
    // .catch(this.handleError);
  }
  editAgentDetails(data: any) {
    return this.http.post(this.edit_AgentListMapping_Url, data);
    // .map(this.handleSuccess)
    // .catch(this.handleError);
  }

  // handleSuccess(res: Response) {
  //   console.log(res.json().data, 'AGENT LIST CREATION file success response');
  //   if (res.json().data) {
  //     return res.json().data;
  //   } else {
  //     return Observable.throw(res.json());
  //   }
  // }

  // handleState_n_ServiceSuccess(response: Response) {

  //    console.log(response.json().data, 'AGENT LIST CREATION service file success response');
  //   let result = [];
  //   result = response.json().data.filter(function (item) {
  //     if (item.serviceID === 1 || item.serviceID === 3 || item.serviceID === 6 || item.serviceID === 10) {
  //       return item;
  //     }
  //   });
  //   return result;
  // }

  // handleError(error: Response | any) {
  //   return Observable.throw(error.json());
  // }
}
