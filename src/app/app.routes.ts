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
      {path: 'processes/my', component: PermissionComponent},
      {path: 'processes/unhandled', component: PermissionComponent},
      {path: 'processes/handled', component: PermissionComponent},
      {path: 'processes/end', component: PermissionComponent},
    ]
  }
];

export const routing = RouterModule.forRoot(routes);

