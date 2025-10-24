import { Settings, RefreshCw, Filter, Download } from "lucide-react";
import { useState } from "react";
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Button } from "./ui/button";

const SecurityDashboardDemo = () => {
  const [timeSpan, setTimeSpan] = useState("30 Days");

  // Data for charts
  const threatLevelData = [
    { name: "High", value: 342, color: "#dc2626" },
    { name: "Medium", value: 521, color: "#f97316" },
    { name: "Low/Info", value: 237, color: "#16a34a" },
  ];

  const trendData = [
    { date: "Jan 16", High: 12, Medium: 18, "Low/Info": 8 },
    { date: "Jan 20", High: 15, Medium: 22, "Low/Info": 10 },
    { date: "Jan 24", High: 20, Medium: 28, "Low/Info": 12 },
    { date: "Jan 28", High: 35, Medium: 45, "Low/Info": 18 },
    { date: "Feb 01", High: 48, Medium: 62, "Low/Info": 25 },
    { date: "Feb 05", High: 42, Medium: 55, "Low/Info": 22 },
    { date: "Feb 09", High: 28, Medium: 38, "Low/Info": 15 },
    { date: "Feb 13", High: 18, Medium: 25, "Low/Info": 11 },
  ];

  const attackVectorData = [
    { name: "Phishing", count: 285 },
    { name: "Malware", count: 198 },
    { name: "Web Attack", count: 167 },
    { name: "Insider Threat", count: 142 },
    { name: "DDoS", count: 128 },
    { name: "Supply Chain", count: 89 },
    { name: "Physical", count: 91 },
  ];

  const sectorData = [
    { name: "Government", High: 95, Medium: 120, Low: 45 },
    { name: "Telecom", High: 78, Medium: 98, Low: 38 },
    { name: "Financial", High: 72, Medium: 88, Low: 35 },
    { name: "Energy", High: 58, Medium: 75, Low: 28 },
    { name: "Healthcare", High: 45, Medium: 62, Low: 22 },
    { name: "Education", High: 38, Medium: 52, Low: 18 },
    { name: "Transport", High: 32, Medium: 45, Low: 15 },
    { name: "Critical Infra", High: 28, Medium: 38, Low: 12 },
  ];

  const topActorsData = [
    { actor: "10.0.0.15 (Internal)", count: 78, origin: "Addis Ababa" },
    { actor: "197.X.X.X (External)", count: 65, origin: "Djibouti" },
    { actor: "196.X.X.X (External)", count: 18, origin: "Kenya" },
    { actor: "41.X.X.X (External)", count: 12, origin: "Sudan" },
    { actor: "User: 'Admin_EthioNet'", count: 11, origin: "Oromia" },
    { actor: "172.X.X.X (Internal)", count: 9, origin: "Amhara" },
    { actor: "213.X.X.X (External)", count: 7, origin: "Egypt" },
    { actor: "10.0.1.22 (Internal)", count: 6, origin: "SNNPR" },
    { actor: "5.X.X.X (External)", count: 5, origin: "Germany" },
  ];

  const ethiopianRegions = [
    { name: "Addis Ababa", incidents: 245, color: "#991b1b" },
    { name: "Oromia", incidents: 189, color: "#dc2626" },
    { name: "Amhara", incidents: 167, color: "#ef4444" },
    { name: "Tigray", incidents: 142, color: "#f87171" },
    { name: "Somali", incidents: 128, color: "#fca5a5" },
    { name: "SNNPR", incidents: 98, color: "#86efac" },
    { name: "Afar", incidents: 67, color: "#bbf7d0" },
    { name: "Benishangul", incidents: 45, color: "#dcfce7" },
    { name: "Gambela", incidents: 32, color: "#f0fdf4" },
    { name: "Harari", incidents: 28, color: "#f0fdf4" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ethiopian Security Operations Dashboard
          </h2>
          <p className="text-muted-foreground">Real-time security monitoring and threat intelligence</p>
        </div>

        {/* Global Controls */}
        <div className="professional-card p-6 rounded-xl mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Date Range:</span>
              <span className="text-muted-foreground">16 January 2024 13:27:03 - 15 February 2024 13:27:03 (EAT)</span>
            </div>
            <div className="flex items-center gap-2">
              {["7 Days", "30 Days", "180 Days", "360 Days"].map((span) => (
                <Button
                  key={span}
                  variant={timeSpan === span ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeSpan(span)}
                  className="text-xs"
                >
                  {span}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Open Incidents Count */}
          <div className="professional-card p-6 rounded-xl text-center">
            <p className="text-sm text-muted-foreground mb-2">Open Incidents Count</p>
            <div className="text-5xl font-bold text-primary mb-4">1.1k</div>
            <Button className="w-full">Investigate</Button>
          </div>

          {/* Incident Threat Levels - Donut Chart */}
          <div className="professional-card p-6 rounded-xl">
            <h3 className="font-bold mb-4">Incident Threat Levels</h3>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={threatLevelData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {threatLevelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            <Button className="w-full mt-4">Investigate</Button>
          </div>

          {/* Incident Trend by Threat Level */}
          <div className="professional-card p-6 rounded-xl lg:col-span-2">
            <h3 className="font-bold mb-4">Incident Trend by Threat Level</h3>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" style={{ fontSize: '12px' }} />
                <YAxis style={{ fontSize: '12px' }} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="High" stackId="1" stroke="#dc2626" fill="#dc2626" />
                <Area type="monotone" dataKey="Medium" stackId="1" stroke="#f97316" fill="#f97316" />
                <Area type="monotone" dataKey="Low/Info" stackId="1" stroke="#16a34a" fill="#16a34a" />
              </AreaChart>
            </ResponsiveContainer>
            <Button className="w-full mt-4">Investigate</Button>
          </div>
        </div>

        {/* Attack Vectors */}
        <div className="professional-card p-6 rounded-xl mb-6">
          <h3 className="font-bold mb-4">Incidents by Common Attack Vectors</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={attackVectorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" style={{ fontSize: '12px' }} />
              <YAxis style={{ fontSize: '12px' }} />
              <Tooltip />
              <Bar dataKey="count" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
          <Button className="w-full mt-4">Investigate</Button>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map of Ethiopia */}
          <div className="professional-card p-6 rounded-xl">
            <h3 className="font-bold mb-4">Incidents Count by Source Region</h3>
            <div className="space-y-2 mb-4">
              {ethiopianRegions.map((region) => (
                <div key={region.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: region.color }}
                    />
                    <span className="text-sm">{region.name}</span>
                  </div>
                  <span className="text-sm font-medium">{region.incidents}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground mt-4 pt-4 border-t">
              <span>0 - 50</span>
              <span>51 - 100</span>
              <span>101 - 150</span>
              <span>151 - 200</span>
              <span>&gt; 200</span>
            </div>
          </div>

          {/* Most Targeted Sectors */}
          <div className="professional-card p-6 rounded-xl">
            <h3 className="font-bold mb-4">Most Targeted Sectors/Entities</h3>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={sectorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} style={{ fontSize: '11px' }} />
                <YAxis style={{ fontSize: '12px' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="High" stackId="a" fill="#dc2626" />
                <Bar dataKey="Medium" stackId="a" fill="#f97316" />
                <Bar dataKey="Low" stackId="a" fill="#16a34a" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Top Originating IPs/Actors */}
          <div className="professional-card p-6 rounded-xl">
            <h3 className="font-bold mb-4">Top Originating IPs/Actors</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-2 font-medium">Actor/IP</th>
                    <th className="text-left py-2 px-2 font-medium">Count</th>
                    <th className="text-left py-2 px-2 font-medium">Origin</th>
                  </tr>
                </thead>
                <tbody>
                  {topActorsData.map((actor, index) => (
                    <tr key={index} className="border-b hover:bg-accent/5">
                      <td className="py-2 px-2 text-xs">{actor.actor}</td>
                      <td className="py-2 px-2 font-medium">{actor.count}</td>
                      <td className="py-2 px-2 text-xs text-muted-foreground">{actor.origin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              <Download className="h-4 w-4 mr-2" />
              Export to CSV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityDashboardDemo;