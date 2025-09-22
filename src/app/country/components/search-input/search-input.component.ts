import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  linkedSignal,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  placeholder = input('Search');
  debounceTime = input(1000);
  initialValue = input<string>();

  value = output<string>();

  inputValue = linkedSignal<string>(() => this.initialValue() ?? ''); //señal que debe ser inicializada linkedSignal

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeOut = setTimeout(() => {
      this.value.emit(value);
    }, this.debounceTime());

    onCleanup(() => {
      clearTimeout(timeOut);
    });
  });
}
