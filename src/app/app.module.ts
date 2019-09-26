import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import {CommonModule} from '@angular/common';
import {TreeModule} from 'primeng/tree';
import {ToastModule} from 'primeng/toast';
import {ButtonModule, CodeHighlighterModule, ContextMenuModule, OrganizationChartModule, TabViewModule} from 'primeng/primeng';
import {OrganizationChartDemo} from './tree/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TreeDemo} from './filter-tree/filter';
import {NodeService} from './services/NodeService';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    OrganizationChartDemo,
    TreeDemo
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
    CommonModule,
    FormsModule,
    TreeModule,
    ToastModule,
    ButtonModule,
    ContextMenuModule,
    TabViewModule,
    CodeHighlighterModule,
    BrowserAnimationsModule,
    OrganizationChartModule
  ],
  providers: [
    NodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
