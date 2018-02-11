import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LockComponent} from './page/lock/lock.component';
import {LoginComponent} from './page/login/login.component';
import {RegisterComponent} from './page/register/register.component';
import {routing} from './app.routes';
import {MaterialModule} from './material/material.module';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HomeComponent} from './dashboard/home/home.component';
import {NotificationComponent} from './dashboard/notification/notification.component';
import {RootComponent} from './dashboard/root/root.component';
import {SettingsComponent} from './dashboard/settings/settings.component';
import {SweetAlertComponent} from './dashboard/sweet-alert/sweet-alert.component';
import {SettingsService} from './services/settings.service';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { UserComponent } from './dashboard/permission/user/user.component';
import { RoleComponent } from './dashboard/permission/role/role.component';
import { PermissionComponent } from './dashboard/permission/permission/permission.component';
import { UnhandledProcessComponent } from './dashboard/process/unhandled-process/unhandled-process.component';
import { HandledProcessComponent } from './dashboard/process/handled-process/handled-process.component';
import { MyProcessComponent } from './dashboard/process/my-process/my-process.component';
import { EndProcessComponent } from './dashboard/process/end-process/end-process.component';

@NgModule({
  declarations: [
    AppComponent,
    LockComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    NotificationComponent,
    RootComponent,
    SettingsComponent,
    SweetAlertComponent,
    ImagecardComponent,
    UserComponent,
    RoleComponent,
    PermissionComponent,
    UnhandledProcessComponent,
    HandledProcessComponent,
    MyProcessComponent,
    EndProcessComponent
  ],
  imports: [
    BrowserModule,
    routing,
    MaterialModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
