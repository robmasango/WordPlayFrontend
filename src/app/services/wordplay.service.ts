import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sentence } from '../models/sentence.model';
import { Word } from '../models/word.model';
import { WordType } from '../models/wordtype.model';

const baseUrl = 'https://localhost:7071/api';

@Injectable({
  providedIn: 'root'
})
export class WordPlayService {

  constructor(private http: HttpClient) { }

  //Sentences
  getAllSentences(): Observable<Sentence[]> {
    let url = `${baseUrl}/Sentences`;
    return this.http.get<Sentence[]>(url);
  }

  getSentence(id: any): Observable<Sentence> {
    let url = `${baseUrl}/Sentences/${id}`;
    return this.http.get<Sentence>(url);
  }

  createSentence(data: any): Observable<any> {
    let url = `${baseUrl}/Sentences`;
    return this.http.post(url, data);
  }

  updateSentence(id: any, data: any): Observable<any> {
    let url = `${baseUrl}/Sentences/${id}`;  
    return this.http.put(url, data);
  }

  deleteSentence(id: any): Observable<any> {
    let url = `${baseUrl}/Sentences/${id}`;  
    return this.http.delete(url);
  }

  deleteAllSentences(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findBySentence(phrase: any): Observable<Sentence[]> {
    return this.http.get<Sentence[]>(`${baseUrl}?phrase=${phrase}`);
  }

  //Words
   getAllWords(): Observable<Word[]> {
    let url = `${baseUrl}/Words`;
    return this.http.get<Word[]>(url);
  }

  getWord(id: any): Observable<Word> {
    let url = `${baseUrl}/Words/${id}`;
    return this.http.get<Word>(url);
  }

  createWord(data: any): Observable<any> {
    let url = `${baseUrl}/Words`;
    return this.http.post(url, data);
  }

  updateWord(id: any, data: any): Observable<any> {
    let url = `${baseUrl}/Words/${id}`;  
    return this.http.put(url, data);
  }

  deleteWord(id: any): Observable<any> {
    let url = `${baseUrl}/Words/${id}`;  
    return this.http.delete(url);
  }

  deleteAllWords(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByWord(wordtype: any): Observable<Word[]> {
    let url = `${baseUrl}/Words/GetWordByWordType/${wordtype}`;  
    return this.http.get<Word[]>(`${baseUrl}?wordtype=${wordtype}`);
  }

    //WordTypes
    getAllWordTypes(): Observable<WordType[]> {
      let url = `${baseUrl}/WordTypes`;
      return this.http.get<WordType[]>(url);
    }
  
    getWordType(id: any): Observable<WordType> {
      let url = `${baseUrl}/WordTypes/${id}`;
      return this.http.get<WordType>(url);
    }
  
    createWordType(data: any): Observable<any> {
      let url = `${baseUrl}/WordTypes`;
      return this.http.post(url, data);
    }
  
    updateWordType(id: any, data: any): Observable<any> {
      let url = `${baseUrl}/WordTypes/${id}`;  
      return this.http.put(url, data);
    }
  
    deleteWordType(id: any): Observable<any> {
      let url = `${baseUrl}/WordTypes/${id}`;  
      return this.http.delete(url);
    }
  
    deleteAllWordTypes(): Observable<any> {
      return this.http.delete(baseUrl);
    }
  
    findByWordType(phrase: any): Observable<WordType[]> {
      return this.http.get<WordType[]>(`${baseUrl}?phrase=${phrase}`);
    }
}