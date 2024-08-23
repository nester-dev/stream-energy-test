import { FC, InputHTMLAttributes, useRef } from "react";
import { LocaleTypes } from "@/shared/constants.ts";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  onToggle: (locale: LocaleTypes) => void;
};

const Toggle: FC<Props> = ({ name, onToggle, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (isChecked: boolean) => {
    if (isChecked) {
      onToggle(LocaleTypes.EN);
    } else {
      onToggle(LocaleTypes.RU);
    }
  };

  return (
    <label
      role="presentation"
      className="inline-flex cursor-pointer items-center"
      htmlFor={name}
      onClick={e => {
        e.stopPropagation();
        inputRef.current?.click();
      }}
    >
      <input
        ref={inputRef}
        name={name}
        type="checkbox"
        className="peer sr-only"
        onChange={e => handleChange(e.target.checked)}
        {...rest}
      />
      <div className="bg-success peer relative h-[20px] w-[41px] rounded-full after:absolute after:start-[3px] after:top-[2.3px] after:h-[16px] after:w-[16px] after:rounded-full after:bg-white after:transition-all after:duration-300 after:content-[''] peer-checked:after:start-[calc(100%-3px)] peer-checked:after:-translate-x-full peer-focus:outline-none" />
    </label>
  );
};

export default Toggle;
