import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Brain, 
  Layers, 
  Search, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Box, 
  FileText, 
  Image as ImageIcon, 
  Cpu, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Maximize,
  Server,
  Zap,
  RefreshCw 
} from 'lucide-react';

// --- Styles for Fonts ---
const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
    
    .font-earthy { font-family: 'Lora', serif; }
    .font-tech { font-family: 'Space Mono', monospace; }
  `}</style>
);

// --- Components ---

const Section = ({ id, className, children }) => (
  <section id={id} className={`min-h-screen py-20 px-6 md:px-12 lg:px-24 ${className}`}>
    {children}
  </section>
);

const Badge = ({ children, type = 'neutral' }) => {
  const styles = {
    neutral: 'bg-stone-100 text-stone-600 border-stone-200',
    error: 'bg-red-50 text-red-700 border-red-100',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    tech: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold font-tech tracking-tight border ${styles[type]} inline-flex items-center gap-1 uppercase`}>
      {children}
    </span>
  );
};

const Card = ({ title, children, icon: Icon, type = 'default' }) => (
  <div className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
    type === 'highlight' 
      ? 'bg-gradient-to-br from-stone-800 to-stone-950 text-white border-emerald-900' 
      : 'bg-white border-stone-200 text-stone-800'
  }`}>
    <div className="flex items-start justify-between mb-4">
      <h3 className="font-bold text-lg font-earthy tracking-tight">{title}</h3>
      {Icon && <Icon className={`w-5 h-5 ${type === 'highlight' ? 'text-emerald-400' : 'text-stone-400'}`} />}
    </div>
    <div className={`text-sm leading-relaxed ${type === 'highlight' ? 'text-stone-300' : 'text-stone-600'}`}>
      {children}
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [activeSection, setActiveSection] = useState('problem');
  const [scrolled, setScrolled] = useState(false);

  // Scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['problem', 'future', 'technical', 'value'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="bg-stone-50 min-h-screen font-sans text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      <FontStyles />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-200 py-3' : 'bg-transparent py-6'}`}>
        <div className="w-full mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight flex items-center gap-2 font-earthy">
            <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center text-white shadow-emerald-900/20 shadow-lg">
              <Layers size={18} />
            </div>
            <span>Centaurus<span className="text-stone-400 font-light font-tech text-sm ml-2">AI Assistant</span></span>
          </div>
          <div className="hidden md:flex gap-1 bg-stone-100/50 p-1 rounded-full">
            {[
              { id: 'problem', label: 'The Challenge' },
              { id: 'future', label: 'The Vision' },
              { id: 'technical', label: 'Architecture' },
              { id: 'value', label: 'Impact' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold font-tech uppercase tracking-wide transition-all ${
                  activeSection === item.id 
                    ? 'bg-white text-emerald-700 shadow-sm' 
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-32 pb-12 px-6 w-full mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-bold font-tech uppercase tracking-wider mb-6">
          Workflow Modernization
        </div>
        <h1 className="text-4xl md:text-7xl font-bold font-earthy text-stone-900 mb-6 tracking-tight leading-tight">
          From Fragmented Files to <br />
          {/* Removed 'italic' class */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600">
            Unified Intelligence
          </span>
        </h1>
        <p className="text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed font-earthy">
          Transforming static SOPs, images, and databases into a unified, queryable operations assistant.
        </p>
      </header>

      {/* SECTION 1: PROBLEM -> THE CHALLENGE */}
      <Section id="problem" className="w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            {/* Removed 'italic' class */}
            <h2 className="text-4xl font-bold font-earthy mb-6 text-stone-900">The Challenge: <br/><span className="text-stone-500">Operational Friction</span></h2>
            <p className="text-lg text-stone-600 mb-8 font-earthy leading-relaxed">
              Operational logic is currently trapped in isolated systems and human memory, creating barriers to efficiency.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-white rounded-lg border border-stone-200 shadow-sm">
                <div className="p-2 bg-red-50 text-red-600 rounded-lg h-fit"><Database size={20} /></div>
                <div>
                  <h4 className="font-bold font-earthy text-stone-900">Fragmented Data Ecosystem</h4>
                  <p className="text-sm text-stone-600 mt-1 font-earthy">
                    Word docs, Excel sheets, and isolated SQLite/Unity databases live apart. This fragmentation leaves no unified way to run multi-source queries.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 bg-white rounded-lg border border-stone-200 shadow-sm">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg h-fit"><Brain size={20} /></div>
                <div>
                  <h4 className="font-bold font-earthy text-stone-900">Tacit "Tribal" Knowledge</h4>
                  <p className="text-sm text-stone-600 mt-1 font-earthy">
                    Room setups, storage layouts, and cleaning cadences exist mostly in senior staff's heads or remote documents, creating a training bottleneck.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-lg border border-stone-200 shadow-sm">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-lg h-fit"><Search size={20} /></div>
                <div>
                  <h4 className="font-bold font-earthy text-stone-900">Manual Information Retrieval</h4>
                  <p className="text-sm text-stone-600 mt-1 font-earthy">
                    Basic questions ("Can this cabinet fit X units?") trigger manual measurements and spreadsheet lookups rather than instant answers, causing decision latency and execution delays.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Metaphor for Silos */}
          <div className="relative h-[500px] bg-stone-900 rounded-2xl p-8 overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-stone-800">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
            
            <div className="relative z-10 grid grid-cols-2 gap-6 w-full max-w-sm font-tech">
              <div className="bg-stone-800/80 backdrop-blur border border-stone-700 p-4 rounded-xl flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                <FileText className="text-stone-400" />
                <span className="text-xs text-stone-300">SOPs.docx</span>
              </div>
              <div className="bg-stone-800/80 backdrop-blur border border-stone-700 p-4 rounded-xl flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                <Database className="text-emerald-500" />
                <span className="text-xs text-stone-300">Unity.db</span>
              </div>
              <div className="bg-stone-800/80 backdrop-blur border border-stone-700 p-4 rounded-xl flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                <ImageIcon className="text-teal-500" />
                <span className="text-xs text-stone-300">Room_Photos</span>
              </div>
              <div className="bg-stone-800/80 backdrop-blur border border-stone-700 p-4 rounded-xl flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                <Users className="text-amber-500" />
                <span className="text-xs text-stone-300">Staff_Roster.xls</span>
              </div>
            </div>
            
            <div className="mt-8 text-center relative z-10">
              <div className="inline-flex items-center gap-2 text-red-400 bg-red-900/20 px-4 py-2 rounded-full text-xs font-bold font-tech uppercase tracking-widest border border-red-900/50">
                <AlertTriangle size={14} /> No Semantic Connection
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2: FUTURE -> THE VISION */}
      <Section id="future" className="bg-white">
        <div className="w-full mx-auto text-center mb-16">
          <Badge type="tech">Gen AI Enabled</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-earthy mt-4 mb-6">Strategic Shift: Space-Aware Intelligence</h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto font-earthy">
            A unified semantic layer where staff can reason over documents, databases, and physical space simultaneously using natural language.
          </p>
        </div>

        <div className="w-full mx-auto grid md:grid-cols-3 gap-8">
          <Card title="The Ops Assistant" icon={Search} type="highlight">
            <p className="mb-4">
              <strong className="font-earthy text-lg">"Given this room photo, what is the cost to furnish it this quarter?"</strong>
            </p>
            <p className="opacity-80 font-earthy">
              Staff interact via natural language. The system retrieves dimensions from the DB, identifies objects via Vision AI, and calculates costs from current ERP pricing tables.
            </p>
          </Card>

          <Card title="AI-Planned Operations" icon={Clock}>
            <p className="mb-4 font-bold font-earthy text-stone-800">Dynamic Scheduling & Logistics</p>
            <p className="font-earthy">
              The system proposes cleaning rotations, shift schedules, and trash pickup cadences. It respects constraints like worker availability (from HR systems) and room access rules (from SOPs) automatically.
            </p>
          </Card>

          <Card title="Instant Scenario Planning" icon={Maximize}>
            <p className="mb-4 font-bold font-earthy text-stone-800">Eliminating Trial-and-Error</p>
            <p className="font-earthy">
              Instead of manually adjusting complex rosters in Unity/Excel, managers can ask: "How does adding a 3rd shift affect coverage?" The AI instantly re-optimizes the schedule.
            </p>
          </Card>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-stone-50 border border-stone-200 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
                <h4 className="font-bold font-earthy text-xl mb-2 flex items-center gap-2 text-stone-900">
                    <CheckCircle2 className="text-emerald-600" size={24}/> 
                    Technical Outcome
                </h4>
                <p className="text-stone-600 font-earthy">
                    Docs, images, and SQL tables are indexed into a single vector store. This creates a "Queryable Knowledge Layer" that grounds every AI response in verified company data.
                </p>
            </div>
            <div className="w-px h-24 bg-stone-200 hidden md:block"></div>
            <div className="flex-1">
                <h4 className="font-bold font-earthy text-xl mb-2 flex items-center gap-2 text-stone-900">
                    <CheckCircle2 className="text-emerald-600" size={24}/> 
                    Business Outcome
                </h4>
                <p className="text-stone-600 font-earthy">
                    New employees onboard faster by "asking the system" instead of hunting for documents. Senior operators shift focus from answering repetitive questions to process optimization.
                </p>
            </div>
        </div>
      </Section>

      {/* SECTION 3: TECHNICAL SOLUTION */}
      <Section id="technical" className="bg-stone-900 text-white overflow-hidden">
        <div className="w-full mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <Badge type="tech">Architecture</Badge>
              <h2 className="text-3xl font-bold font-earthy mt-4">The Technical Engine</h2>
              <p className="text-stone-400 mt-2 font-tech text-sm">High-level logic flow for the Semantic Search System.</p>
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="relative">
             {/* Flow Lines (SVG) */}
            <svg 
    className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" 
    style={{ zIndex: 0 }}
    viewBox="0 0 100 100" 
    preserveAspectRatio="none"
  >
    <defs>
      {/* Define the gradient or markers if needed, keeping it simple for now */}
    </defs>

    {/* 1. Data Unification (Top Left) -> Gen AI (Middle) 
        Start at x=33 (end of col 1), y=25 (approx height of top box). 
        Elbow connector: Right -> Down -> Right */}
    <path 
      d="M 28 25 H 44 V 50 H 50" 
      stroke="white" 
      strokeWidth="2" 
      strokeDasharray="5,5" 
      fill="none" 
      opacity="0.3"
      vectorEffect="non-scaling-stroke"
    />

    {/* 2. Spatial Logic (Bottom Left) -> Gen AI (Middle) 
        Start at x=33 (end of col 1), y=75 (approx height of bottom box). 
        Elbow connector: Right -> Up -> Right */}
    <path 
      d="M 28 75 H 44 V 50 H 50" 
      stroke="white" 
      strokeWidth="2" 
      strokeDasharray="5,5" 
      fill="none" 
      opacity="0.3"
      vectorEffect="non-scaling-stroke"
    />

    {/* 3. Gen AI (Middle) -> Safety & Access (Right) 
        Straight horizontal line from x=66 (end of col 2) to x=68 (start of col 3) */}
    <path 
      d="M 66 50 L 100 50" 
      stroke="white" 
      strokeWidth="2" 
      strokeDasharray="5,5" 
      fill="none" 
      opacity="0.3"
      vectorEffect="non-scaling-stroke"
    />

    {/* 4. Data Unification -> Spatial Logic 
        Vertical line connecting the two left blocks. x=16.5 (center of col 1) */}
    <path 
      d="M 16.5 35 V 65" 
      stroke="white" 
      strokeWidth="2" 
      strokeDasharray="5,5" 
      fill="none" 
      opacity="0.3"
      vectorEffect="non-scaling-stroke"
    />
  </svg>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              
              {/* Column 1: Ingestion */}
              <div className="space-y-6">
                <div className="text-xs font-bold font-tech text-stone-500 uppercase tracking-widest mb-4">Ingestion & Grounding</div>
                <div className="bg-stone-800 border border-stone-700 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3 text-emerald-400">
                    <Database size={20} />
                    <h3 className="font-bold font-earthy text-white">Data Unification</h3>
                  </div>
                  <ul className="text-sm text-stone-300 space-y-2 font-tech">
                    <li className="flex items-start gap-2">• <span><strong>Pipeline:</strong> Ingests Word, Excel, PDFs, Images.</span></li>
                    <li className="flex items-start gap-2">• <span><strong>SQL Sync:</strong> Connects to SQLite (Unity metadata) & ERP tables.</span></li>
                    <li className="flex items-start gap-2">• <span><strong>Normalization:</strong> Links Rooms → Cabinets → SKUs → Tasks.</span></li>
                  </ul>
                </div>
                <div className="bg-stone-800 border border-stone-700 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3 text-teal-400">
                        <Box size={20} />
                        <h3 className="font-bold font-earthy text-white">Spatial Logic</h3>
                    </div>
                    <p className="text-sm text-stone-300 font-tech">
                        Stores dimensions, costs, and roster availability as structured entities; embeds unstructured SOPs into a vector index.
                    </p>
                </div>
              </div>

              {/* Column 2: Intelligence */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="text-xs font-bold font-tech text-stone-500 uppercase tracking-widest mb-4 md:text-center">The Brain (RAG)</div>
                <div className="bg-gradient-to-br from-stone-800 to-stone-900 border border-emerald-500/30 p-6 rounded-xl shadow-2xl shadow-emerald-900/20">
                  <div className="flex items-center gap-3 mb-4 text-white">
                    <Cpu size={24} />
                    <h3 className="font-bold font-earthy text-lg">Gen AI Interaction Layer</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-stone-900/50 p-3 rounded border border-emerald-500/20">
                      <h5 className="text-xs text-emerald-300 font-bold font-tech uppercase mb-1">RAG Engine</h5>
                      <p className="text-xs text-stone-300 font-tech">Retrieves docs/records based on query intent. Citations required for every answer.</p>
                    </div>
                    <div className="bg-stone-900/50 p-3 rounded border border-emerald-500/20">
                      <h5 className="text-xs text-emerald-300 font-bold font-tech uppercase mb-1">Vision Capability</h5>
                      <p className="text-xs text-stone-300 font-tech">Detects room objects from user photos and maps them to known Catalog SKUs.</p>
                    </div>
                    <div className="bg-stone-900/50 p-3 rounded border border-emerald-500/20">
                      <h5 className="text-xs text-emerald-300 font-bold font-tech uppercase mb-1">Optimizer</h5>
                      <p className="text-xs text-stone-300 font-tech">Linear programming for scheduling (Shift generation based on constraints).</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: Governance */}
              <div className="space-y-6">
                <div className="text-xs font-bold font-tech text-stone-500 uppercase tracking-widest mb-4">Governance & Output</div>
                <div className="bg-stone-800 border border-stone-700 p-6 rounded-lg h-full flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3 text-emerald-400">
                    <ShieldCheck size={20} />
                    <h3 className="font-bold font-earthy text-white">Safety & Access</h3>
                  </div>
                  <ul className="text-sm text-stone-300 space-y-4 font-tech">
                    <li className="flex items-start gap-2">
                        <div className="bg-stone-700 p-1 rounded"><Users size={14}/></div>
                        <span><strong>Role-Based Access:</strong> Financials only visible to managers; SOPs visible to all.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <div className="bg-stone-700 p-1 rounded"><AlertTriangle size={14}/></div>
                        <span><strong>Hallucination Guardrails:</strong> System refuses to answer if underlying records are missing.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4: TIMELINES & BUSINESS MEASURE */}
      <Section id="value" className="w-full mx-auto">
        <div className="mb-12">
            <h2 className="text-3xl font-bold font-earthy mb-4">Roadmap & Business Measures</h2>
            <p className="text-lg text-stone-600 font-earthy">A phased approach to value delivery, minimizing operational disruption while building the intelligence layer.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            {/* Dynamic Timeline */}
            <div className="relative border-l-2 border-emerald-200 pl-8 space-y-12">
                <div className="relative">
                    <div className="absolute -left-[41px] top-0 bg-emerald-600 w-5 h-5 rounded-full border-4 border-white shadow-sm"></div>
                    <h3 className="text-xl font-bold font-earthy text-stone-900">Phase 1: Foundation & Unification</h3>
                    <p className="text-sm text-emerald-700 font-bold font-tech mb-2">Short Term</p>
                    <p className="text-stone-600 font-earthy">
                        Establish the central database and vector index. Ingest existing SOPs, images, and Unity metadata. Launch "Search Only" bot to validate data quality.
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute -left-[41px] top-0 bg-white border-2 border-emerald-300 w-5 h-5 rounded-full"></div>
                    <h3 className="text-xl font-bold font-earthy text-stone-900">Phase 2: The Assistant</h3>
                    <p className="text-sm text-emerald-700 font-bold font-tech mb-2">Mid Term</p>
                    <p className="text-stone-600 font-earthy">
                        Enable Multi-modal input (Text + Image). Staff can upload photos of rooms to query capacity. Roll out role-based access controls for sensitive financial data.
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute -left-[41px] top-0 bg-white border-2 border-stone-300 w-5 h-5 rounded-full"></div>
                    <h3 className="text-xl font-bold font-earthy text-stone-400">Phase 3: Active Optimization</h3>
                    <p className="text-sm text-stone-400 font-bold font-tech mb-2">Future Scale</p>
                    <p className="text-stone-400 font-earthy">
                        Deploy the Scheduling & Logistics optimizer. The system begins proactively suggesting cleaning rotations and stock rebalancing based on historical trends.
                    </p>
                </div>
            </div>

            {/* Measures of Success */}
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
                <h3 className="text-xl font-bold font-earthy mb-6 flex items-center gap-2">
                    <TrendingUp size={24} className="text-emerald-600"/> 
                    Key Success Indicators
                </h3>
                
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-end mb-1">
                            <span className="font-semibold text-stone-700 font-earthy">Information Retrieval Time</span>
                            <span className="text-xs font-bold font-tech bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Efficiency</span>
                        </div>
                        <p className="text-sm text-stone-500 font-earthy">Drastic reduction in time spent searching folders or walking to ask senior staff.</p>
                    </div>

                    <div className="w-full bg-stone-200 h-px"></div>

                    <div>
                        <div className="flex justify-between items-end mb-1">
                            <span className="font-semibold text-stone-700 font-earthy">Space Utilization Accuracy</span>
                            <span className="text-xs font-bold font-tech bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Operations</span>
                        </div>
                        <p className="text-sm text-stone-500 font-earthy">Reduction in over/under-stocking incidents due to space-aware capacity calculations.</p>
                    </div>

                    <div className="w-full bg-stone-200 h-px"></div>

                    <div>
                        <div className="flex justify-between items-end mb-1">
                            <span className="font-semibold text-stone-700 font-earthy">Onboarding Velocity</span>
                            <span className="text-xs font-bold font-tech bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Labor</span>
                        </div>
                        <p className="text-sm text-stone-500 font-earthy">New hires reach full productivity faster by having instant access to institutional knowledge.</p>
                    </div>
                </div>
            </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-500 py-12 text-center text-sm border-t border-stone-800 font-tech">
        <div className="flex items-center justify-center gap-2 mb-4">
            <Zap size={16} className="text-amber-500" />
            <span className="text-stone-300 font-bold">Centaurus Modernization Initiative</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Internal Proposal by Bhavik Upadhyay. Confidential.</p>
      </footer>
    </div>
  );
}