"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tldraw, TLComponents, TLCameraOptions } from "@tldraw/tldraw";
import "tldraw/tldraw.css";
import CustomBackground from "@/components/coachingboard/custombackground";

// Define your custom components
const components = (backgroundType: string): TLComponents => ({
	Background: () => <CustomBackground backgroundType={backgroundType} />, // Set custom background component
});

const CAMERA_OPTIONS: TLCameraOptions = {
	isLocked: true,
	wheelBehavior: "pan",
	panSpeed: 1,
	zoomSpeed: 1,
	zoomSteps: [0.1, 0.25, 0.5, 1, 2, 4, 8],
};

const CoachingBoard = () => {
	const [isClient, setIsClient] = useState(false);
	const [backgroundType, setBackgroundType] = useState("halfcourt");

	// Ensure Tldraw is only rendered on the client
	useEffect(() => {
		setIsClient(true);
	}, []);

	// Handle background type change
	const handleBackgroundChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setBackgroundType(event.target.value);
		console.log(event.target.value);
	};

	return (
		<Card>
			<CardHeader>
				<div className="flex justify-between items-center">
					<CardTitle>Coaching Board</CardTitle>
					{/* Dropdown to select the background */}
					<select
						value={backgroundType}
						onChange={handleBackgroundChange}
						className="p-2 border border-gray-300 rounded-md"
					>
						<option value="halfcourt">HalfCourt</option>
						<option value="fullcourt">FullCourt</option>
						<option value="combo">Both</option>
					</select>
				</div>
			</CardHeader>
			<CardContent>
				{/* Fixed size container for the Tldraw component, with no scroll */}
				<div
					className="border border-gray-300 rounded-lg"
					style={{ width: "1800px", height: "805px", overflow: "hidden" }} // Prevent scrolling
				>
					{/* Render the Tldraw component with custom background and camera constraints */}
					{isClient ? (
						<Tldraw
							persistenceKey={`coaching-board-${backgroundType}`}
							autoFocus
							components={components(backgroundType)} // Pass dynamic background based on dropdown
							cameraOptions={CAMERA_OPTIONS} // Set camera options
						/>
					) : (
						<p>Loading...</p>
					)}
				</div>
			</CardContent>
		</Card>
	);
};

export default CoachingBoard;
