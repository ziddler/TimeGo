﻿import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutComponent } from './layouts/full-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'timesheets',
        loadChildren: './timesheets/timesheets.module#TimesheetsModule'
      },
      {
        path: 'tasks',
        loadChildren: './tasks/tasks.module#TasksModule'
      },
      {
        path: 'timeoff',
        loadChildren: './timeoff/timeoff.module#TimeoffModule'
      }
      ,
      {
        path: 'periods',
        loadChildren: './periods/periods.module#PeriodsModule'
      },
      {
          path: 'profile',
          loadChildren: './profile/profile.module#ProfileModule'
      },
      {
          path: 'users',
          loadChildren: './users/users.module#UsersModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
