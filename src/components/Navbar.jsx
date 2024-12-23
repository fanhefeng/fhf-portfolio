import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { website, theLink, navLinks } from "../constants";
import menuIcon from "../assets/images/menu.svg";
import closeIcon from "../assets/images/close.svg";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	const toLink = () => {
		window.open(theLink.url, "_blank");
	};

	useEffect(() => {
		if (toggle) {
			setActive("");
		}
	}, [toggle]);

	const renderNavLinks = (isSecondary) => (
		<ul className={`list-none ${isSecondary ? "flex sm:hidden" : "hidden sm:flex"} flex-row gap-6`}>
			{navLinks.map((link) => (
				<li
					key={link.id}
					className={`${
						active === link.title ? "text-white" : isSecondary ? "text-secondary" : "text-white"
					} hover:text-white text-[20px] font-medium cursor-pointer`}
					onClick={() => {
						setActive(link.title);
						if (isSecondary) {
							setToggle(false);
						}
					}}
				>
					<a href={`#${link.id}`}>{link.title}</a>
				</li>
			))}
			<li className={`text-${isSecondary ? "secondary" : "white"} hover:text-white text-[20px] font-medium cursor-pointer`}>
				<button onClick={toLink}>{theLink.name}</button>
			</li>
		</ul>
	);

	return (
		<>
			<nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}>
				<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
					<Link
						to="/"
						className="flex items-center gap-2"
						onClick={() => {
							setActive("");
							window.scrollTo(0, 0);
						}}
					>
						<img src={website.logo} alt={website.logoAlt} className="w-9 h-9 object-contain" />
						<p className="text-white text-[20px] font-bold cursor-pointer flex">{website.short_name}</p>
					</Link>
					{renderNavLinks(false)}
					<div className="sm:hidden flex flex-1 justify-end items-center">
						<img
							src={toggle ? closeIcon : menuIcon}
							alt="menu"
							className="w-[28px] h-[18px] object-contain cursor-pointer color-white"
							onClick={() => setToggle(!toggle)}
						/>
						<div
							className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass ${
								toggle ? "flex" : "hidden"
							}`}
						>
							{renderNavLinks(true)}
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;