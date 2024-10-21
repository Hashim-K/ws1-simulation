interface BarChartProps {
	data: number[];
	labels: string[];
}

const BarChart: React.FC<BarChartProps> = ({ data, labels }) => {
	const maxValue = Math.max(...data); // Get max value for scaling

	return (
		<div className="w-full mt-4 space-y-2">
			{data.map((value, index) => (
				<div key={index} className="flex items-center">
					<span className="w-20">{labels[index]}</span>
					<div className="relative w-full h-6 bg-gray-200 rounded">
						<div
							className="absolute left-0 h-full bg-blue-500 rounded"
							style={{ width: `${(value / maxValue) * 100}%` }}
						/>
						<span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-bold text-black">
							{value}
						</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default BarChart;
