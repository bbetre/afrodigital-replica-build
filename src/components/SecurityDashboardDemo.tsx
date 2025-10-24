import { Shield, Activity, Clock, AlertTriangle, CheckCircle, TrendingUp, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const SecurityDashboardDemo = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const recentAlerts = [
    { type: "resolved", title: "DDoS Attack Mitigated", time: "2 min ago", severity: "high" },
    { type: "monitoring", title: "Unusual Login Pattern", time: "5 min ago", severity: "medium" },
    { type: "resolved", title: "SQL Injection Blocked", time: "12 min ago", severity: "critical" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-accent">Platform Demo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              AfroDigital Security & Analytics Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time monitoring and threat intelligence at your fingertips
          </p>
        </div>

        {/* Main Dashboard Demo Container */}
        <div className="max-w-7xl mx-auto">
          <div className="professional-card rounded-2xl overflow-hidden border-2 border-border/50">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-secondary to-secondary/50 px-8 py-6 border-b border-border/50">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Shield className="w-8 h-8 text-accent" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Security Operations Center</h3>
                    <p className="text-sm text-muted-foreground">Live Monitoring Dashboard</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-green-600">Active Monitoring</span>
                </div>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="p-8 bg-gradient-to-br from-background to-secondary/10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Key Metrics */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Top Metrics Row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="glass-card p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-4 h-4 text-blue-600" />
                        <span className="text-xs text-muted-foreground">Projects</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">42</div>
                      <div className="text-xs text-green-600 font-medium">+12%</div>
                    </div>

                    <div className="glass-card p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-muted-foreground">Response</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">&lt;2h</div>
                      <div className="text-xs text-green-600 font-medium">Fast</div>
                    </div>

                    <div className="glass-card p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-purple-600" />
                        <span className="text-xs text-muted-foreground">Clients</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">180</div>
                      <div className="text-xs text-green-600 font-medium">+15%</div>
                    </div>

                    <div className="glass-card p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-amber-600" />
                        <span className="text-xs text-muted-foreground">Uptime</span>
                      </div>
                      <div className="text-2xl font-bold text-amber-600">99.9%</div>
                      <div className="text-xs text-green-600 font-medium">Stable</div>
                    </div>
                  </div>

                  {/* Threat Activity Feed */}
                  <div className="glass-card p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-lg flex items-center gap-2">
                        <Activity className="w-5 h-5 text-accent" />
                        Recent Security Events
                      </h4>
                      <span className="text-xs text-muted-foreground">Last 24 hours</span>
                    </div>
                    
                    <div className="space-y-3">
                      {recentAlerts.map((alert, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            alert.type === 'resolved' ? 'bg-green-500/10' : 'bg-blue-500/10'
                          }`}>
                            {alert.type === 'resolved' ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <Activity className="w-4 h-4 text-blue-600" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <p className="font-medium text-sm">{alert.title}</p>
                              <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${
                                alert.severity === 'critical' ? 'bg-red-500/10 text-red-600' :
                                alert.severity === 'high' ? 'bg-orange-500/10 text-orange-600' :
                                'bg-yellow-500/10 text-yellow-600'
                              }`}>
                                {alert.severity.toUpperCase()}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Performance Indicators */}
                <div className="space-y-6">
                  {/* Circular Progress - Threat Detection */}
                  <div className="glass-card p-6 rounded-xl text-center">
                    <h4 className="font-bold mb-4 text-sm">Detection Rate</h4>
                    <div className="relative inline-flex items-center justify-center">
                      <svg className="w-32 h-32 transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-secondary"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 56}`}
                          strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.998)}`}
                          className="text-green-600 transition-all duration-1000"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-3xl font-bold text-green-600">99.98%</span>
                        <span className="text-xs text-muted-foreground">Success</span>
                      </div>
                    </div>
                  </div>

                  {/* Circular Progress - Response Time */}
                  <div className="glass-card p-6 rounded-xl text-center">
                    <h4 className="font-bold mb-4 text-sm">Avg Response Time</h4>
                    <div className="relative inline-flex items-center justify-center">
                      <svg className="w-32 h-32 transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-secondary"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 56}`}
                          strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.85)}`}
                          className="text-blue-600 transition-all duration-1000"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-3xl font-bold text-blue-600">&lt;30s</span>
                        <span className="text-xs text-muted-foreground">Average</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats Summary */}
                  <div className="glass-card p-6 rounded-xl">
                    <h4 className="font-bold mb-4 text-sm">Today's Summary</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Threats Blocked</span>
                        <span className="font-bold text-green-600">1,247</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Active Scans</span>
                        <span className="font-bold text-blue-600">24</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Systems Online</span>
                        <span className="font-bold text-purple-600">156</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityDashboardDemo;