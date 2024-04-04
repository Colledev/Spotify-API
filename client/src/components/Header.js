import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-end items-center bg-zinc-900 p-4 fixed w-full z-0">
            <div className="flex justify-between ">
                <button className=" text-zinc-200 text-xl rounded-full mr-8">Logout</button>
                <button className="bg-white text-zinc-900 text-xl px-8 py-4 rounded-full">Profile</button>
            </div>
        </header>
    );
}

export default Header;
