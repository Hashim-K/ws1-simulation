"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VideoCard = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		// This effect will only run on the client side
		setIsClient(true);
	}, []);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Last Offensive Play</CardTitle>
			</CardHeader>
			<CardContent>
				{/* Render video only after confirming client-side */}
				{isClient && (
					<div className="relative w-full max-w-lg">
						<video
							controls
							loop
							autoPlay
							muted
							className="w-full h-auto rounded-lg"
						>
							<source src="/videos/play.mkv" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
				)}
			</CardContent>
		</Card>
	);
};

export default VideoCard;
