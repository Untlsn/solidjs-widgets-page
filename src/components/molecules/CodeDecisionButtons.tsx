import { createSelector, createSignal, For } from 'solid-js';
import Code from '$/components/atoms/Code';

interface DecisionButtonsProps {
  decisions: {
    name: string,
    code: string
  }[]
  lang?: string
}

const CodeDecisionButtons = (props: DecisionButtonsProps) => {
  const [selectedDecision, setSelectedDecision] = createSignal(props.decisions[0])
  const isSelected = createSelector(selectedDecision);

  return (
    <div>
      <p>
        <For each={props.decisions}>{(decision) => {
          return (
            <button
              class={`p-4 border-blue-solid rounded-t-lg hover:bg-select-gray ${
                isSelected(decision) ? 'border-b-2 font-semibold text-blue-solid' : 'rounded-b-lg'
              }`}
              onClick={[setSelectedDecision, decision]}
            >
              {decision.name}
            </button>
          )
        }}</For>
      </p>
      <Code copy={selectedDecision().code} lang={props.lang} />
    </div>
  );
};

export default CodeDecisionButtons;