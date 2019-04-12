import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";

import { AuthGuard } from './shared/_auth/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'ligacaos-classify',
    pathMatch: 'full',
  },
  { path: '', component: ContentLayoutComponent, data: { title: 'unsecured Views' }, children: CONTENT_ROUTES },
  { path: '', component: FullLayoutComponent, data: { title: 'secured Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
