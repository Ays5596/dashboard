import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestInsComponent } from './test-ins/test-ins.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarchartComponent} from './barchart/barchart.component';

const routes: Routes = [
  { path: '' , component: TestInsComponent},
  { path: 'test-page' , component: TestPageComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'thankyou', component: ThankyouComponent},
  { path:'dash', component:DashboardComponent },
  {path: 'bar-chart', component: BarchartComponent},
  { path: '**' , component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
