import AddTodo from "./AddTodo";

const Header = () => {
  return (
    <header className=" sticky top-0 right-0 left-0 bg-white shadow h-40 p-3 flex justify-center items-center w-full">
      <nav className="w-full md:w-1/2 " aria-label="Global">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-lg font-bold">Notice Board</h1>
          <AddTodo />
        </div>
      </nav>
    </header>
  );
};

export default Header;
