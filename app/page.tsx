import React from "react"

const techStack = [
	{
		stack: "ReactJs",
		brief:
			"The library for web and native user interfaces,The library for web and native user interfacesThe library for web and native user interfaces",
	},
	{
		stack: "NextJs",
		brief:
			"NextJs is a React framework for server-rendered React applications. It provides features like server-side rendering and static site generation to optimize performance and SEO.",
	},
	{
		stack: "TypeScript",
		brief:
			"TypeScript is a typed superset of JavaScript that adds static type checking to your code, making it more maintainable and less error-prone.",
	},
	{
		stack: "Tailwind CSS",
		brief:
			"Tailwind CSS is a utility-first CSS framework that makes it easy to create responsive and customizable user interfaces by applying classes directly in your HTML markup.",
	},
	{
		stack: "Firebase",
		brief:
			"Firebase is a cloud-based platform by Google for developing web and mobile applications. It provides authentication, real-time database, hosting, and other services.",
	},
	{
		stack: "Shadcn UI",
		brief:
			"Shadcn UI is a UI component library that offers a set of reusable components and styles to help you build consistent and visually appealing user interfaces.",
	},
	{
		stack: "Radix UI",
		brief:
			"Radix UI is a set of low-level UI primitives that allow you to build custom UI components with full control over behavior and styling.",
	},
	{
		stack: "GSAP",
		brief:
			"GSAP (GreenSock Animation Platform) is a JavaScript animation library that provides a powerful and flexible way to create smooth animations and interactive experiences.",
	},
]

const page = () => {
	return (
		<section className="flex min-h-screen  bg-gradient-to-b from-60% pb-8 from-[#000] to-[#101010] text-white flex-col justify-center items-center w-full ">
			<h1 className="text-9xl border border-gray-8 border-opacity-40 py-[3rem] px-[5rem]   tracking-tighter mt-[20%] my-10 font-bold ">
				Next Snake <span className="tag"> 0.0.1</span>
			</h1>
			<div className="flex gap-3">
				<button className="btn btn-main">New Game</button>
				<button className="btn btn-outline">Check Scores</button>
			</div>

			<div className="text-slate-300 max-w-[1440px]  leading-relaxed text-center mt-6">
				<p className="text-gray-7">
					Using Next.js, Tailwind CSS, and TypeScript I build a advanced simple
					Snake Game. <br /> This game will have total of 5 versions in next
					6months. Currently I am on the version of
					<span className="tag ml-2">1.0.0</span>
				</p>
				<div className=" mx-auto max-w-7xl  mt-[6rem] ">
					<h3 className="text-2xl text-white mb-6">
						What's in NextSnake?{" "}
						<span className="text-gray-8">
							All the tech stack used in this project
						</span>
					</h3>
					<ul className="grid grid-cols-3 place-items-center gap-4  space-y-2">
						{techStack.map(tech => (
							<li
								className="border-2 border-[#101010] transition-all duration-200 ease-linear cursor-pointer h-40 text-left rounded-xl hover:bg-[#101010]    px-8 pt-8 pb-10 col-span-1 flex flex-col  justify-between"
								key={tech.stack}>
								<div>
									<h4 className="text-xl text-white">{tech.stack}</h4>
								</div>
								<div className="flex-grow">
									<p className="text-sm mt-1  text-gray-7">{tech.brief}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default page
