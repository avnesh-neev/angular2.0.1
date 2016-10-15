import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
import { routing, appRoutingProviders } from '../app/app.routing';
import { ModalModule } from '../my-modal/modal.module';
import { AccordionModule, ProgressbarModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { UsersComponent } from '../users/users.component';
import { ConferencesComponent } from '../conferences/conferences.component';
import { JsConferenceComponent } from '../jsConference/jsConference.component';
import { JavaConferenceComponent } from '../javaConference/javaConference.component';
import { RubyConferenceComponent } from '../rubyConference/rubyConference.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CapitalizePipe } from '../customPipes/capitalize.pipe';
import { ContactUsComponent } from '../contactUs/contactUs.component';
import { HighlightDirective } from '../customDirectives/myHighlight.directive';
import { UnlessDirective } from '../customDirectives/myUnless.directive';


import '../../styles/blue.scss';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        AccordionModule,
        DropdownModule,
        ProgressbarModule,
        routing,
        ModalModule,
        FileUploadModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        UsersComponent,
        ConferencesComponent,
        JsConferenceComponent,
        JavaConferenceComponent,
        RubyConferenceComponent,
        DashboardComponent,
        CapitalizePipe,
        ContactUsComponent,
        HighlightDirective,
        UnlessDirective

    ],
    bootstrap: [ AppComponent ],
    providers: [
        appRoutingProviders,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ]
})

export class AppModule {
}

