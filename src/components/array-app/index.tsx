// import toast, { Toaster } from 'react-hot-toast';

import ArrayMethods from "./ArrayMethods";
import CreateArray from "./CreateArray";
import ResultantArray from "./ResultantArray";
import YourArray from "./YourArray";

const ArrayApp = () => {
  return (
    <main className="mb-auto mt-[66px] p-2 px-4 ">
      <CreateArray />
      <YourArray />
      <ArrayMethods />
      <ResultantArray />
    </main>
  );
};

export default ArrayApp;
