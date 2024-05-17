import { ScaleLoader } from "react-spinners";

const Loading = () => {
      return (
            <div className="min-h-[calc(100vh-124px)] flex justify-center items-center">
                  <ScaleLoader height={50} width={10} color="blue" />
            </div>
      );
};

export default Loading;