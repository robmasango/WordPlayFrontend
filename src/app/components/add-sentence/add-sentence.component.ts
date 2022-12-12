import { Component, OnInit } from '@angular/core';
import { Sentence } from 'src/app/models/sentence.model';
import { WordPlayService } from 'src/app/services/wordplay.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { WordType } from 'src/app/models/wordtype.model';
import { Word } from 'src/app/models/word.model';

@Component({
  selector: 'app-add-sentence',
  templateUrl: './add-sentence.component.html',
  styleUrls: ['./add-sentence.component.css']
})

export class AddSentenceComponent implements OnInit  {

  radioSel:any;
  radioSelected!:string;
  radioSelectedString!:string
  wordtypes?: WordType[];
  words?: Word[];
  
  title = 'WordPlay';
  website = 'https://github.com/robmasango';

  ngOnInit() {
    this.retrieveWordTypes();
    this.radioSelected = "item_3";
    this.getSelecteditem();
  }

getSelecteditem(){
  this.radioSel = this.wordtypes?.find(Item => Item.name === this.radioSelected);
  this.radioSelectedString = JSON.stringify(this.radioSel);
  this.retrieveWordsByWordType(this.radioSelectedString);
}

onItemChange(item: any){
  this.getSelecteditem();
}

  items = ['Fox', 'the', 'quick', 'jumped', 'brown'];

  basket = ['over', 'the', 'cow'];

  dropwords(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  sentence: Sentence = {
    phrase: ''
  };
  submitted = false;

  constructor(private wordplayService: WordPlayService) { }

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

  retrieveWordsByWordType(wordtype: any): void {
    this.wordplayService.findByWord(wordtype)
      .subscribe({
        next: (data) => {
          this.words = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  saveSentence(): void {
    const data = {
      title: this.sentence.phrase,
    };

    this.wordplayService.createSentence(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  
  newSentence(): void {
    this.submitted = false;
    this.sentence = {
      phrase: ''
    };
  }

}