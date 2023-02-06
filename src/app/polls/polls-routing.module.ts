import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SobvPollModalComponent} from "./components/sobv-poll-modal/sobv-poll-modal.component";

const routes: Routes = [
  {path: 'polls/category/:categoryId/poll/:pollId', component: SobvPollModalComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SobvPollsRoutingModule {
}
