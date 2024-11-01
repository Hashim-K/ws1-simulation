"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Replay() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Replay - Game replay</CardTitle>
			</CardHeader>
			<CardContent>
				{/* YouTube video embed with responsive ratio */}
				<div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
					<iframe
						className="absolute top-0 left-0 w-full h-full"
						src="https://www.youtube.com/embed/CV9S_xnd_6s"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			</CardContent>
		</Card>
	);
}

export default Replay;
