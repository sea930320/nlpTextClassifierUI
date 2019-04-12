import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//----------------component----------------------//
import { LigacaosClassifyComponent } from './ligacaos-classify/ligacaos-classify.component';

const routes: Routes = [
  {
    path: 'ligacaos-classify',
    component: LigacaosClassifyComponent,
    data: {
      title: 'Ligacaos CRUD/Feitas Interface'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullPagesRoutingModule { }
