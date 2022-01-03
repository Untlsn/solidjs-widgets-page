import { JSX } from 'solid-js';


const Arrow = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg height="1em" fill="currentcolor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M288.66 352H31.34c-17.82 0-26.74-21.54-14.14-34.14L145.86 189.2a20 20 0 0 1 28.28 0L302.8 317.86c12.6 12.6 3.68 34.14-14.14 34.14z"/>
  </svg>
);

export default Arrow;