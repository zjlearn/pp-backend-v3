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
import {LoanComponent} from './dashboard/process/loan/loan.component';
import {ProjectComponent} from './dashboard/process/project/project.component';
import {FinishedProjectComponent} from './dashboard/project/finished-project/finished-project.component';
import {RepaymentComponent} from './dashboard/project/repayment/repayment.component';
import {TenderingComponent} from './dashboard/project/tendering/tendering.component';
import {SecondcheckComponent} from './dashboard/project/secondcheck/secondcheck.component';
import {FirstCheckComponent} from './dashboard/project/first-check/first-check.component';
import {ProjectDetailComponent} from './dashboard/project/project-detail/project-detail.component';

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
      {path: 'processes/loan', component: LoanComponent},
      {path: 'processes/project', component: ProjectComponent},
      {path: 'project/firstCheck', component: FirstCheckComponent},
      {path: 'project/secondCheck', component: SecondcheckComponent},
      {path: 'project/tendering', component: TenderingComponent},
      {path: 'project/repay', component: RepaymentComponent},
      {path: 'project/finished', component: FinishedProjectComponent},
      {path: 'project/detail/:id', component: ProjectDetailComponent}
    ]
  }
];

export const routing = RouterModule.forRoot(routes);

