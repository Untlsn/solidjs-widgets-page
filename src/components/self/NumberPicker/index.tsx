import * as S from './style.module.css'
import Arrow from '$/components/self/NumberPicker/Arrow';
import { createSignal } from 'solid-js';

export interface NumberPickerProps {
  value?: number
}

const NumberPicker = (props: NumberPickerProps) => {
  const [value, setValue] = createSignal(props.value);

  return (
    <div class='border-2 w-75 h-9 px-2 rounded flex'>
      <input
        class={`flex-1 h-full ${S.Input}`}
        role="spinbutton"
        inputmode="numeric"
        aria-valuenow=""
        type="number"
        tabindex="0"
        autocomplete="off"
        value={value()}
      />
      <div class='border-l-2 pl-2'>
        <button class='block' onClick={() => setValue(v => v + 1)}>
          <Arrow />
        </button>
        <button class='block' onClick={() => setValue(v => v - 1)}>
          <Arrow class='transform rotate-180' />
        </button>
      </div>
    </div>
  );
};

export default NumberPicker;