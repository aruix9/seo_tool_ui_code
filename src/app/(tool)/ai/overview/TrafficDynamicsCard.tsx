import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type ItemProp = {
    date: string;
    value: number;
}

type TrafficDynamicProps = {
    aio_traffic: ItemProp[];
    organic_traffic: ItemProp[];
    overall_traffic: ItemProp[];
}

const TrafficDynamicsCard = ({ traffic_dynamics }: { traffic_dynamics: TrafficDynamicProps }) => {
    // const aio_traffic = traffic_dynamics.aio_traffic
    // const organic_traffic = traffic_dynamics.organic_traffic
    const overall_traffic = traffic_dynamics.overall_traffic

    return (
        <div className="grid grid-cols-1 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-primary/10 flex flex-col">
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-6 gap-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Traffic Dynamics</h3>
                    <div className="flex flex-wrap gap-2">
                        <button className="px-3 py-1 text-xs font-bold bg-primary/10 text-primary rounded-lg border border-primary/20">Overall Traffic</button>
                        {/* <button className="px-3 py-1 text-xs font-medium bg-primary/5 text-slate-600 dark:text-slate-400 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">Organic Traffic</button>
                        <button className="px-3 py-1 text-xs font-medium bg-primary/5 text-slate-600 dark:text-slate-400 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">Overall Traffic</button> */}
                    </div>
                </div>
                <div className="w-full h-48">
                    <ResponsiveContainer className="text-xs">
                        <AreaChart
                            data={overall_traffic}
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
        </div>
    )
}

export default TrafficDynamicsCard
