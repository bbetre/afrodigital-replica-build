import { Settings, RefreshCw, Filter, Download, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const SecurityDashboardDemo = () => {
  const { toast } = useToast();
  const [timeSpan, setTimeSpan] = useState("30 Days");
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleInvestigate = (section: string) => {
    setActiveSection(section);
    toast({
      title: "Investigation Started",
      description: `Drilling down into ${section} data...`,
    });
    setTimeout(() => setActiveSection(null), 2000);
  };

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
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <AlertTriangle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Platform Demo</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Ethiopian Security Operations Dashboard
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">Real-time security monitoring and threat intelligence</p>
        </div>

        <div className="border-2 border-primary/20 rounded-2xl p-4 md:p-6 lg:p-8 bg-card shadow-lg">

        {/* Global Controls */}
        <div className="professional-card p-3 md:p-4 lg:p-6 rounded-xl mb-4 md:mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-2 text-xs md:text-sm overflow-x-auto">
              <span className="font-medium whitespace-nowrap">Date Range:</span>
              <span className="text-muted-foreground whitespace-nowrap">16 Jan 2024 - 15 Feb 2024 (EAT)</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 overflow-x-auto pb-2 lg:pb-0">
              {["7 Days", "30 Days", "180 Days", "360 Days"].map((span) => (
                <Button
                  key={span}
                  variant={timeSpan === span ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setTimeSpan(span);
                    toast({
                      title: "Time Range Updated",
                      description: `Now showing data for ${span}`,
                    });
                  }}
                  className="text-xs whitespace-nowrap"
                >
                  {span}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => handleInvestigate("Settings")}
              >
                <Settings className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => {
                  toast({
                    title: "Refreshing Data",
                    description: "Fetching latest security metrics...",
                  });
                }}
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => handleInvestigate("Filters")}
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
          {/* Open Incidents Count */}
          <div className={`professional-card p-4 md:p-6 rounded-xl text-center transition-all ${activeSection === "Open Incidents" ? "ring-2 ring-primary" : ""}`}>
            <p className="text-xs md:text-sm text-muted-foreground mb-2">Open Incidents Count</p>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">1.1k</div>
            <Button 
              className="w-full text-sm"
              onClick={() => handleInvestigate("Open Incidents")}
            >
              Investigate
            </Button>
          </div>

          {/* Incident Threat Levels - Donut Chart */}
          <div className={`professional-card p-4 md:p-6 rounded-xl transition-all ${activeSection === "Threat Levels" ? "ring-2 ring-primary" : ""}`}>
            <h3 className="text-sm md:text-base font-bold mb-3 md:mb-4">Incident Threat Levels</h3>
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie
                  data={threatLevelData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {threatLevelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
            <Button 
              className="w-full mt-3 md:mt-4 text-sm"
              onClick={() => handleInvestigate("Threat Levels")}
            >
              Investigate
            </Button>
          </div>

          {/* Incident Trend by Threat Level */}
          <div className={`professional-card p-4 md:p-6 rounded-xl lg:col-span-2 transition-all ${activeSection === "Incident Trend" ? "ring-2 ring-primary" : ""}`}>
            <h3 className="text-sm md:text-base font-bold mb-3 md:mb-4">Incident Trend by Threat Level</h3>
            <ResponsiveContainer width="100%" height={160}>
              <AreaChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" style={{ fontSize: '10px' }} />
                <YAxis style={{ fontSize: '10px' }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Area type="monotone" dataKey="High" stackId="1" stroke="#dc2626" fill="#dc2626" />
                <Area type="monotone" dataKey="Medium" stackId="1" stroke="#f97316" fill="#f97316" />
                <Area type="monotone" dataKey="Low/Info" stackId="1" stroke="#16a34a" fill="#16a34a" />
              </AreaChart>
            </ResponsiveContainer>
            <Button 
              className="w-full mt-3 md:mt-4 text-sm"
              onClick={() => handleInvestigate("Incident Trend")}
            >
              Investigate
            </Button>
          </div>
        </div>

        {/* Attack Vectors */}
        <div className={`professional-card p-4 md:p-6 rounded-xl mb-4 md:mb-6 transition-all ${activeSection === "Attack Vectors" ? "ring-2 ring-primary" : ""}`}>
          <h3 className="text-sm md:text-base font-bold mb-3 md:mb-4">Incidents by Common Attack Vectors</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={attackVectorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" style={{ fontSize: '10px' }} angle={-45} textAnchor="end" height={80} />
              <YAxis style={{ fontSize: '10px' }} />
              <Tooltip />
              <Bar dataKey="count" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
          <Button 
            className="w-full mt-3 md:mt-4 text-sm"
            onClick={() => handleInvestigate("Attack Vectors")}
          >
            Investigate
          </Button>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Map of Ethiopia */}
          <div className={`professional-card p-4 md:p-6 rounded-xl transition-all ${activeSection === "Source Regions" ? "ring-2 ring-primary" : ""}`}>
            <h3 className="text-sm md:text-base font-bold mb-3 md:mb-4">Incidents Count by Source Region</h3>
            <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4 max-h-64 overflow-y-auto">
              {ethiopianRegions.map((region) => (
                <button
                  key={region.name}
                  onClick={() => handleInvestigate(`${region.name} Region`)}
                  className="w-full flex items-center justify-between hover:bg-accent/5 p-1.5 rounded transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 md:w-4 md:h-4 rounded"
                      style={{ backgroundColor: region.color }}
                    />
                    <span className="text-xs md:text-sm">{region.name}</span>
                  </div>
                  <span className="text-xs md:text-sm font-medium">{region.incidents}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between text-[10px] md:text-xs text-muted-foreground mt-3 md:mt-4 pt-3 md:pt-4 border-t">
              <span>0-50</span>
              <span>51-100</span>
              <span>101-150</span>
              <span>151-200</span>
              <span>&gt;200</span>
            </div>
          </div>

          {/* Most Targeted Sectors */}
          <div className={`professional-card p-4 md:p-6 rounded-xl transition-all ${activeSection === "Targeted Sectors" ? "ring-2 ring-primary" : ""}`}>
            <h3 className="text-sm md:text-base font-bold mb-3 md:mb-4">Most Targeted Sectors/Entities</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={sectorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} style={{ fontSize: '9px' }} />
                <YAxis style={{ fontSize: '10px' }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: '10px' }} />
                <Bar dataKey="High" stackId="a" fill="#dc2626" onClick={() => handleInvestigate("Targeted Sectors")} className="cursor-pointer" />
                <Bar dataKey="Medium" stackId="a" fill="#f97316" onClick={() => handleInvestigate("Targeted Sectors")} className="cursor-pointer" />
                <Bar dataKey="Low" stackId="a" fill="#16a34a" onClick={() => handleInvestigate("Targeted Sectors")} className="cursor-pointer" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Top Originating IPs/Actors */}
          <div className={`professional-card p-4 md:p-6 rounded-xl transition-all ${activeSection === "Top Actors" ? "ring-2 ring-primary" : ""}`}>
            <h3 className="text-sm md:text-base font-bold mb-3 md:mb-4">Top Originating IPs/Actors</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs md:text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-1 md:px-2 font-medium">Actor/IP</th>
                    <th className="text-left py-2 px-1 md:px-2 font-medium">Count</th>
                    <th className="text-left py-2 px-1 md:px-2 font-medium">Origin</th>
                  </tr>
                </thead>
                <tbody>
                  {topActorsData.map((actor, index) => (
                    <tr 
                      key={index} 
                      className="border-b hover:bg-accent/5 cursor-pointer transition-colors"
                      onClick={() => handleInvestigate(`Actor: ${actor.actor}`)}
                    >
                      <td className="py-2 px-1 md:px-2 text-[10px] md:text-xs">{actor.actor}</td>
                      <td className="py-2 px-1 md:px-2 font-medium">{actor.count}</td>
                      <td className="py-2 px-1 md:px-2 text-[10px] md:text-xs text-muted-foreground">{actor.origin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full mt-3 md:mt-4 text-xs md:text-sm"
              onClick={() => {
                toast({
                  title: "Export Started",
                  description: "Downloading CSV file...",
                });
              }}
            >
              <Download className="h-3 w-3 md:h-4 md:w-4 mr-2" />
              Export to CSV
            </Button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityDashboardDemo;