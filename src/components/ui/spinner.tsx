import Lottie from "lottie-react";
import spinner from "public/spinner.json";

const Spinner = () => {
  return (
    <div className="m-auto h-full w-48">
      <Lottie animationData={spinner} loop className="h-full w-full" />
    </div>
  );
};

export default Spinner;
