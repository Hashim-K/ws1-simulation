import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VideoCard = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Last Offensive Play</CardTitle>
			</CardHeader>
			<CardContent>
				{/* Video player with the same dimensions as the ShotChart */}
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
			</CardContent>
		</Card>
	);
};

export default VideoCard;
