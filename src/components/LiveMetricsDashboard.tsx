import { Activity, Clock, Shield, TrendingUp, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const LiveMetricsDashboard = () => {
  const [metrics, setMetrics] = useState([
    { label: "Projects in Progress", value: 42, icon: Activity, trend: "+12%", color: "text-blue-600" },
    { label: "Avg. Response Time", value: "< 2h", icon: Clock, trend: "Fast", color: "text-green-600" },
    { label: "Security Alerts Resolved", value: 1247, icon: Shield, trend: "+8%", color: "text-purple-600" },
    { label: "Active Clients", value: 180, icon: Users, trend: "+15%", color: "text-indigo-600" },
    { label: "System Uptime", value: "99.9%", icon: Zap, trend: "Stable", color: "text-emerald-600" },
    { label: "Performance Score", value: 98, icon: TrendingUp, trend: "+3%", color: "text-cyan-600" },
  ]);

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-sm font-medium mb-6">
            <Activity className="w-4 h-4 text-accent" />
            <span className="text-accent">Live Metrics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Real-Time Performance
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor our operational excellence and commitment to delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="professional-card p-6 rounded-xl hover:shadow-elevated transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color.replace('text-', 'from-')}/10 ${metric.color.replace('text-', 'to-')}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <div className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {metric.trend}
                </div>
              </div>
              
              <div className="space-y-1">
                <div className={`text-3xl font-bold ${metric.color} transition-all duration-1000 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {typeof metric.value === 'number' ? metric.value.toLocaleString() : metric.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Status Bar */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="professional-card p-6 rounded-xl">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <span className="text-sm font-semibold">All Systems Operational</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Last updated: <span className="font-medium">Just now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMetricsDashboard;
