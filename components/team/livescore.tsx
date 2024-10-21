const LiveScore = () => {
	const score = { teamA: 85, teamB: 78, timeLeft: "02:35" }; // Example data

	return (
		<div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
			<div className="text-xl font-bold">Team A: {score.teamA}</div>
			<div className="text-xl font-bold">Team B: {score.teamB}</div>
			<div className="text-lg">Time Left: {score.timeLeft}</div>
		</div>
	);
};

export default LiveScore;
