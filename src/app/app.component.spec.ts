import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AlertService } from './alert.service';
import { FakeAlertService } from './fake-alert.service';

describe('AppComponent', () => {
  // let fixture: Fixture
  let appComponent: AppComponent;
  let fakeAlertService: FakeAlertService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AlertService, useClass: FakeAlertService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    appComponent = TestBed.createComponent(AppComponent).componentInstance;
    fakeAlertService = appComponent.alertService as FakeAlertService;
  });

  describe('deleteAccount', () => {
    it('does not delete when user cancels', () => {
      fakeAlertService.shouldConfirm = false;
      const deleteAccountSpy = spyOn(appComponent.accountsService, 'delete').and.callFake(function () { });

      appComponent.deleteAccount({
        name: 'asdf'
      } as any);

      expect(deleteAccountSpy).not.toHaveBeenCalled();
    });

    it('deletes when user confirms', () => {
      fakeAlertService.shouldConfirm = true;
      const deleteAccountSpy = spyOn(appComponent.accountsService, 'delete').and.callFake(() => {});

      appComponent.deleteAccount({
        name: 'asdf'
      } as any);

      expect(deleteAccountSpy).toHaveBeenCalled();
    });
  });
});
