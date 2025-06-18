import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { TrendingUp, TrendingDown, Users, DollarSign, Activity, Calendar } from "lucide-react";

export function DashboardDemo() {
  const [activeTab, setActiveTab] = useState("overview");

  // Generate realistic demo data
  const salesData = useMemo(() => [
    { month: "Jan", revenue: 45000, users: 1200 },
    { month: "Feb", revenue: 52000, users: 1350 },
    { month: "Mar", revenue: 48000, users: 1280 },
    { month: "Apr", revenue: 61000, users: 1520 },
    { month: "May", revenue: 67000, users: 1680 },
    { month: "Jun", revenue: 74000, users: 1850 },
  ], []);

  const pieData = useMemo(() => [
    { name: "Web App", value: 45, color: "#3b82f6" },
    { name: "Mobile", value: 30, color: "#8b5cf6" },
    { name: "Desktop", value: 15, color: "#06b6d4" },
    { name: "Other", value: 10, color: "#10b981" },
  ], []);

  const recentActivities = useMemo(() => [
    { user: "Sarah Johnson", action: "Completed project milestone", time: "2 min ago", type: "success" },
    { user: "Mike Chen", action: "Updated dashboard settings", time: "5 min ago", type: "info" },
    { user: "Emily Davis", action: "Generated monthly report", time: "12 min ago", type: "info" },
    { user: "Alex Thompson", action: "Fixed critical bug", time: "18 min ago", type: "warning" },
    { user: "Lisa Wang", action: "Added new team member", time: "25 min ago", type: "success" },
  ], []);

  const metrics = [
    { title: "Total Revenue", value: "$347K", change: "+12.5%", trend: "up", icon: DollarSign },
    { title: "Active Users", value: "1,850", change: "+8.2%", trend: "up", icon: Users },
    { title: "Conversion Rate", value: "3.24%", change: "-2.1%", trend: "down", icon: Activity },
    { title: "Avg. Session", value: "4m 32s", change: "+5.4%", trend: "up", icon: Calendar },
  ];

  return (
    <section id="dashboard-demo" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
            SaaS Dashboard Demo
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Interactive dashboard showcasing my UI/UX design and data visualization skills
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Dashboard Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Card className="glass">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Analytics Dashboard</CardTitle>
                    <p className="text-foreground/70 mt-2">Monitor your business performance in real-time</p>
                  </div>
                  <div className="flex space-x-2 mt-4 md:mt-0">
                    {["overview", "analytics", "reports"].map((tab) => (
                      <Button
                        key={tab}
                        variant={activeTab === tab ? "default" : "outline"}
                        onClick={() => setActiveTab(tab)}
                        className={`capitalize ${activeTab === tab ? "neon-glow" : "glass"}`}
                      >
                        {tab}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Metrics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="glass">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-foreground/70">{metric.title}</p>
                        <p className="text-2xl font-bold mt-1">{metric.value}</p>
                        <div className={`flex items-center mt-2 text-sm ${
                          metric.trend === "up" ? "text-green-500" : "text-red-500"
                        }`}>
                          {metric.trend === "up" ? (
                            <TrendingUp className="h-4 w-4 mr-1" />
                          ) : (
                            <TrendingDown className="h-4 w-4 mr-1" />
                          )}
                          {metric.change}
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <metric.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Revenue Chart */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                  <p className="text-sm text-foreground/70">Monthly revenue and user growth</p>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="month" stroke="rgba(255,255,255,0.7)" />
                      <YAxis stroke="rgba(255,255,255,0.7)" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "rgba(0,0,0,0.8)", 
                          border: "1px solid rgba(255,255,255,0.2)",
                          borderRadius: "8px"
                        }} 
                      />
                      <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* User Growth Chart */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass">
                <CardHeader>
                  <CardTitle>User Growth</CardTitle>
                  <p className="text-sm text-foreground/70">Active users over time</p>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="month" stroke="rgba(255,255,255,0.7)" />
                      <YAxis stroke="rgba(255,255,255,0.7)" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "rgba(0,0,0,0.8)", 
                          border: "1px solid rgba(255,255,255,0.2)",
                          borderRadius: "8px"
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="users" 
                        stroke="#8b5cf6" 
                        strokeWidth={3}
                        dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Platform Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Platform Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-2 mt-4">
                    {pieData.map((item) => (
                      <div key={item.name} className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <div 
                            className="w-3 h-3 rounded-full mr-2" 
                            style={{ backgroundColor: item.color }}
                          ></div>
                          {item.name}
                        </div>
                        <span>{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <p className="text-sm text-foreground/70">Latest team activities and updates</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-4 p-3 rounded-lg glass border border-white/10"
                      >
                        <div className={`w-2 h-2 rounded-full ${
                          activity.type === "success" ? "bg-green-500" :
                          activity.type === "warning" ? "bg-yellow-500" : "bg-blue-500"
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.user}</p>
                          <p className="text-xs text-foreground/70">{activity.action}</p>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {activity.time}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
