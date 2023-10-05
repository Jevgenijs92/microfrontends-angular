import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FaqAppComponent } from './faq-app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [FaqAppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FaqAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'faq'`, () => {
    const fixture = TestBed.createComponent(FaqAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('faq');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FaqAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('faq app is running!');
  });
});
