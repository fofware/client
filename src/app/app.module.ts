import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {PlusService} from './services/plus.service';
import { TaskService } from './services/task.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlusFormComponent } from './components/plus-form/plus-form.component';
import { PlusListComponent } from './components/plus-list/plus-list.component';
import { HomeComponent } from './components/home/home.component';
import { DrcossiaComponent } from './components/drcossia/drcossia.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { LocalstoragComponent } from './components/localstorag/localstorag.component';
import { PersonasComponent } from './components/personas/personas.component';
import { PrivateComponent } from './components/private/private.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ArticuloFormComponent } from './components/articulo-form/articulo-form.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { NavigationPrivateComponent } from './components/navigation-private/navigation-private.component';
import { PersonasService } from './services/personas.service';
import { PersonasFormComponent } from './components/personas-form/personas-form.component';
import { UsersComponent } from './components/users/users.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ProductosService } from './services/productos.service';
import { ErrorshandlerService } from './services/errorshandler.service';
import { Globals } from './common/globalVars';
import { ApiErrorsComponent } from './components/api-errors/api-errors.component';
import { CajaComponent } from './components/caja/caja.component';
import { ProveedorListasComponent } from './components/proveedor-listas/proveedor-listas.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProveedorArticulosComponent } from './components/proveedor-articulos/proveedor-articulos.component';
import { CajaArticulosComponent } from './components/caja-articulos/caja-articulos.component';
import { CajaKartComponent } from './components/caja-kart/caja-kart.component';
import { CajaClientesComponent } from './components/caja-clientes/caja-clientes.component';
import { ComprasComponent } from './components/compras/compras.component';
import { ArticuloCardSelectComponent } from './components/articulo-card-select/articulo-card-select.component';
//import { ComprasItemsComponent } from './components/compras-items/compras-items.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PersonasSelectComponent } from './components/personas-select/personas-select.component';
import { ComprobantesComponent } from './components/comprobantes/comprobantes.component';
import { ComprobantesItemsComponent } from './components/comprobantes-items/comprobantes-items.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { PrintComponent } from './components/print/print.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PlusFormComponent,
    PlusListComponent,
    HomeComponent,
    DrcossiaComponent,
    TaskFormComponent,
    TaskComponent,
    TaskListComponent,
    LocalstoragComponent,
    PersonasComponent,
    PrivateComponent,
    SignupComponent,
    SigninComponent,
    ArticuloFormComponent,
    ArticuloComponent,
    NavigationPrivateComponent,
    PersonasFormComponent,
    UsersComponent,
    UserFormComponent,
    ApiErrorsComponent,
    CajaComponent,
    ProveedorListasComponent,
    ProductoListComponent,
    ProveedorArticulosComponent,
    CajaArticulosComponent,
    CajaKartComponent,
    CajaClientesComponent,
    ComprasComponent,
    ArticuloCardSelectComponent,
  //  ComprasItemsComponent,
    CheckoutComponent,
    PersonasSelectComponent,
    ComprobantesComponent,
    ComprobantesItemsComponent,
    VentasComponent,
    ReportesComponent,
    PrintComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    Globals
    , PlusService
    , TaskService
    , PersonasService
    , ProductosService
    , AuthGuard
    , {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
    ,{ provide: HTTP_INTERCEPTORS, useClass: ErrorshandlerService, multi: true }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
