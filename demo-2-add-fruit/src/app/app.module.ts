import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FruitManagerComponent } from './fruit-manager/fruit-manager.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { FruitCardComponent } from './fruit-card/fruit-card.component';
import { SearchComponent } from './search/search.component';
import { IconComponent } from './icon/icon.component';
import { HeaderComponent } from './header/header.component';
import { AddFruitComponent } from './add-fruit/add-fruit.component';


@NgModule({
  declarations: [
    AppComponent,
    FruitManagerComponent,
    FruitListComponent,
    FruitCardComponent,
    SearchComponent,
    IconComponent,
    HeaderComponent,
    AddFruitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
