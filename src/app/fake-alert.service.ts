import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';

@Injectable()
export class FakeAlertService extends AlertService {
  shouldConfirm = false;

  alert(message: string): void {
  }

  confirm(message: string): boolean {
    return this.shouldConfirm;
  }
}
