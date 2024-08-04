import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainChattingAppComponent } from './main-chatting-app.component';

const routes: Routes = [{ path: '', component: MainChattingAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainChattingAppRoutingModule { }
