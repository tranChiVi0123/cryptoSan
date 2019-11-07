import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './_components/home/home.component';
import { VinegereComponent } from './_components/vinegere/vinegere.component';
import { PlayfairComponent } from './_components/playfair/playfair.component';
import { CaesarComponent } from './_components/caesar/caesar.component';
import { BoardChallengesComponent } from './_components/board-challenges/board-challenges.component';
import { RankComponent } from './_components/rank/rank.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { HttpClientModule }    from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VinegereComponent,
    PlayfairComponent,
    CaesarComponent,
    BoardChallengesComponent,
    RankComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
