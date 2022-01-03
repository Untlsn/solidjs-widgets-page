import Wrapper from '$/pages/docs/lib/Wrapper';
import CodeDecisionButtons from '$/components/molecules/CodeDecisionButtons';
import Code from '$/components/atoms/Code';

const importButtons = [
  { name: 'npm', code: 'npm i solidjs-widgets' },
  { name: 'yarn', code: 'yarn add solidjs-widgets' },
  { name: 'pnpm', code: 'pnpm i solidjs-widgets' },
]
const IndexPage = () => {
  return (
    <Wrapper class='pt-12 px-40'>
      <h1 class='font-bold text-5xl pb-8'>Getting Started</h1>
      <p>
        Solidjs Widgets is part of react-to-solid. Solid Widgets is an input set for solid-js based on the look and feel of React Widgets.{' '}
        Its purpose is to make it easier for new users to transition from react to solid-js. Even this site is inspired by the design{' '}
        <a class='text-blue-solid' href="https://jquense.github.io/react-widgets/docs/">https://jquense.github.io/react-widgets/docs/</a>
      </p>
      <CodeDecisionButtons decisions={importButtons} lang='bash' />
      <p>Import your component or components of choice</p>
      <Code copy={`
import DropdownList from "solidjs-widgets/DropdownList";

function App() {
  return (
    <>
      {...}
      <DropdownList />
    </>
  );
}
      `} />
    </Wrapper>
  );
};

export default IndexPage;