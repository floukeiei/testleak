import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  test = 1;
  save = [];
  constructor() { }
}
