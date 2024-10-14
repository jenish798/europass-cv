const Loader = ({bg="bg-white"}:{bg?:string}) => {
  return (
    <div className={`flex h-screen items-center justify-center ${bg}`}>
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-green-600 border-t-transparent"></div>
    </div>
  );
};

export default Loader;
