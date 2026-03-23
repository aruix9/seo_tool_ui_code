import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type ItemProp = {
  date: string;
  value: number;
}

type TimeSeriesProps = {
  ai_opportunity_traffic: ItemProp[];
  avg_position: ItemProp[];
  link_presence: ItemProp[];
  organic_traffic: ItemProp[];
}

const PerformanceTraffics = ({ time_series }: { time_series: TimeSeriesProps }) => {
  const ai_traffic = time_series.ai_opportunity_traffic
  // const avg_position = time_series.avg_position
  // const link_presence = time_series.link_presence
  // const organic_traffic = time_series.organic_traffic

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Performance Over Time</h3>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-lg border border-primary/20 font-bold">AIO Traffic</button>
          {/* <button className="px-3 py-1 text-xs bg-primary/5 text-slate-600 dark:text-slate-400 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">Avg Position</button>
          <button className="px-3 py-1 text-xs bg-primary/5 text-slate-600 dark:text-slate-400 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">Link Presence</button>
          <button className="px-3 py-1 text-xs bg-primary/5 text-slate-600 dark:text-slate-400 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">Organic Traffic</button> */}
        </div>
      </div>
      <div className="w-full h-48">
        <ResponsiveContainer className="text-xs">
          <AreaChart
            data={ai_traffic}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default PerformanceTraffics
