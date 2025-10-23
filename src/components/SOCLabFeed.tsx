import { Shield, AlertTriangle, CheckCircle, Activity, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const SOCLabFeed = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "resolved",
      severity: "high",
      title: "DDoS Attack Mitigated",
      description: "Large-scale DDoS attack detected and neutralized",
      time: "2 min ago",
      ip: "xxx.xxx.xxx.xxx",
    },
    {
      id: 2,
      type: "monitoring",
      severity: "medium",
      title: "Unusual Login Pattern",
      description: "Monitoring suspicious login attempts from new location",
      time: "5 min ago",
      ip: "xxx.xxx.xxx.xxx",
    },
    {
      id: 3,
      type: "resolved",
      severity: "critical",
      title: "SQL Injection Blocked",
      description: "Malicious SQL injection attempt blocked at firewall",
      time: "12 min ago",
      ip: "xxx.xxx.xxx.xxx",
    },
    {
      id: 4,
      type: "resolved",
      severity: "low",
      title: "Port Scan Detected",
      description: "Automated port scanning activity identified and logged",
      time: "18 min ago",
      ip: "xxx.xxx.xxx.xxx",
    },
    {
      id: 5,
      type: "monitoring",
      severity: "medium",
      title: "API Rate Limit Triggered",
      description: "Multiple API rate limit violations from single source",
      time: "25 min ago",
      ip: "xxx.xxx.xxx.xxx",
    },
  ]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "text-red-600 bg-red-50";
      case "high":
        return "text-orange-600 bg-orange-50";
      case "medium":
        return "text-yellow-600 bg-yellow-50";
      case "low":
        return "text-blue-600 bg-blue-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getTypeIcon = (type: string) => {
    return type === "resolved" ? CheckCircle : Activity;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 text-red-600" />
            <span className="text-red-600">SOC Lab Feed</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Live Threat Intelligence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time security operations monitoring showing our proactive defense mechanisms in action
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="professional-card p-8 rounded-2xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Shield className="w-6 h-6 text-green-600" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Security Operations Center</h3>
                  <p className="text-sm text-muted-foreground">Monitoring 24/7/365</p>
                </div>
              </div>
              <div className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                Active Monitoring
              </div>
            </div>

            {/* Feed */}
            <div className="space-y-4">
              {alerts.map((alert, index) => {
                const TypeIcon = getTypeIcon(alert.type);
                return (
                  <div
                    key={alert.id}
                    className="p-4 rounded-lg border border-border hover:border-accent/30 transition-all duration-300 animate-fade-in-up group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg ${alert.type === 'resolved' ? 'bg-green-50' : 'bg-blue-50'} flex items-center justify-center flex-shrink-0`}>
                        <TypeIcon className={`w-5 h-5 ${alert.type === 'resolved' ? 'text-green-600' : 'text-blue-600'}`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                              {alert.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {alert.description}
                            </p>
                          </div>
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${getSeverityColor(alert.severity)}`}>
                            {alert.severity.toUpperCase()}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {alert.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <Activity className="w-3 h-3" />
                            Source: {alert.ip}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats Footer */}
            <div className="mt-6 pt-6 border-t grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1,247</div>
                <div className="text-xs text-muted-foreground">Threats Blocked Today</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">99.98%</div>
                <div className="text-xs text-muted-foreground">Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">&lt; 30s</div>
                <div className="text-xs text-muted-foreground">Avg. Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SOCLabFeed;
