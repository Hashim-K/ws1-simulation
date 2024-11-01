import GameOverview from "@/components/team/gameoverview";
import TeamStats from "@/components/team/teamstats";
import ShotChart from "@/components/team/shotchart";
import PlayerHighlights from "@/components/team/playerhighlights";
import GameTimeline from "../cards/gametimeline";
import MomentumGraph from "../cards/momentumgraph";
import ShotTypeBreakdown from "../cards/shotbreakdown";
import FoulTracker from "../cards/foultracker";
import KeyPlays from "../cards/keyplays";
import PlayerStats from "../cards/playerstats";
import VideoCard from "../cards/videocard";
import { PointsScoredPerMinuteChart } from "../charts/barchart";
import ChartCard from "../cards/chartcard";
import { MomentumChart } from "../charts/momentumchart";

const TeamOverview = () => {
	return (
		<div className="space-y-6">
			<GameOverview />
			<TeamStats />
			<div className="flex space-x-2">
				<div className="w-1/2">
					<ShotChart />
				</div>
				<div className="flex-grow">
					<VideoCard />
				</div>
			</div>
			<PointsScoredPerMinuteChart />
			<PlayerHighlights />
			<MomentumChart />
			<GameTimeline />
			<FoulTracker />
			<KeyPlays />
		</div>
	);
};

export default TeamOverview;
