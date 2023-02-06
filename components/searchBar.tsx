import { useStateValue, setSearch } from "@/state";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchBar() {
    const [{ searchVal }, dispatch] = useStateValue();
    const [search, setSearchVal] = useState(searchVal);
    const router = useRouter();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchVal(value);
    }

    const handleClick = () => {
        if (router.pathname !== '/listings') {
            router.push('/listings');
        }
        if (search.length < 5) {
            return dispatch(setSearch(''));
        }
        dispatch(setSearch(search.trim()));
    }

    return (
        <div className='flex flex-row justify-around max-md:py-4 max-md:w-full md:w-6/12'>
            <input className='placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-l-xl py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-slate-400 focus:ring-1 sm:text-sm text-slate-800' placeholder='Search for listings' type='text' name='search' value={search} onChange={onChange} />
            <button onClick={handleClick} className='py-2 px-2 text-white bg-black rounded-r-xl'>
                Search
            </button>
        </div>
    )
}