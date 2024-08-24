import Lottie from "lottie-react";
import spinner from "public/spinner.json";

const Spinner = () => {
  return (
    <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2">
      <Lottie animationData={spinner} loop className="h-full w-full" />
    </div>
  );
};

export default Spinner;
