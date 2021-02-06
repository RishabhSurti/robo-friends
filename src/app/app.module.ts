import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardComponent } from './robo-array/card/card.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { RoboArrayComponent } from './robo-array/robo-array.component';
import { HeaderComponent } from './header/header.component';
import { RoboArrayComponentService } from './robo-array/robo-array.component.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent,
    RoboArrayComponent,
    CardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RoboArrayComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
