import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject();
  private debouncerSuscriptions?: Subscription;
  // @Output()
  // public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  ngOnInit(): void {
    this.debouncerSuscriptions = this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        this.onValue.emit(value);
      })
  }

  ngOnDestroy(): void {
    this.debouncerSuscriptions?.unsubscribe();
  }

  @ViewChild('txtSearchInput')
  public searchInput!: ElementRef<HTMLInputElement>;

  // emitValue(value:string) {
  //   this.onValue.emit(value);
  // }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
