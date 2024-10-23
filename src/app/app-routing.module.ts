import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'

const routes: Routes = [
  {
    path: 'javascript',
    loadChildren: () => import('./faq/javascript/javascript.routing').then(module => module.Javascript_Routes)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
