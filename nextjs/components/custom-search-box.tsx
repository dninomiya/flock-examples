import { useForm } from 'react-hook-form';
import { HiOutlineSearch } from 'react-icons/hi';
import { SearchBoxProvided } from 'react-instantsearch-core';
import { connectSearchBox } from 'react-instantsearch-dom';

const SearchBoxBase = ({ currentRefinement, refine }: SearchBoxProvided) => {
  const { register, handleSubmit } = useForm<{ q: string }>();

  const search = ({ q }: { q: string }) => {
    refine(q);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(search)}
      role="search"
      className="flex items-center"
    >
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <HiOutlineSearch
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          id="search"
          className="block w-full pl-10 pr-3 py-2 border border rounded-md leading-5 bg-transparent placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="検索"
          type="search"
          defaultValue={currentRefinement}
          {...register('q')}
          autoComplete="off"
        />
      </div>
      <button className="ml-2">検索</button>
    </form>
  );
};

const CustomSearchBox = connectSearchBox(SearchBoxBase);

export default CustomSearchBox;
