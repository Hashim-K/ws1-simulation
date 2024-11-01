"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// FatigueCard Component that accepts fatigueValues as a prop
export function FatigueCard({ fatigueValues }: { fatigueValues: number[] }) {
	const [fatigueIndex, setFatigueIndex] = useState(0);

	// Function to loop through fatigue values
	useEffect(() => {
		const interval = setInterval(() => {
			setFatigueIndex((prevIndex) => (prevIndex + 1) % fatigueValues.length);
		}, 2000); // Update every 2 seconds

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, [fatigueValues]);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Fatigue Level</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex items-center justify-center text-3xl font-bold">
					{fatigueValues[fatigueIndex]}%
				</div>
				<p className="text-center text-muted-foreground">
					Updated every 2 seconds
				</p>
			</CardContent>
		</Card>
	);
}

export default FatigueCard;
