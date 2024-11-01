"use client"; // Ensure client-side rendering

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ShotTypeBreakdown from "../cards/shotbreakdown";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Shot } from "@/types"; // Assuming you have a Shot type defined

const ShotChart = () => {
	const [selectedPlayer, setSelectedPlayer] = useState("All");
	const [selectedQuarter, setSelectedQuarter] = useState("All");
	const [imageWidth, setImageWidth] = useState(0);
	const [imageHeight, setImageHeight] = useState(0);
	const [shots, setShots] = useState<Shot[]>([]); // State to store shot data
	const imageRef = useRef<HTMLDivElement | null>(null); // Define the type as HTMLDivElement

	const players = ["Player A", "Player B", "Player C", "All"];
	const quarters = ["Q1", "Q2", "Q3", "Q4", "All"];

	// Fetch shot data from JSON file
	useEffect(() => {
		const fetchShotData = async () => {
			try {
				const res = await fetch("/data/shot-data.json"); // Assuming you have the JSON here
				const data = await res.json();
				setShots(data); // Set the fetched shots in state
			} catch (error) {
				console.error("Error fetching shot data:", error);
			}
		};

		fetchShotData();
	}, []);

	// Filter shots based on selected player and quarter
	const filteredShots = shots.filter(
		(shot) =>
			(selectedPlayer === "All" || shot.player === selectedPlayer) &&
			(selectedQuarter === "All" || shot.quarter === selectedQuarter)
	);

	// Get the actual dimensions of the image after it is rendered
	useEffect(() => {
		if (imageRef.current) {
			const imgElement = imageRef.current;
			setImageWidth(imgElement.clientWidth);
			setImageHeight(imgElement.clientHeight);
		}
	}, []); // Empty dependency array to run only after initial render

	// Original image dimensions (796x712)
	const originalWidth = 796;
	const originalHeight = 712;

	// Scale the shot coordinates based on the image size
	const scaleX = (x: number) => (x / originalWidth) * imageWidth;
	const scaleY = (y: number) => (y / originalHeight) * imageHeight;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Shot Chart</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex space-x-4">
					{/* Shot Chart Section */}
					<div className="relative w-full max-w-lg">
						<div ref={imageRef} className="relative w-full">
							{/* Basketball half-court image as background */}
							<Image
								src="/images/halfcourt.png"
								alt="Basketball Half Court"
								layout="responsive"
								width={originalWidth}
								height={originalHeight}
								priority={true}
								className="rounded-lg"
							/>
							{/* Shots displayed on top of the court */}
							{filteredShots.map((shot, index) => (
								<div
									key={index}
									className="absolute flex items-center justify-center"
									style={{
										left: `${scaleX(shot.x)}px`,
										top: `${scaleY(shot.y)}px`,
										transform: "translate(-50%, -50%)",
										width: "24px",
										height: "24px",
									}}
								>
									{shot.made ? (
										<div className="bg-green-500 absolute w-4 h-4 rounded-full" />
									) : (
										<span className="text-red-500 text-xl font-bold">✖</span>
									)}
								</div>
							))}
						</div>
					</div>

					{/* Toggle Section */}
					<div className="flex flex-col w-1/3 space-y-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
						<div>
							<h4 className="font-semibold text-gray-700 dark:text-gray-200">
								Select Player
							</h4>
							<select
								value={selectedPlayer}
								onChange={(e) => setSelectedPlayer(e.target.value)}
								className="w-full p-2 bg-white dark:bg-gray-700 dark:text-white border dark:border-gray-600 rounded-md"
							>
								{players.map((player) => (
									<option key={player} value={player}>
										{player}
									</option>
								))}
							</select>
						</div>

						<div>
							<h4 className="font-semibold text-gray-700 dark:text-gray-200">
								Select Quarter
							</h4>
							<select
								value={selectedQuarter}
								onChange={(e) => setSelectedQuarter(e.target.value)}
								className="w-full p-2 bg-white dark:bg-gray-700 dark:text-white border dark:border-gray-600 rounded-md"
							>
								{quarters.map((quarter) => (
									<option key={quarter} value={quarter}>
										{quarter}
									</option>
								))}
							</select>
						</div>
						<ShotTypeBreakdown shotData={filteredShots} />
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default ShotChart;
