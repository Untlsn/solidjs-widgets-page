import Wrapper from '$/pages/docs/lib/Wrapper';
import NumberPicker from '$/components/self/NumberPicker';
import CodeExample from '$/components/molecules/CodeExample';

const codes = [
'<NumberPicker value={9000} />',
]

const NumberPickerPage = () => {
  return (
    <Wrapper class='space-y-8'>
      <h1 class='text-5xl font-bold'>NumberPicker</h1>
      <CodeExample code={codes[0]}>
        <NumberPicker value={9000} />
      </CodeExample>

    </Wrapper>
  );
};

export default NumberPickerPage;