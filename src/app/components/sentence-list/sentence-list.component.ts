import { Component, OnInit } from '@angular/core';
import { Sentence } from 'src/app/models/sentence.model';
import { Word } from 'src/app/models/word.model';
import { WordType } from 'src/app/models/wordtype.model';
import { WordPlayService } from 'src/app/services/wordplay.service';

@Component({
  selector: 'app-sentence-list',
  templateUrl: './sentence-list.component.html',
  styleUrls: ['./sentence-list.component.css']
})
export class SentencesListComponent implements OnInit {

  sentences?: Sentence[];
  words?: Word[];
  wordtypes?: WordType[];
  currentSentence: Sentence = {};
  currentIndex = -1;
  phrase = '';

  constructor(private wordplayService: WordPlayService) { }

  ngOnInit(): void {
    this.retrieveSentences();
  }

  retrieveSentences(): void {
    this.wordplayService.getAllSentences()
      .subscribe({
        next: (data) => {
          this.sentences = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  retrieveWordTypes(): void {
    this.wordplayService.getAllWordTypes()
      .subscribe({
        next: (data) => {
          this.wordtypes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  retrieveWords(): void {
    this.wordplayService.getAllWords()
      .subscribe({
        next: (data) => {
          this.words = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveSentences();
    this.currentSentence = {};
    this.currentIndex = -1;
  }

  setActiveSentence(sentence: Sentence, index: number): void {
    this.currentSentence = sentence;
    this.currentIndex = index;
  }

  removeAllSentences(): void {
    this.wordplayService.deleteAllSentences()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchSentence(): void {
    this.currentSentence = {};
    this.currentIndex = -1;

    this.wordplayService.findBySentence(this.phrase)
      .subscribe({
        next: (data) => {
          this.sentences = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}