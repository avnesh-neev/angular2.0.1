import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UsersComponent } from '../users/users.component';
import { ConferencesComponent } from '../conferences/conferences.component';
import { JsConferenceComponent } from '../jsConference/jsConference.component';
import { JavaConferenceComponent } from '../javaConference/javaConference.component';
import { RubyConferenceComponent } from '../rubyConference/rubyConference.component';
import { ContactUsComponent } from '../contactUs/contactUs.component';



const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'conferences', component: ConferencesComponent,
    	children: [
    		{ path: '', redirectTo: 'jsConference', pathMatch: 'full' },
    		{ path: 'jsConference', component: JsConferenceComponent },
    		{ path: 'javaConference', component: JavaConferenceComponent },
    		{ path: 'rubyConference', component: RubyConferenceComponent }
    	] },
    { path: 'contactUs', component: ContactUsComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);