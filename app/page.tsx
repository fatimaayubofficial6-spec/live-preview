const projects = [
  {
    name: "Apollo CRM Revamp",
    description: "Modernize the customer portal and improve lead routing.",
    status: "In Progress",
    dueDate: "Apr 28",
    progress: 68,
    team: ["AS", "MT", "KP"],
  },
  {
    name: "Nimbus Mobile App",
    description: "Launch MVP for Android and iOS with offline sync.",
    status: "Planning",
    dueDate: "May 12",
    progress: 24,
    team: ["JR", "LM", "TS"],
  },
  {
    name: "Helios Analytics",
    description: "Build dashboards for executive reporting.",
    status: "Review",
    dueDate: "Apr 21",
    progress: 92,
    team: ["AC", "DV"],
  },
];

const tasks = [
  {
    title: "Define sprint goals",
    project: "Apollo CRM Revamp",
    due: "Today",
    priority: "High",
    owner: "Alicia S.",
  },
  {
    title: "Finalize onboarding flow",
    project: "Nimbus Mobile App",
    due: "Tomorrow",
    priority: "Medium",
    owner: "Jon R.",
  },
  {
    title: "QA metrics dashboard",
    project: "Helios Analytics",
    due: "Friday",
    priority: "Low",
    owner: "Divya V.",
  },
];

const activity = [
  {
    user: "Maya T.",
    action: "completed user story",
    target: "Sync conflict resolution",
    time: "45m ago",
  },
  {
    user: "Kira P.",
    action: "commented on",
    target: "Q2 roadmap review",
    time: "2h ago",
  },
  {
    user: "Luis M.",
    action: "uploaded assets for",
    target: "Nimbus UI kit",
    time: "5h ago",
  },
];

const stats = [
  { label: "Active projects", value: "12", trend: "+2 this month" },
  { label: "Tasks due", value: "34", trend: "8 overdue" },
  { label: "Team members", value: "27", trend: "4 contractors" },
  { label: "On-time delivery", value: "92%", trend: "+6% QoQ" },
];

const teamWorkload = [
  { name: "Alicia S.", role: "Product Lead", percent: 86 },
  { name: "Jon R.", role: "Engineering", percent: 62 },
  { name: "Divya V.", role: "Data", percent: 48 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 flex-col border-r border-zinc-200 bg-white p-6 lg:flex">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-sm font-semibold text-white">
              PM
            </div>
            <div>
              <p className="text-sm font-semibold">Pulse Manager</p>
              <p className="text-xs text-zinc-500">Workspace</p>
            </div>
          </div>
          <nav className="mt-10 flex flex-col gap-2 text-sm">
            {[
              "Dashboard",
              "Projects",
              "Tasks",
              "Calendar",
              "Reports",
              "Team",
              "Settings",
            ].map((item) => (
              <button
                key={item}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-left font-medium transition ${
                  item === "Dashboard"
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                <span>{item}</span>
                {item === "Tasks" ? (
                  <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700">
                    8
                  </span>
                ) : null}
              </button>
            ))}
          </nav>
          <div className="mt-auto rounded-xl bg-zinc-900 p-4 text-white">
            <p className="text-sm font-semibold">Upgrade plan</p>
            <p className="mt-2 text-xs text-zinc-200">
              Unlock automated reports, templates, and unlimited guests.
            </p>
            <button className="mt-4 w-full rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-white">
              Explore Pro
            </button>
          </div>
        </aside>

        <main className="flex-1">
          <header className="border-b border-zinc-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Good morning, Taylor
                </p>
                <h1 className="text-2xl font-semibold">Project management system</h1>
                <p className="mt-2 text-sm text-zinc-500">
                  Track every initiative, align teams, and deliver milestones on time.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button className="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-600">
                  Filter
                </button>
                <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white">
                  New project
                </button>
              </div>
            </div>
          </header>

          <section className="mx-auto max-w-6xl space-y-8 px-6 py-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-zinc-200 bg-white p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-2 text-xs text-zinc-500">{stat.trend}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
              <div className="space-y-6">
                <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Active projects</h2>
                    <button className="text-sm font-medium text-zinc-500">
                      View all
                    </button>
                  </div>
                  <div className="mt-6 space-y-5">
                    {projects.map((project) => (
                      <div
                        key={project.name}
                        className="rounded-xl border border-zinc-100 bg-zinc-50 p-4"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-semibold">{project.name}</p>
                            <p className="mt-1 text-sm text-zinc-500">
                              {project.description}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600">
                              {project.status}
                            </span>
                            <p className="mt-2 text-xs text-zinc-500">
                              Due {project.dueDate}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-xs text-zinc-500">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="mt-2 h-2 rounded-full bg-zinc-200">
                            <div
                              className="h-2 rounded-full bg-zinc-900"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex -space-x-2">
                            {project.team.map((member) => (
                              <span
                                key={member}
                                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-zinc-900 text-xs font-semibold text-white"
                              >
                                {member}
                              </span>
                            ))}
                          </div>
                          <button className="text-xs font-semibold text-zinc-600">
                            View details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Upcoming tasks</h2>
                    <button className="text-sm font-medium text-zinc-500">
                      Schedule
                    </button>
                  </div>
                  <div className="mt-6 space-y-4">
                    {tasks.map((task) => (
                      <div
                        key={task.title}
                        className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-zinc-100 bg-zinc-50 p-4"
                      >
                        <div>
                          <p className="text-sm font-semibold">{task.title}</p>
                          <p className="mt-1 text-xs text-zinc-500">
                            {task.project} · Owner {task.owner}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 text-xs font-semibold">
                          <span className="rounded-full bg-white px-3 py-1 text-zinc-600">
                            {task.due}
                          </span>
                          <span
                            className={`rounded-full px-3 py-1 ${
                              task.priority === "High"
                                ? "bg-red-100 text-red-600"
                                : task.priority === "Medium"
                                ? "bg-amber-100 text-amber-600"
                                : "bg-emerald-100 text-emerald-600"
                            }`}
                          >
                            {task.priority}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                  <h2 className="text-lg font-semibold">Team workload</h2>
                  <div className="mt-6 space-y-4">
                    {teamWorkload.map((member) => (
                      <div key={member.name} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div>
                            <p className="font-semibold">{member.name}</p>
                            <p className="text-xs text-zinc-500">{member.role}</p>
                          </div>
                          <p className="text-xs font-semibold text-zinc-600">
                            {member.percent}%
                          </p>
                        </div>
                        <div className="h-2 rounded-full bg-zinc-200">
                          <div
                            className="h-2 rounded-full bg-zinc-900"
                            style={{ width: `${member.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 w-full rounded-xl border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-600">
                    Manage team
                  </button>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                  <h2 className="text-lg font-semibold">Activity stream</h2>
                  <div className="mt-6 space-y-4">
                    {activity.map((item) => (
                      <div key={item.target} className="flex gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold text-white">
                          {item.user
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="text-sm text-zinc-600">
                            <span className="font-semibold text-zinc-900">
                              {item.user}
                            </span>{" "}
                            {item.action}{" "}
                            <span className="font-semibold text-zinc-900">
                              {item.target}
                            </span>
                          </p>
                          <p className="mt-1 text-xs text-zinc-500">
                            {item.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 w-full rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white">
                    View all activity
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
