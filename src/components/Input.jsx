import { useController } from 'react-hook-form';

const Input = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: '',
  });
  return (
    <input
      className="w-full py-3 outline-none bg-transparent border-b border-borderColor block text-base"
      {...field}
      {...props}
    />
  );
};

export default Input;
