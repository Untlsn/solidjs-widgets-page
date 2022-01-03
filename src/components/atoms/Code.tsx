import { highlight, languages } from 'prismjs';
import { createMemo } from 'solid-js';
import "prismjs/themes/prism-tomorrow.css";

const Code = (props: { copy: string, lang?: string }) => {
  const lang = createMemo(() => props.lang || 'jsx');

  return (
    <pre
      class='bg-code-dark py-4 px-8 mt-4 rounded-lg tracking-wide group relative'
      style={{ 'word-spacing': '.2em' }}
    >
      <code
        class={`language-${props.lang || 'jsx'}`}
        innerHTML={highlight(props.copy, languages[lang()], lang())}
      />
      <button
        class='absolute right-2 top-2 block bg-black bg-opacity-40 px-2 py-1 rounded-lg hidden group-hover:block text-white'
        onClick={() => props.copy && navigator.clipboard.writeText(props.copy)}
      >
        copy
      </button>
    </pre>
  );
};

export default Code;