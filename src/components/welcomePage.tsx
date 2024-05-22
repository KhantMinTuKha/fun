interface Props {
  handleClick: () => void;
  clickFunction: (event: any) => void;
}

const WelcomePage = ({ handleClick, clickFunction }: Props) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-y-2">
      <div>
        <h1>Hello! Are u Thae?</h1>
        <div className="my-5">
          <p className="pb-2">Password</p>
          <input
            type="text"
            className="w-[200px] h-[30px] bg-slate-200 py-1 px-2 "
            onChange={clickFunction}
          />
        </div>
        <button
          className="border px-5 py-2 mt-3 hover:bg-slate-300 transition-all duration-200"
          onClick={handleClick}
        >
          Comfirm
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
