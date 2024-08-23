import { FC } from "react";
import { useNavigate } from "react-router-dom";
import ZodiacSignCard from "@/components/ui/zodiac-sign-card.tsx";
import { ZodiacSignsTypes } from "@/shared/types/signs.enum.ts";

type Props = {
  data: Record<ZodiacSignsTypes, string>;
};

const HoroscopeList: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const handleNavigate = (sign: string) => {
    navigate(`/${sign}`);
  };

  return (
    <ul className="mt-4 flex flex-col gap-3">
      {Object.keys(data).map(elem => (
        <li
          role="button"
          key={elem}
          tabIndex={0}
          onClick={() => handleNavigate(elem)}
          onKeyDown={() => handleNavigate(elem)}
        >
          <ZodiacSignCard name={elem as ZodiacSignsTypes} />
        </li>
      ))}
    </ul>
  );
};

export default HoroscopeList;
