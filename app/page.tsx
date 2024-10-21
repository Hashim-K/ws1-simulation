import { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { MainNav } from "@/components/main-nav";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import { Search } from "@/components/search";
import TeamSwitcher from "@/components/team-switcher";
import { UserNav } from "@/components/user-nav";
import { PlusMinus } from "@/components/charts/points";
import TeamOverview from "@/components/tabs/teamoverview";
import Reports from "@/components/tabs/reports";
import Replay from "@/components/tabs/replay";
import Analytics from "@/components/tabs/analytics";
import PlayerOverview from "@/components/tabs/playeroverview";
import CoachingBoard from "@/components/tabs/coachingboard";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "Example dashboard app built using the components.",
};

export default function DashboardPage() {
	return (
		<>
			<div className="md:hidden">
				<Image
					src="/examples/dashboard-light.png"
					width={1280}
					height={866}
					alt="Dashboard"
					className="block dark:hidden"
				/>
				<Image
					src="/examples/dashboard-dark.png"
					width={1280}
					height={866}
					alt="Dashboard"
					className="hidden dark:block"
				/>
			</div>
			<div className="hidden flex-col md:flex">
				<div className="border-b">
					<div className="flex h-16 items-center px-4">
						<TeamSwitcher />
						<MainNav className="mx-6" />
						<div className="ml-auto flex items-center space-x-4">
							<Search />
							<UserNav />
						</div>
					</div>
				</div>
				<div className="flex-1 space-y-4 p-8 pt-6">
					<div className="flex items-center justify-between space-y-2">
						<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
					</div>
					<Tabs defaultValue="teamoverview" className="space-y-4">
						<TabsList>
							<TabsTrigger value="teamoverview">Team Overview</TabsTrigger>
							<TabsTrigger value="playeroverview">Player Overview</TabsTrigger>
							<TabsTrigger value="analytics">Analytics</TabsTrigger>
							<TabsTrigger value="reports">Reports</TabsTrigger>
							<TabsTrigger value="replay">Replay</TabsTrigger>
							<TabsTrigger value="board">Coaching Board</TabsTrigger>
						</TabsList>

						<TabsContent value="teamoverview">
							<TeamOverview />
						</TabsContent>
						<TabsContent value="Playeroverview">
							<PlayerOverview />
						</TabsContent>
						<TabsContent value="analytics">
							<Analytics />
						</TabsContent>
						<TabsContent value="reports">
							<Reports />
						</TabsContent>
						<TabsContent value="replay">
							<Replay />
						</TabsContent>
						<TabsContent value="board">
							<CoachingBoard />
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</>
	);
}
