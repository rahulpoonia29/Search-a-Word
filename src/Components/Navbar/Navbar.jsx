import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();
	return (
		<nav className="bg-gray-100 border-gray-200 dark:bg-zinc-900">
			<div className="max-w-screen-xl flex flex-col items-center justify-center gap-3 sm:justify-between sm:flex-row mx-auto p-10 py-6">
				<Link
					href=""
					className="flex items-center space-x-3 rtl:space-x-reverse"
				>
					<span className="self-center text-3xl font-semibold whitespace-nowrap text-black dark:text-white">
						WordHub
					</span>
				</Link>

				<div className="flex md:order-2 relative">
					<div
						to={`/search/${search}`}
						className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
					>
						<svg
							className="w-4 h-4 text-gray-700 dark:text-gray-200"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						type="text"
						id="search-navbar"
						className="block w-full p-2 ps-10 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search a Word"
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								return navigate(`/search/${search}`);
							}
						}}
					/>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
