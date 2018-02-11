/**
 * Created by wangdi on 26/5/17.
 */
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './page/login/login.component';
import {LockComponent} from './page/lock/lock.component';
import {RegisterComponent} from './page/register/register.component';
import {RootComponent} from './dashboard/root/root.component';
import {HomeComponent} from './dashboard/home/home.component';
import {NotificationComponent} from './dashboard/notification/notification.component';
import {SweetAlertComponent} from './dashboard/sweet-alert/sweet-alert.component';
import {SettingsComponent} from './dashboard/settings/settings.component';
import {UserComponent} from './dashboard/permission/user/user.component';
import {RoleComponent} from './dashboard/permission/role/role.component';
import {PermissionComponent} from './dashboard/permission/permission/permission.component';
import {MyProcessComponent} from './dashboard/process/my-process/my-process.component';
import {UnhandledProcessComponent} from './dashboard/process/unhandled-process/unhandled-process.component';
import {HandledProcessComponent} from './dashboard/process/handled-process/handled-process.component';
import {EndProcessComponent} from './dashboard/process/end-process/end-process.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'lock', component: LockComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard', component: RootComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'notification', component: NotificationComponent},
      {path: 'alert', component: SweetAlertComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'permissions/user', component: UserComponent},
      {path: 'permissions/role', component: RoleComponent},
      {path: 'permissions/permission', component: PermissionComponent},
      {path: 'processes/my', component: MyProcessComponent},
      {path: 'processes/unhandled', component: UnhandledProcessComponent},
      {path: 'processes/handled', component: HandledProcessComponent},
      {path: 'processes/end', component: EndProcessComponent},
    ]
  }
];

export const routing = RouterModule.forRoot(routes);

