import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
 providedIn: 'root',
})

export class StateService {
  private isMenuOpen = new BehaviorSubject<boolean>(false);

  isOpen = this.isMenuOpen.asObservable();

  changeIsOpen(arg) {
    this.isMenuOpen.next(arg);
  }
}
