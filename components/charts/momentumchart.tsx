"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

// Sample data for score differential over the course of a game
const chartData = [
	{ minute: 1, scoreDifferential: 0 }, // Game starts at 0
	{ minute: 2, scoreDifferential: 2 }, // Team A leads by 2 points
	{ minute: 3, scoreDifferential: 4 }, // Team A leads by 4 points
	{ minute: 4, scoreDifferential: 3 }, // Team B catches up slightly
	{ minute: 5, scoreDifferential: 1 }, // Team B closes the gap
	{ minute: 6, scoreDifferential: -1 }, // Team B takes the lead
	{ minute: 7, scoreDifferential: 0 }, // Game is tied
	{ minute: 8, scoreDifferential: 3 }, // Team A leads by 3 points
	{ minute: 9, scoreDifferential: 5 }, // Team A extends the lead
	{ minute: 10, scoreDifferential: 7 }, // Team A leads by 7 points
	{ minute: 11, scoreDifferential: 8 }, // Team A leads by 8 points
	{ minute: 12, scoreDifferential: 9 }, // Team A leads by 9 points
	{ minute: 13, scoreDifferential: 6 }, // Team A leads by 6 points'
	{ minute: 14, scoreDifferential: 1 }, // Team A leads by 5 points
	{ minute: 15, scoreDifferential: 5 }, // Team A leads by 2 points
	{ minute: 16, scoreDifferential: -2 }, // Team A leads by 3 points
];

// Config for the score differential chart
const chartConfig = {
	scoreDifferential: {
		label: "Score Differential",
		color: "hsl(var(--chart-1))",
		icon: TrendingUp,
	},
} satisfies ChartConfig;

export function MomentumChart() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Momentum Chart - Score Differential</CardTitle>
				<CardDescription>
					Showing the score differential over the game
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<AreaChart
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
							label={{
								value: "Game Time (Minutes)",
								position: "insideBottom",
								offset: -10,
							}}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Area
							dataKey="scoreDifferential"
							type="step"
							fill="var(--color-scoreDifferential)"
							fillOpacity={0.4}
							stroke="var(--color-scoreDifferential)"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
			<CardFooter>
				<div className="flex w-full items-start gap-2 text-sm">
					<div className="grid gap-2">
						<div className="flex items-center gap-2 font-medium leading-none">
							Current differential of{" "}
							{chartData[chartData.length - 1].scoreDifferential} points
							<TrendingUp className="h-4 w-4" />
						</div>
						<div className="flex items-center gap-2 leading-none text-muted-foreground">
							Game progress: First 16 minutes
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
