import React from "react"
import PointSystem from "./PointSystem"
import Timer from "./Timer"
import Image from "next/image"

const customizations = [
	{
		icon: "/icons/dark.svg",
		name: "dark",
		link: "#",
	},
	{
		icon: "/icons/customise.svg",
		name: "customise",
		link: "#",
	},
	{
		icon: "/icons/settings.svg",
		name: "settings",
		link: "#",
	},
]

const GameNav = () => {
	return (
		<nav className="w-full justify-evenly items-center flex border-b pb-2">
			<div className="flex items-center gap-2">
				<PointSystem />
				<Timer />
			</div>
			<h1 className="text-5xl font-semibold">NEXT SNAKE</h1>
			<div className="flex gap-3">
				{/* {customizations.map(customize => (
					<Image
						width={20}
						height={20}
						src={customize.icon}
						itemType="svg"
						alt={customize.name}
					/>
				))} */}
			</div>
		</nav>
	)
}

export default GameNav
