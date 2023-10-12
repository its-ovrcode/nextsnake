import GameNav from "@/components/GameNav"
import PointSystem from "@/components/PointSystem"
import React from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className="w-full px-8 flex flex-col h-screen justify-between mt-4 items-start">
			<GameNav />
			{children}
		</section>
	)
}

export default layout
