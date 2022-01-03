import { JSX, For, useContext, createSignal, createMemo } from 'solid-js';
import { UrlContext } from '$/context/url';

const list: ListPoint[] = [
  { name: 'getting started', link: '/docs' },
  { name: 'inputs', branches: [
      { name: 'NumberPicker', link: '/docs/NumberPicker' }
    ],
  },
]

const Arrow = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"/>
  </svg>
)

interface ListPoint { name: string, link?: string, linkPrefix?: string, branches?: ListPoint[] }

const List = (props: { list: ListPoint[], url: string }) => {
  return (
    <ul>
      <For each={props.list}>{(point) => {
        const baseSelect = createMemo(() => point.link == props.url);
        const selected = createMemo(() => {
          return baseSelect() || point.branches && point.branches.some(branch => branch.link == props.url)
        });
        const [show, setShow] = createSignal(selected());

        return (
          <li class={`px-4 py-2 rounded-lg ${
            selected() ? 'text-blue-light-solid font-semibold' : ''
          } ${
            baseSelect() ? ' bg-select-gray' : ''
          }`}>
            {
              point.link
                ? (
                  <a href={point.link}>
                    {point.name}
                  </a>
                )
                : (
                  <>
                    <button class='flex items-center justify-between pr-4 pb-2 w-full' onClick={() => setShow(v => !v)}>
                      {point.name}
                      <Arrow class={`transform transition-transform ${show() ? 'rotate-90' : ''}`} />
                    </button>
                    {point.branches && (
                      <div class={!show() ? 'hidden' : undefined}>
                        <List list={point.branches} url={props.url} />
                      </div>
                    )}
                  </>
                )
            }
          </li>
        )
      }}</For>
    </ul>
  )
}

const Wrapper = (props: JSX.HTMLAttributes<HTMLElement>) => {
  const url = useContext(UrlContext);


  return (
    <div class='flex-1 flex'>
      <nav class='w-75 capitalize p-2'>
        <List list={list} url={url} />
      </nav>
      <main {...props} />
    </div>
  );
};

export default Wrapper;