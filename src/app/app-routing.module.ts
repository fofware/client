import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PlusListComponent } from './components/plus-list/plus-list.component';
import { PlusFormComponent } from './components/plus-form/plus-form.component';

import { DrcossiaComponent } from './components/drcossia/drcossia.component';
import { LocalstoragComponent } from './components/localstorag/localstorag.component';
import { PersonasComponent } from './components/personas/personas.component';
import { PrivateComponent } from './components/private/private.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './auth.guard';
import { TaskListComponent } from './components/task-list/task-list.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ArticuloFormComponent } from './components/articulo-form/articulo-form.component';
import { PersonasFormComponent } from './components/personas-form/personas-form.component';
import { UsersComponent } from './components/users/users.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { CajaComponent } from './components/caja/caja.component';
import { ProveedorListasComponent } from './components/proveedor-listas/proveedor-listas.component';
import { ComprasComponent } from './components/compras/compras.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ReportesComponent } from './components/reportes/reportes.component';


const routes: Routes = [

  {
    path: ''
    , redirectTo: 'home'
    , pathMatch: 'full'
  }
  , {
    path: 'home'
    , component: HomeComponent
  }
  , {
    path: 'drcossia'
    , component: DrcossiaComponent
  }
  , {
    path: 'localstorag'
    , component: LocalstoragComponent
  }
  , {
    path: 'signin'
    , component: SigninComponent
  }
  , {
    path: 'signup'
    , component: SignupComponent
  }
  , {
    path: 'users'
    , component: UsersComponent
  }
  , {
    path: 'user/add'
    , component: UserFormComponent
  }
  , {
    path: 'user/edit/:id'
    , component: UserFormComponent
  }
  , {
    path: 'plus'
    , component: PlusListComponent
    , canActivate: [AuthGuard]
  }
  , {
    path: 'plus/add'
    , component: PlusFormComponent
    , canActivate: [AuthGuard]
  }
  , {
    path: 'plus/edit/:id'
    , component: PlusFormComponent
    , canActivate: [AuthGuard]
  }
  , {
    path: 'personas'
    , component: PersonasComponent
    , canActivate: [AuthGuard]
  }
  , {
    path: 'persona/add'
    , component: PersonasFormComponent
    , canActivate: [AuthGuard]
  }
  , {
    path: 'persona/edit/:id'
    , component: PersonasFormComponent
    , canActivate: [AuthGuard]
  }

  , {
    path: 'private'
    , component: PrivateComponent
//    , canActivate: [AuthGuard]
  }
  , {
    path: 'articulos'
    , component: ArticuloComponent
    , canActivate: [AuthGuard]
  }
  , {
    path: 'articulo/add'
    , component: ArticuloFormComponent
    , canActivate: [AuthGuard]
  }
  , {
    path: 'articulo/edit/:id'
    , component: ArticuloFormComponent
    , canActivate: [AuthGuard]
  }
  , {
    path: 'tasks'
    , component: TaskListComponent
    , canActivate: [AuthGuard]
  }
  , {
    path: 'caja'
    , canActivate: [AuthGuard]
    , component: CajaComponent
  }
  , {
    path: 'proveedoreslistas'
    , canActivate: [AuthGuard]
    , component: ProveedorListasComponent
  }
  , {
    path: 'compras'
    , canActivate: [AuthGuard]
    , component: ComprasComponent
  }
  , {
    path: 'ventas'
    , canActivate: [AuthGuard]
    , component: VentasComponent
  }
  , {
    path: 'reportes'
    , canActivate: [AuthGuard]
    , component: ReportesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
