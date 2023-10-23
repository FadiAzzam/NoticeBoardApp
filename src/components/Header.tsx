import AddTodo from "./AddTodo";

const Header = () => {
  return (
    <header className=" sticky top-0 right-0 left-0 shadow p-6 flex justify-center items-center w-full">
      <nav className="w-full md:w-1/3 " aria-label="Global">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="my-8 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-gray-100 text-center">
            Notice{" "}
            <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
              Board
            </mark>
          </h1>
          <AddTodo />
        </div>
      </nav>
    </header>
  );
};

export default Header;
