import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { IdiomasComponent } from './componentes/idiomas/idiomas.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    IdiomasComponent,
    SkillsComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
