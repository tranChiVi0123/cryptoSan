import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { VinegereComponent } from './_components/vinegere/vinegere.component';
import { PlayfairComponent } from './_components/playfair/playfair.component';
import { CaesarComponent } from './_components/caesar/caesar.component';
import { BoardChallengesComponent } from './_components/board-challenges/board-challenges.component';
import { RankComponent } from './_components/rank/rank.component';
import { ProfileComponent } from './_components/profile/profile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vinegere', component: VinegereComponent },
  { path: 'playfair', component: PlayfairComponent },
  { path: 'caesar', component: CaesarComponent},
  { path: 'board-challenges', component:BoardChallengesComponent},
  { path: 'rank', component: RankComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '', redirectTo:'home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
