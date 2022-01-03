import Code from '$/components/atoms/Code';


const CodeExample = (props: { code: string, children: any }) => {
  return (
    <div class='grid grid-rows-2 border-2 rounded-lg'>
      <p class='flex justify-center items-center'>
        {props.children}
      </p>
      <Code copy={props.code} class='h-full flex items-center' />
    </div>
  );
};

export default CodeExample;