import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentencesListComponent } from './components/sentence-list/sentence-list.component';
import { SentenceDetailsComponent } from './components/sentence-details/sentence-details.component';
import { AddSentenceComponent } from './components/add-sentence/add-sentence.component';

const routes: Routes = [
  { path: '', redirectTo: 'sentences', pathMatch: 'full' },
  { path: 'sentences', component: SentencesListComponent },
  { path: 'sentences/:id', component: SentenceDetailsComponent },
  { path: 'add', component: AddSentenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }