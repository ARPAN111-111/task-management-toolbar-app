import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  FolderKanban,
  LayoutDashboard,
  Menu,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import "./App.css";

const features = [
  {
    icon: FolderKanban,
    title: "Organize projects",
    description:
      "Keep every project, task, and important detail in one organized workspace.",
  },
  {
    icon: Target,
    title: "Focus on priorities",
    description:
      "Set clear deadlines and know exactly what needs your attention next.",
  },
  {
    icon: TrendingUp,
    title: "Track your progress",
    description:
      "Understand your productivity with clear progress indicators and analytics.",
  },
  {
    icon: Users,
    title: "Work together",
    description:
      "Assign tasks, share responsibilities, and keep your team moving forward.",
  },
  {
    icon: Clock3,
    title: "Never miss a deadline",
    description:
      "Keep upcoming due dates visible so you can plan your work with confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Your private workspace",
    description:
      "Use your own account to access your projects and personal task information.",
  },
];

const tasks = [
  { title: "Design landing page", tag: "Design", color: "purple", done: true },
  { title: "Build authentication", tag: "Development", color: "blue", done: true },
  { title: "Connect database", tag: "Backend", color: "orange", done: false },
];

function DashboardPreview() {
  return (
    <motion.div
      className="preview-window"
      initial={{ opacity: 0, y: 35, rotateX: 5 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="preview-topbar">
        <div className="window-dots"><i /><i /><i /></div>
        <span>taskflow.app / dashboard</span>
        <div className="preview-avatar">D</div>
      </div>

      <div className="preview-body">
        <aside className="preview-sidebar">
          <div className="preview-brand"><span>✳</span> taskflow</div>
          <div className="preview-nav active"><LayoutDashboard size={16} /> Overview</div>
          <div className="preview-nav"><FolderKanban size={16} /> Projects</div>
          <div className="preview-nav"><CheckCircle2 size={16} /> My tasks</div>
          <div className="preview-nav"><Users size={16} /> Team</div>
          <div className="sidebar-bottom">YOUR WORKSPACE<br /><br />Personal space</div>
        </aside>

        <div className="preview-content">
          <div className="preview-welcome">
            <div><span className="eyebrow">MONDAY, YOUR WAY</span><h3>Good things take progress.</h3><p>Here's what's happening with your work.</p></div>
            <div className="preview-date">This week⌄</div>
          </div>

          <div className="stat-grid">
            <div className="stat-card"><span>Total tasks</span><strong>24</strong><small>Across all projects</small></div>
            <div className="stat-card"><span>Completed</span><strong>16</strong><small className="positive">↑ Great progress</small></div>
            <div className="stat-card"><span>In progress</span><strong>06</strong><small>Keep it going</small></div>
          </div>

          <div className="preview-lower">
            <div className="task-panel">
              <div className="panel-heading"><strong>Recent tasks</strong><span>View all →</span></div>
              {tasks.map((task) => (
                <div className="preview-task" key={task.title}>
                  <span className={`task-check ${task.done ? "checked" : ""}`}>{task.done && <Check size={12} />}</span>
                  <span className={task.done ? "task-done" : ""}>{task.title}</span>
                  <span className={`task-tag ${task.color}`}>{task.tag}</span>
                </div>
              ))}
            </div>
            <div className="progress-panel">
              <strong>Weekly progress</strong>
              <div className="donut"><div><b>68%</b><small>complete</small></div></div>
              <small className="positive">You're making progress!</small>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-wrapper">
      <header className="navbar">
        <a className="brand" href="#home"><span className="brand-icon">✳</span> taskflow<span className="brand-period">.</span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="nav-login" href="#get-started" onClick={() => setMenuOpen(false)}>Log in</a>
          <a className="button button-small" href="#get-started" onClick={() => setMenuOpen(false)}>Get started <ArrowRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="announcement"><Sparkles size={14} /> A calmer way to get things done <ArrowRight size={14} /></div>
            <h1>Big goals.<br />Small steps.<br /><span>Real progress.</span></h1>
            <p className="hero-description">Bring your projects, tasks, and ideas together. Spend less time organizing work and more time making it happen.</p>
            <div className="hero-actions">
              <a href="#get-started" className="button">Start organizing for free <ArrowRight size={17} /></a>
              <a href="#features" className="text-link">Explore features <span>↘</span></a>
            </div>
            <div className="hero-proof"><div className="proof-avatars"><span>D</span><span>A</span><span>S</span><span>+</span></div><div><div className="proof-stars">★★★★★</div><small>A little more clarity, every day.</small></div></div>
          </motion.div>
          <div className="hero-visual"><DashboardPreview /></div>
          <div className="hero-footnote"><span><CheckCircle2 size={14} /> Projects in one place</span><span><CheckCircle2 size={14} /> Deadlines in focus</span><span><CheckCircle2 size={14} /> Progress you can see</span></div>
        </section>

        <section className="features-section section" id="features">
          <div className="section-heading">
            <span className="eyebrow">EVERYTHING IN SYNC</span>
            <h2>Your work deserves<br />a <span>better workflow.</span></h2>
            <p>Less switching between tools. More meaningful progress.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.article className="feature-card" key={feature.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  whileHover={{ y: -7 }}
                >
                  <div className="feature-icon"><Icon size={22} /></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <a href="#how-it-works" aria-label={`Learn about ${feature.title}`} className="feature-arrow">↗</a>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="workflow-section section" id="how-it-works">
          <div className="workflow-copy">
            <span className="eyebrow">SIMPLE BY DESIGN</span>
            <h2>From “where do I start?” to <span>“look what I did.”</span></h2>
            <p>A good workflow shouldn't take more work. TaskFlow gives every idea a next step and every next step a place to live.</p>
            <div className="workflow-step"><span>01</span><div><h3>Create your project</h3><p>Give your goals a home and define what success looks like.</p></div></div>
            <div className="workflow-step"><span>02</span><div><h3>Break it into tasks</h3><p>Set priorities, choose due dates, and make progress manageable.</p></div></div>
            <div className="workflow-step"><span>03</span><div><h3>Celebrate your progress</h3><p>Track completion and focus on what matters next.</p></div></div>
          </div>
          <motion.div className="workflow-art" initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="floating-card float-top"><span className="mini-icon green"><Check size={17} /></span><div><b>Task completed!</b><small>You're one step closer.</small></div></div>
            <div className="focus-card"><div className="focus-top"><span className="eyebrow">YOUR DAILY FOCUS</span><span>✳</span></div><h3>Make room for<br />meaningful work.</h3><div className="focus-bar"><span /></div><div className="focus-footer"><span>Daily goal</span><b>4 of 6 tasks</b></div></div>
            <div className="floating-card float-bottom"><span className="mini-icon purple"><TrendingUp size={17} /></span><div><b>You're building momentum</b><small>One task at a time.</small></div></div>
          </motion.div>
        </section>

        <section className="about-section section" id="about">
          <div className="about-inner">
            <span className="eyebrow">A LITTLE ABOUT US</span>
            <h2>Productivity should feel <span>empowering,</span><br />not overwhelming.</h2>
            <p>TaskFlow is designed around a simple idea: when your work is clear, your mind has room for better ideas. We're building one workspace to help individuals and teams plan thoughtfully, work confidently, and see how far they've come.</p>
            <div className="about-values"><div><b>Clarity first</b><span>Know what matters.</span></div><div><b>Progress over pressure</b><span>Move forward at your pace.</span></div><div><b>Work with intention</b><span>Make each step count.</span></div></div>
          </div>
        </section>

        <section className="cta-section" id="get-started">
          <div className="cta-glow" />
          <div className="cta-content"><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>Ready to make progress<br />feel <span>different?</span></h2><p>Create your workspace and bring your next big idea to life.</p><a href="#home" className="button cta-button">Let's get started <ArrowRight size={17} /></a><small><ShieldCheck size={14} /> Your workspace. Your goals. Your progress.</small></div>
        </section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-icon">✳</span> taskflow<span className="brand-period">.</span></a><span>Make progress, one task at a time.</span><div><a href="#about">About</a><a href="#features">Features</a><a href="#get-started">Get started</a></div><small>© {new Date().getFullYear()} TaskFlow. Built with purpose.</small></footer>
    </div>
  );
}