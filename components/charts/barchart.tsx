"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
	Card,
	CardContent,
	CardHeader,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

// Define the dataset for points scored per minute, grouped by quarters
const chartData = [
	{ quarter: "Q1", minute: 1, teamA: 2, teamB: 3 },
	{ quarter: "Q1", minute: 2, teamA: 4, teamB: 2 },
	{ quarter: "Q1", minute: 3, teamA: 5, teamB: 7 },
	{ quarter: "Q1", minute: 4, teamA: 3, teamB: 1 },
	{ quarter: "Q1", minute: 5, teamA: 6, teamB: 4 },
	{ quarter: "Q2", minute: 1, teamA: 7, teamB: 6 },
	{ quarter: "Q2", minute: 2, teamA: 4, teamB: 2 },
	{ quarter: "Q2", minute: 3, teamA: 2, teamB: 5 },
	{ quarter: "Q2", minute: 4, teamA: 6, teamB: 7 },
	{ quarter: "Q2", minute: 5, teamA: 5, teamB: 4 },
	{ quarter: "Q3", minute: 1, teamA: 8, teamB: 6 },
	{ quarter: "Q3", minute: 2, teamA: 4, teamB: 3 },
	{ quarter: "Q3", minute: 3, teamA: 7, teamB: 7 },
	{ quarter: "Q3", minute: 4, teamA: 3, teamB: 1 },
	{ quarter: "Q3", minute: 5, teamA: 5, teamB: 5 },
	{ quarter: "Q4", minute: 1, teamA: 7, teamB: 6 },
	{ quarter: "Q4", minute: 2, teamA: 2, teamB: 2 },
	{ quarter: "Q4", minute: 3, teamA: 4, teamB: 6 },
	{ quarter: "Q4", minute: 4, teamA: 5, teamB: 4 },
	{ quarter: "Q4", minute: 5, teamA: 8, teamB: 6 },
];

// Chart configuration for team colors and labels
const chartConfig = {
	teamA: {
		label: "Team A",
		color: "hsl(var(--chart-1))",
	},
	teamB: {
		label: "Team B",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig;

export function PointsScoredPerMinuteChart() {
	const [activeChart, setActiveChart] =
		React.useState<keyof typeof chartConfig>("teamA");

	const total = React.useMemo(
		() => ({
			teamA: chartData.reduce((acc, curr) => acc + curr.teamA, 0),
			teamB: chartData.reduce((acc, curr) => acc + curr.teamB, 0),
		}),
		[]
	);

	return (
		<Card>
			<CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
				<div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
					<CardTitle>Points Scored Per Minute by Quarter</CardTitle>
					<CardDescription>
						An interactive bar chart showing points scored per minute for each
						quarter.
					</CardDescription>
				</div>
				<div className="flex">
					{["teamA", "teamB"].map((key) => {
						const chart = key as keyof typeof chartConfig;
						return (
							<button
								key={chart}
								data-active={activeChart === chart}
								className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
								onClick={() => setActiveChart(chart)}
							>
								<span className="text-xs text-muted-foreground">
									{chartConfig[chart].label}
								</span>
								<span className="text-lg font-bold leading-none sm:text-3xl">
									{total[key as keyof typeof total].toLocaleString()}
								</span>
							</button>
						);
					})}
				</div>
			</CardHeader>
			<CardContent className="px-2 sm:p-6">
				<ChartContainer
					config={chartConfig}
					className="aspect-auto h-[250px] w-full"
				>
					<BarChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="minute"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={32}
							label={{
								value: "Minutes",
								position: "insideBottom",
								offset: -10,
							}}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent
									className="w-[150px]"
									nameKey="points"
									labelFormatter={(value) => `Minute ${value}`}
								/>
							}
						/>
						<Bar
							dataKey={activeChart}
							fill={`var(--color-${activeChart})`}
							name={chartConfig[activeChart].label}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
