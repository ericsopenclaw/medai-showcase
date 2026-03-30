import { useState } from 'react'

const AI_MODELS = [
  { name: 'Chest X-Ray Classifier', type: '放射科 AI', accuracy: 94.2, status: '研究中', color: '#4f46e5' },
  { name: 'Brain Tumor MRI Analyzer', type: 'MRI 分析', accuracy: 91.7, status: '已部署', color: '#059669' },
  { name: 'Bone Age Assessment', type: '骨齡檢測', accuracy: 88.5, status: '已部署', color: '#d97706' },
  { name: 'Pneumonia Detector', type: '胸部 CT', accuracy: 96.1, status: '研究中', color: '#dc2626' },
  { name: 'Liver Lesion Characterization', type: '腹部超聲', accuracy: 89.3, status: '已部署', color: '#7c3aed' },
  { name: 'Retinal OCT Classifier', type: '眼科 AI', accuracy: 93.8, status: '研究中', color: '#0891b2' },
]

const PUBLICATIONS = [
  { title: 'Deep Learning in Chest X-Ray Analysis', journal: 'Radiology AI', year: 2024, citations: 47 },
  { title: 'Automated Brain Tumor Segmentation', journal: 'NeuroImage', year: 2024, citations: 32 },
  { title: 'AI-Assisted Bone Age Prediction', journal: 'Pediatric Radiology', year: 2023, citations: 28 },
]

function App() {
  const [activeTab, setActiveTab] = useState('models')
  const [search, setSearch] = useState('')

  const filtered = AI_MODELS.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.type.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app medai">
      <header className="hero">
        <div className="hero-content">
          <h1>🏥 醫療 AI 展示平台</h1>
          <p>Radiology AI Research & Development</p>
          <div className="badges">
            <span className="badge">🤖 {AI_MODELS.length} AI 模型</span>
            <span className="badge">📄 {PUBLICATIONS.length} 研究論文</span>
            <span className="badge">📊 平均準確率 92.3%</span>
          </div>
        </div>
      </header>

      <nav className="tabs">
        {['models', 'research', 'about'].map(tab => (
          <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>
            {tab === 'models' ? '🤖 AI 模型' : tab === 'research' ? '📄 研究論文' : 'ℹ️ 關於'}
          </button>
        ))}
      </nav>

      <main className="content">
        {activeTab === 'models' && (
          <>
            <div className="search-bar">
              <input placeholder="搜尋模型..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="grid">
              {filtered.map((m, i) => (
                <div key={i} className="model-card" style={{ borderTop: `4px solid ${m.color}` }}>
                  <div className="model-header">
                    <h3>{m.name}</h3>
                    <span className={`status ${m.status}`}>{m.status}</span>
                  </div>
                  <span className="model-type">{m.type}</span>
                  <div className="accuracy">
                    <div className="accuracy-bar">
                      <div className="accuracy-fill" style={{ width: `${m.accuracy}%`, background: m.color }} />
                    </div>
                    <span>{m.accuracy}%</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'research' && (
          <div className="publications">
            {PUBLICATIONS.map((p, i) => (
              <div key={i} className="pub-card">
                <h3>{p.title}</h3>
                <p className="journal">{p.journal} · {p.year}</p>
                <span className="citations">📚 {p.citations} Citations</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'about' && (
          <div className="about">
            <div className="card">
              <h2>👨‍⚕️ 關於平台</h2>
              <p>本平台展示放射科人工智慧研究與開發成果，包含胸部 X 光、MRI、超聲等多模態醫療影像 AI 分析系統。</p>
              <hr />
              <h3>核心技術</h3>
              <ul>
                <li>🔬 卷積神經網路 (CNN)</li>
                <li>🧠 Transformer 架構</li>
                <li>📊 遷移學習 (Transfer Learning)</li>
                <li>⚡ 模型蒸餾 (Knowledge Distillation)</li>
              </ul>
              <hr />
              <p className="contact">📧 聯絡我們：radiology-ai@hospital.org</p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
