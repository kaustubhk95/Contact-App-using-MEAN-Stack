import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import 'rxjs/add/operator/map';
import { Contact } from './contact';

var header:HttpHeaders = new HttpHeaders(); 
header.append('Content-Type','application/json');

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getContacts(){
  }

  addContact(newContact){
  }
}
