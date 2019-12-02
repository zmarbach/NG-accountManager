import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {

  }

  alert(message: string): void {
    return window.alert(message);
  }

  confirm(message: string): boolean {
    return window.confirm(message);
  }
}
