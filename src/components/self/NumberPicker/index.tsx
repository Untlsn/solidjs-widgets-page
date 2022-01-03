import * as S from './style.module.css'
import Arrow from '$/components/self/NumberPicker/Arrow';
import { createMemo, createSignal } from 'solid-js';

export interface NumberPickerProps {
  value?: number
  format?: { style: 'currency', currency: 'EUR' }
}

const NumberPicker = (props: NumberPickerProps) => {
  const [value, setValue] = createSignal(props.value);
  const [isFocused, setIsFocused] = createSignal(false)
  const valueWithFormat = createMemo(() => {
    const pickValue = value();

    switch (props.format?.style) {
      case 'currency': {
        switch (props.format?.currency) {
          case 'EUR': return `${pickValue} €`;
          default: return pickValue;
        }
      }
      default: return pickValue;
    }
  })

  return (
    <div class='border-2 w-75 h-9 px-2 rounded flex'>
      <input
        class={`flex-1 h-full ${S.Input}`}
        role="spinbutton"
        inputmode="numeric"
        aria-valuenow=""
        type={isFocused() ? 'number' : 'text'}
        tabindex="0"
        autocomplete="off"
        value={isFocused() ? value() : valueWithFormat()}
        onKeyUp={(ev) => setValue(Number(ev.currentTarget.value))}
        onFocus={[setIsFocused, true]}
        onBlur={[setIsFocused, false]}
      />
      <div class='border-l-2 pl-2'>
        <button class='block' onClick={() => setValue(v => (v || 0) + 1)}>
          <Arrow />
        </button>
        <button class='block' onClick={() => setValue(v => (v || 0) - 1)}>
          <Arrow class='transform rotate-180' />
        </button>
      </div>
    </div>
  );
};

export default NumberPicker;