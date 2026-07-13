import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Gokul R',
        title: 'Data Science Fresher',
        subtitle: 'Data Analysis | Machine Learning | Agentic AI | AI Tools',
        bio: "I'm a Data Science fresher with hands-on experience in data analysis, machine learning, and AI implementation. I've worked on real-world datasets, built and evaluated ML models end-to-end, and explored Agentic AI systems that automate and enhance workflows across different domains. I see AI not just as a technology, but as a practical layer that can be applied to almost any problem when built with the right intent and structure.",
        avatar: '/about/placeholder.png',
        location: 'Dindigul, Tamil Nadu, India',
        email: 'gokulr.1105@gmail.com',
        phone: '+916381386815',
        resumeUrl: '/resume',
        website: '',
        languages: [
            { name: 'Tamil', level: 'Native' },
            { name: 'English', level: 'Professional' },
        ],
        socialLinks: [
            {
                platform: 'GitHub',
                url: 'https://github.com/Lukog10',
                icon: 'github',
                username: 'Lukog10',
            },
            {
                platform: 'LinkedIn',
                url: 'https://linkedin.com/in/GokulRlukoG',
                icon: 'linkedin',
                username: 'Gokul R',
            },
            {
                platform: 'Instagram',
                url: 'https://www.instagram.com/vamos_lukog/',
                icon: 'instagram',
                username: 'vamos_lukog',
            },
            {
                platform: 'Discord',
                url: 'https://discord.com/users/lukog_10',
                icon: 'discord',
                username: 'lukog_10',
            },
        ],
    },
    projects: [
        {
            id: 'project-1',
            slug: 'vault-aegis',
            title: 'VAULT-Aegis — AI Security Gateway',
            description: 'Zero-trust AI security gateway for LLM deployments with prompt injection defence and PII sanitization.',
            longDescription: 'VAULT-Aegis is a zero-trust AI security gateway designed for secure LLM deployments. It guards against prompt injection attacks, implements PII sanitization covering 7+ sensitive data types using advanced NLP pipelines with spaCy, and conducts OWASP API security scans to ensure safe interactions with language models. This project won 1st Prize at a hackathon competition.',
            image: '/projects/vault-aegis-minimal.png',
            techStack: ['Python', 'FastAPI', 'Streamlit', 'spaCy'],
            tools: ['VS Code', 'GitHub', 'Jupyter Notebook'],
            status: 'completed',
            repoUrl: 'https://github.com/Lukog10/VAULT-Aegis',
            demoUrl: '#',
            startDate: '2025-11-01',
            role: 'AI Engineer',
            customTimeline: 'Nov 2025 – Feb 2026',
            team: 'Hackathon Team',

            highlights: ['1st Prize Hackathon', 'PII Sanitization (7+ types)', 'Prompt Injection Shield'],
            category: 'AI & Machine Learning',
            features: [
                {
                    title: 'Core Security Features',
                    items: [
                        '**Prompt Injection Defense**: Filters and neutralizes adversarial inputs targeting LLM stability and data extraction.',
                        '**PII Sanitization**: Automated redaction of 7+ sensitive information types (names, emails, phone numbers, SSNs, etc.) using spaCy NER pipelines.',
                        '**OWASP API Scanner**: Evaluates backend API integrations against OWASP Top 10 vulnerabilities for compliance assurance.'
                    ]
                },
                {
                    title: 'Architecture & Performance',
                    items: [
                        '**FastAPI Backend**: High-performance asynchronous API layer handling concurrent request validation.',
                        '**Streamlit Dashboard**: Real-time monitoring interface showing blocked threats, sanitized fields, and security audit logs.',
                        '**Zero-Trust Model**: Every request is validated before reaching the LLM — no implicit trust at any layer.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Clone and Setup',
                    code: 'git clone https://github.com/Lukog10/portfolio.git\ncd vault-aegis\npip install -r requirements.txt',
                    type: 'code'
                },
                {
                    title: 'Run the Gateway',
                    code: 'uvicorn main:app --reload\n# Dashboard: streamlit run dashboard.py',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: 'Detecting Obfuscated Prompt Injections',
                    solution: 'Implemented multi-layer input validation combining regex pattern matching, semantic similarity scoring, and a fine-tuned classifier to catch both direct and indirect injection attempts.'
                },
                {
                    problem: 'Balancing PII Detection Precision',
                    solution: 'Trained custom spaCy NER models on domain-specific datasets to reduce false positives while maintaining 95%+ recall on sensitive entity types.'
                }
            ]
        },
        {
            id: 'project-2',
            slug: 'video-games-sales-prediction',
            title: 'Video Games Sales Prediction',
            description: 'Benchmarked Linear Regression, Random Forest & XGBoost to predict global game sales.',
            longDescription: 'This project profiles over 16,000 video game titles to analyze historical sales trends across regions. Using comprehensive EDA and benchmarking Linear Regression, Random Forest, and XGBoost regressors, it achieves an R² score of 0.84 in predicting global game sales based on genre, platform, publisher, and regional demographics.',
            image: '/projects/video-game-sales-minimal.png',
            techStack: ['Random Forest', 'XGBoost', 'pandas', 'scikit-learn', 'Python'],
            tools: ['Jupyter Notebook', 'GitHub'],
            status: 'completed',
            repoUrl: 'https://github.com/Lukog10/video_game_sales_analysis-prediction',
            demoUrl: '#',
            startDate: '2026-01-01',
            role: 'Data Analyst',
            customTimeline: 'Jan 2026 – Feb 2026',
            team: 'Personal Project',

            highlights: ['16,000+ Titles Profiled', 'R² = 0.84', 'Model Benchmarking'],
            category: 'Data Science & Analytics',
            features: [
                {
                    title: 'Analysis Pipeline',
                    items: [
                        '**Exploratory Data Analysis**: Deep dives into sales performance across NA, EU, and JP regions with correlation matrices.',
                        '**Multi-Model Benchmarking**: Evaluated Linear Regression, Random Forest, and XGBoost — with XGBoost achieving the best R² of 0.84.',
                        '**Feature Importance**: Identified regional sales patterns and publisher dominance as top predictive features.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Run the Notebook',
                    code: 'git clone https://github.com/Lukog10/portfolio.git\ncd video-games-sales\njupyter notebook',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: 'Handling Missing Sales Data',
                    solution: 'Applied region-based imputation strategies using median sales within genre-platform clusters to preserve distribution integrity.'
                },
                {
                    problem: 'Overfitting on High-Cardinality Features',
                    solution: 'Implemented target encoding for publisher names and applied cross-validated hyperparameter tuning to prevent data leakage.'
                }
            ]
        },
        {
            id: 'project-3',
            slug: 'land-approval-prediction',
            title: 'Land Approval Prediction',
            description: 'Trained models on land documentation data to predict approval probabilities with 3× F1 improvement.',
            longDescription: 'Developed an end-to-end classification model trained on land documentation and verification records. The system predicts approval probabilities and is deployed through an interactive Streamlit dashboard, achieving a 3× F1 score improvement over baseline through careful feature engineering and model optimization.',
            image: '/projects/land-approval-minimal.png',
            techStack: ['Logistic Regression', 'Streamlit', 'pandas', 'scikit-learn', 'Python'],
            tools: ['VS Code', 'GitHub', 'Streamlit'],
            status: 'completed',
            repoUrl: 'https://github.com/Lukog10/Land_Document_Approval_Prediction',
            demoUrl: '#',
            startDate: '2026-01-01',
            role: 'Data Analyst & ML Developer',
            customTimeline: 'Jan 2026 – Mar 2026',
            team: 'Freelance Project',

            highlights: ['F1 3× Improvement', 'Interactive Dashboard', 'Probability Calibration'],
            category: 'Data Science & Analytics',
            features: [
                {
                    title: 'Dashboard Capabilities',
                    items: [
                        '**Streamlit Interface**: Interactive controls for testing individual land document records against the trained model.',
                        '**Probability Estimation**: Shows raw model confidence scores and calibrated probability boundaries.',
                        '**Feature Analysis**: Visual breakdown of how documentation completeness impacts approval chance.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Launch Dashboard',
                    code: 'pip install -r requirements.txt\nstreamlit run app.py',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: 'Severe Class Imbalance in Approval Data',
                    solution: 'Applied SMOTE oversampling combined with stratified k-fold cross-validation to ensure the model learned meaningful patterns from minority class samples.'
                }
            ]
        },
        {
            id: 'project-4',
            slug: 'gaming-addiction-analysis',
            title: 'Gaming Addiction Analysis',
            description: 'Extracted behavioural patterns from extensive survey data to identify top 5 risk indicators.',
            longDescription: 'An exploratory data analysis study evaluating survey responses to understand behavioral triggers in gaming addiction. Using seaborn and pandas, the research maps dependencies between gaming hours, daily routine disruptions, and social isolation metrics to identify the top 5 risk indicators for gaming addiction.',
            image: '/projects/gaming-addiction-minimal.png',
            techStack: ['Python', 'pandas', 'seaborn', 'matplotlib', 'Streamlit'],
            tools: ['Jupyter Notebook', 'VS Code', 'Streamlit'],
            status: 'completed',
            repoUrl: 'https://github.com/Lukog10/Gaming_Addiction_Prediction',
            demoUrl: '#',
            startDate: '2026-01-01',
            role: 'ML Developer & Data Researcher',
            customTimeline: 'Jan 2026 – Mar 2026',
            team: 'Freelance Project',

            highlights: ['Top 5 Risk Indicators', 'Survey Profiling', 'Interactive Visualizations'],
            category: 'Data Science & Analytics',
            features: [
                {
                    title: 'Research Insights',
                    items: [
                        '**Top Risk Factors**: Isolated weekly gaming hours and sleep pattern disruption as leading addiction flags.',
                        '**Correlation Analysis**: High-resolution heatmaps and distribution plots demonstrating behavioral correlation matrices.',
                        '**Interactive Dashboard**: Streamlit-powered explorer for filtering survey demographics and viewing real-time risk assessments.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Run Analysis',
                    code: 'pip install -r requirements.txt\njupyter notebook gaming_addiction_analysis.ipynb',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: 'Subjective Survey Response Bias',
                    solution: 'Applied outlier detection using IQR methods and cross-validated responses against behavioral timestamps to filter unreliable self-reported data.'
                }
            ]
        },
        {
            id: 'project-5',
            slug: 'laptop-price-prediction',
            title: 'Laptop Price Prediction',
            description: 'Optimized Random Forest regression on 1,000+ device configurations achieving R² = 0.88.',
            longDescription: 'Built a regression model utilizing Random Forest on 1,000+ distinct laptop hardware configurations. The pipeline includes automated feature extraction from CPU/GPU specifications, RAM tiers, and storage types, achieving an R² score of 0.88 in predicting market prices.',
            image: '/projects/laptop-price-minimal.png',
            techStack: ['Random Forest', 'Regression', 'pandas', 'scikit-learn', 'Python'],
            tools: ['Jupyter Notebook', 'VS Code'],
            status: 'completed',
            repoUrl: 'https://github.com/Lukog10/laptop_price_predictor',
            demoUrl: '#',
            startDate: '2025-07-01',
            role: 'Data Scientist',
            customTimeline: 'Jul 2025 – Aug 2025',
            team: 'Personal Project',

            highlights: ['R² = 0.88', '1,000+ Configurations', 'Feature Importance Analysis'],
            category: 'AI & Machine Learning',
            features: [
                {
                    title: 'Predictive Pipeline',
                    items: [
                        '**Hardware Parsing**: Extracted and normalized CPU benchmarks, GPU tiers, and storage specifications from raw data.',
                        '**Model Optimization**: Grid search over Random Forest hyperparameters achieving R² = 0.88 on cross-validated test sets.',
                        '**Feature Importance**: RAM size, processor generation, and brand tier identified as the top 3 price predictors.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Run Prediction Notebook',
                    code: 'jupyter notebook laptop_price_prediction.ipynb',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: 'Inconsistent Hardware Naming Conventions',
                    solution: 'Built a custom preprocessing pipeline with regex-based extraction to normalize diverse CPU and GPU naming schemes into standardized tiers.'
                }
            ]
        },
        {
            id: 'project-6',
            slug: 'london-bike-ride-analysis',
            title: 'London Bike Ride Analysis',
            description: 'Uncovered seasonal demand patterns and quantified ~23% higher weekend demand via Tableau.',
            longDescription: 'Comprehensive demand analytics on London public bike-sharing data. Developed interactive Tableau dashboards mapping ride frequency against weather conditions, temporal seasons, and holiday intervals, revealing a ~23% higher demand on weekends compared to weekdays.',
            image: '/projects/london-bike-minimal.png',
            techStack: ['Tableau', 'Time Series Analysis', 'EDA', 'Excel'],
            tools: ['Tableau Public', 'Excel'],
            status: 'completed',
            repoUrl: 'https://github.com/Lukog10/London_Bike_Ride_Analysis',
            demoUrl: '#',
            startDate: '2025-11-01',
            role: 'Business Intelligence Analyst',
            customTimeline: 'Nov 2025',
            team: 'Personal Project',

            highlights: ['~23% Higher Weekend Demand', 'Weather Impact Analysis', 'Interactive Tableau Dashboards'],
            category: 'Data Science & Analytics',
            features: [
                {
                    title: 'Key Analytics',
                    items: [
                        '**Seasonal Patterns**: Visualized major shifts in commuter activity during spring and summer months with time-series decomposition.',
                        '**Weather Impact**: Quantified ride frequency drop relative to precipitation, temperature, and wind speed using multi-variable regression.',
                        '**Interactive Stories**: Tableau story points allowing drill-down from yearly overview to hourly demand curves.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'View Dashboard',
                    code: 'Open the .twbx file in Tableau Desktop or visit the published Tableau Public link.',
                    type: 'text'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: 'Merging Weather and Ride Data Granularity',
                    solution: 'Aligned hourly weather station readings with ride start timestamps using temporal joins, handling missing weather records through forward-fill interpolation.'
                }
            ]
        },
        {
            id: 'project-7',
            slug: 'football-match-predictor',
            title: 'FWC26 Football Match Predictor',
            description: 'Predict football match outcomes for FWC26 using machine learning and historical match data.',
            longDescription: 'Developed a machine learning model to predict football match outcomes for the upcoming FIFA World Cup 2026 (FWC26). The project collects and preprocesses historical international match records, engineering features like team form, Elo ratings, head-to-head records, and goal differences, training predictive models to forecast win/draw/loss probabilities.',
            image: '/projects/football-match-predictor-minimal.png',
            techStack: ['Python', 'pandas', 'scikit-learn', 'XGBoost'],
            tools: ['Jupyter Notebook', 'VS Code', 'GitHub'],
            status: 'completed',
            repoUrl: 'https://github.com/Lukog10/FWC26_Football_Match_Predictor',
            demoUrl: '#',
            startDate: '2026-06-01',
            role: 'ML Developer',
            customTimeline: 'June 2026',
            team: 'Personal Project',
            highlights: ['FIFA Match Predictor', 'Elo Rating Integration', 'Probability Calibration'],
            category: 'AI & Machine Learning',
            features: [
                {
                    title: 'Predictive Pipeline',
                    items: [
                        '**Historical Scraper**: Scraped and aggregated 40,000+ international football matches to establish long-term trends.',
                        '**Elo Rating Integration**: Tracked dynamic strength indexes for national teams to represent match parity.',
                        '**Probability Estimation**: Outputted calibrated win, draw, and loss probability intervals using XGBoost.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Run Match Predictor',
                    code: 'git clone https://github.com/Lukog10/FWC26_Football_Match_Predictor\ncd FWC26_Football_Match_Predictor\njupyter notebook',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: 'Predicting Draw Outcomes Natively',
                    solution: 'Tuned softmax prediction thresholds on historical tournament draws to balance precision and recall on draw predictions.'
                }
            ]
        }
    ],
    experiences: [
        {
            id: 'prof-1',
            company: 'Independent Client Projects',
            position: 'Freelance Data Analyst / ML Developer',
            description: 'Built a Random Forest classifier on land documentation data with imbalanced class distribution, lifting Precision by 33% (0.22 to 0.30) and F1-score 3x over baseline. Deployed an interactive Streamlit dashboard for real-time land approval prediction. Analyzed a survey-based gaming addiction dataset, extracted the top 5 behavioural risk indicators through feature selection using Random Forest, and presented findings in a Streamlit dashboard.',
            responsibilities: [
                'Built a Random Forest classifier on land documentation data with imbalanced class distribution; lifted Precision by 33% (0.22 to 0.30) and improved F1-score 3x (0.05 to 0.16) over the Logistic Regression baseline.',
                'Deployed an interactive Streamlit dashboard for real-time land approval prediction, giving clients direct access to model outputs without writing any code.',
                'Analyzed a survey-based gaming addiction dataset; extracted the top 5 behavioural risk indicators through feature selection using Random Forest (63% accuracy on imbalanced data) and presented findings in a Streamlit dashboard for stakeholder review.'
            ],
            skills: [
                'Python',
                'scikit-learn',
                'Random Forest',
                'Streamlit',
                'Data Analysis'
            ],
            startDate: '2026-01-01',
            endDate: '2026-03-31',
            isOngoing: false,
            location: 'Remote',
            type: 'freelance',
            logo: '/assets/freelance-logo.png'
        },
        {
            id: 'prof-2',
            company: 'The American College, Madurai',
            position: 'Student Operations Assistant, Dept. of Data Science',
            description: 'Created a department data tracking system using Excel and Google Sheets, cutting weekly report generation time by 40% across a 15-member team. Coordinated documentation for 5+ departmental events per year, eliminating last-minute handoff gaps and standardizing cross-team workflows.',
            responsibilities: [
                'Created a department data tracking system using Excel and Google Sheets, cutting weekly report generation time by 40% across a 15-member team.',
                'Coordinated documentation for 5+ departmental events per year, eliminating last-minute handoff gaps and standardizing cross-team workflows.'
            ],
            skills: [
                'Excel',
                'Google Sheets',
                'Data Tracking',
                'Workflow Standardization'
            ],
            startDate: '2024-06-01',
            endDate: '2026-04-01',
            isOngoing: false,
            location: 'Madurai, Tamil Nadu',
            type: 'part-time',
            logo: '/assets/american-college-logo.png'
        },
        {
            id: 'prof-3',
            company: 'DATA VAGANZA, Department Symposium, The American College',
            position: 'Web & Application Developer',
            description: 'Designed and shipped the official event website and registration application for 200+ participants, maintaining 100% uptime across the full event window. Managed the complete deployment lifecycle from local development to live production with zero rollbacks.',
            responsibilities: [
                'Designed and shipped the official event website and registration application for 200+ participants, maintaining 100% uptime across the full event window.',
                'Managed the complete deployment lifecycle from local development to live production with zero rollbacks.'
            ],
            skills: [
                'Web Development',
                'Deployment Lifecycle',
                'System Operations',
                'Symposium Coordination'
            ],
            startDate: '2026-01-01',
            endDate: '2026-02-28',
            isOngoing: false,
            location: 'Madurai, Tamil Nadu',
            type: 'contract',
            logo: '/assets/american-college-logo.png'
        }
    ],
    education: [
        {
            id: 'edu-1',
            institution: 'The American College, Madurai',
            degree: 'Bachelor of Science',
            major: 'Data Science',
            startDate: '2023-06-24',
            endDate: '2026-04-04',
            isOngoing: false,
            gpa: '8.5/10.0',
            activities: ['Data Science Club', 'Hackathon Participant', 'Coding Club'],
            achievements: [
                'Graduated with 8.5 CGPA in Data Science.',
                '1st Prize — Hackathon (VAULT-Aegis AI Security Gateway).',
                'Completed 6+ end-to-end ML projects.',
            ],
        },
    ],
    achievements: [
        {
            id: 'ach-1',
            title: '1st Prize — Hackathon (VAULT-Aegis)',
            issuer: 'Hackathon Committee',
            date: '2024-03-01',
            description: 'Won first place with VAULT-Aegis, an AI security gateway featuring prompt injection defense and PII sanitization.',
            category: 'award',
        },
        {
            id: 'cert-1',
            title: 'Google Analytics',
            issuer: 'Google',
            date: '2024-05-01',
            description: 'Advanced data tracking and analytics certification.',
            tags: ['Google Analytics', 'Data Tracking'],
            category: 'certification',
            image: '/certificate/Google Analytics certification.pdf',
        },
        {
            id: 'cert-2',
            title: 'Prompt Engineering',
            issuer: 'Amazon Web Services',
            date: '2024-04-01',
            description: 'Techniques for optimizing LLM interactions and outputs.',
            tags: ['AWS', 'Generative AI', 'LLM'],
            category: 'certification',
            image: '/certificate/VF6eQ1bV8SfqKBpu8AVD_4G93sg9wJQ0wWe9CTc_J_4=.png',
        },
        {
            id: 'cert-3',
            title: 'AI Agents',
            issuer: 'Hugging Face',
            date: '2024-03-01',
            description: 'Building autonomous AI agent systems.',
            tags: ['AI Agents', 'Autonomy', 'Hugging Face'],
            category: 'certification',
            image: '/certificate/image.webp',
        },
        {
            id: 'cert-4',
            title: 'Data Visualization',
            issuer: 'TATA',
            date: '2023-11-01',
            description: 'Enterprise data visualization strategies and dashboarding.',
            tags: ['Data Visualization', 'Business Intelligence'],
            category: 'certification',
            image: '/certificate/TATA Data visualization certificate .pdf',
        },
        {
            id: 'cert-5',
            title: 'Data Analytics',
            issuer: 'Accenture',
            date: '2023-09-01',
            description: 'Applied analytics for business solutions.',
            tags: ['Data Analytics', 'Accenture'],
            category: 'certification',
            image: '/certificate/Accenture Data analytics certificate .pdf',
        },
        {
            id: 'cert-6',
            title: 'Data Analysis',
            issuer: 'Microsoft',
            date: '2023-07-01',
            description: 'Core data analysis methodologies with Excel and Power BI.',
            tags: ['Microsoft', 'Excel', 'Power BI'],
            category: 'certification',
            image: '/certificate/LinkedIn Learning Certificate (1).pdf',
        },
        {
            id: 'cert-7',
            title: 'Generative AI',
            issuer: 'Microsoft',
            date: '2023-06-01',
            description: 'Foundations of Generative AI and prompt design.',
            tags: ['Microsoft', 'Generative AI', 'Prompt Design'],
            category: 'certification',
            image: '/certificate/LinkedIn Learning Certificate.pdf',
        },
        {
            id: 'cert-8',
            title: 'Python for Beginners',
            issuer: 'Scaler Topics',
            date: '2024-11-21',
            description: 'Foundations of Python programming, loops, and data structures.',
            tags: ['Python', 'Programming'],
            category: 'certification',
            image: '/certificate/IMG_1729257197539.jpg',
        },
        {
            id: 'cert-9',
            title: 'EDA and Data Visualization',
            issuer: 'Scaler Topics',
            date: '2024-11-25',
            description: 'Exploratory Data Analysis and Data Visualization in Data Science.',
            tags: ['EDA', 'Data Visualization', 'Data Science'],
            category: 'certification',
            image: '/certificate/a1155728-b6f3-4dcb-ba3a-0449dce01f57_copy.pdf',
        },
        {
            id: 'cert-10',
            title: 'Machine Learning Essentials',
            issuer: 'Kaggle',
            date: '2024-10-15',
            description: 'Applying core machine learning models and evaluating performance.',
            tags: ['Machine Learning', 'Kaggle'],
            category: 'certification',
            image: '/certificate/IMG_1732167055301.jpg',
        },
        {
            id: 'cert-11',
            title: 'Python and SQL for Data Science',
            issuer: 'Scaler Topics',
            date: '2025-03-31',
            description: 'Advanced analytics and database foundations in Python and SQL.',
            tags: ['Python', 'SQL', 'Data Science'],
            category: 'certification',
            image: '/certificate/b348fec9292745a027be72c56428fa1f0f383487bafef09e52355d05f2c91f3c.png',
        },
    ],
    techStack: [
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python', category: 'language' },
        { name: 'SQL', icon: 'https://cdn.simpleicons.org/postgresql', category: 'language' },
        { name: 'pandas', icon: 'https://cdn.simpleicons.org/pandas', category: 'library' },
        { name: 'NumPy', icon: 'https://cdn.simpleicons.org/numpy', category: 'library' },
        { name: 'scikit-learn', icon: 'https://cdn.simpleicons.org/scikitlearn', category: 'library' },
        { name: 'XGBoost', icon: 'https://cdn.simpleicons.org/xgboost', category: 'library' },
        { name: 'matplotlib', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg', category: 'library' },
        { name: 'seaborn', icon: 'https://cdn.simpleicons.org/python', category: 'library' },
        { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi', category: 'framework' },
        { name: 'Streamlit', icon: 'https://cdn.simpleicons.org/streamlit', category: 'framework' },
        { name: 'spaCy', icon: 'https://cdn.simpleicons.org/spacy', category: 'library' },
    ],
    hardSkills: [
        { name: 'Data Analysis', level: 'expert', category: 'data', description: 'Transforming complex datasets into actionable business intelligence using pandas, NumPy, and statistical methods.' },
        { name: 'Machine Learning', level: 'advanced', category: 'ai', description: 'Building and tuning classification, regression, and clustering models with scikit-learn and XGBoost.' },
        { name: 'Agentic AI', level: 'intermediate', category: 'ai', description: 'Designing and integrating autonomous AI agent workflows for process automation.' },
        { name: 'Data Visualization', level: 'expert', category: 'data', description: 'Creating interactive dashboards and visual stories using Tableau, Power BI, and matplotlib.' },
        { name: 'SQL & Database Management', level: 'expert', category: 'database', description: 'Writing optimized queries, designing schemas, and managing relational databases.' },
        { name: 'Prompt Engineering', level: 'intermediate', category: 'ai', description: 'Crafting effective prompts for LLMs to maximize output quality and reliability.' },
        { name: 'FastAPI & API Design', level: 'intermediate', category: 'backend', description: 'Building high-performance asynchronous APIs with Python.' },
        { name: 'Streamlit Applications', level: 'advanced', category: 'frontend', description: 'Rapid prototyping and deployment of interactive ML dashboards.' },
        { name: 'EDA & Statistical Analysis', level: 'advanced', category: 'data', description: 'Comprehensive exploratory data analysis with hypothesis testing and distribution profiling.' },
    ],
    softSkills: [
        { name: 'Problem Solving', description: 'Structured debugging and analytical approach to complex data challenges.' },
        { name: 'Systemic Thinking', description: 'Understanding how data pipelines, APIs, and ML models interconnect.' },
        { name: 'Critical Thinking', description: 'Validating hypotheses with empirical data and statistical rigor.' },
        { name: 'Continuous Learning', description: 'Actively exploring cutting-edge AI tools, frameworks, and methodologies.' },
        { name: 'Analytical Thinking', description: 'Breaking down complex datasets into meaningful, interpretable insights.' },
        { name: 'Adaptability', description: 'Quickly scaling workflows to accommodate new datasets and requirements.' },
        { name: 'Communication', description: 'Presenting technical findings through clear reports and interactive dashboards.' },
        { name: 'Teamwork', description: 'Collaborative problem solving in cross-functional project environments.' },
    ],
    tools: [
        { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', category: 'ide' },
        { name: 'Jupyter', icon: 'https://cdn.simpleicons.org/jupyter', category: 'ide' },
        { name: 'Google Colab', icon: 'https://cdn.simpleicons.org/googlecolab', category: 'ide' },
        { name: 'Claude Code', icon: 'https://cdn.simpleicons.org/anthropic', category: 'ide' },
        { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github', category: 'devops' },
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git', category: 'devops' },
        { name: 'Hugging Face', icon: 'https://cdn.simpleicons.org/huggingface', category: 'productivity' },
        { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase', category: 'devops' },
        { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel', category: 'devops' },
        { name: 'Tableau', icon: 'https://cdn.simpleicons.org/tableau', category: 'productivity' },
        { name: 'Power BI', icon: 'https://cdn.simpleicons.org/powerbi', category: 'productivity' },
    ],
    faqs: [
        {
            question: 'What are your core specializations?',
            answer: 'I specialize in Data Analysis, Machine Learning (Regression, Classification, Clustering), and building AI-powered tools including Prompt Engineering gateways and Agentic AI systems.',
        },
        {
            question: 'What analytics and visualization tools do you use?',
            answer: 'I use Tableau, Power BI, Excel, and Python libraries (pandas, matplotlib, seaborn) to parse, analyze, and visualize complex data structures into actionable insights.',
        },
        {
            question: 'Are you available for data science opportunities?',
            answer: "Yes! I'm actively looking for Data Scientist, Data Analyst, and ML Developer roles. Feel free to reach out via email at gokulr.1105@gmail.com or connect on LinkedIn.",
        },
    ],
    blogs: [
        {
            id: 'blog-1',
            slug: 'vault-aegis-hackathon',
            title: 'Building VAULT-Aegis: Winning the Hackathon',
            excerpt: 'How we built a zero-trust prompt injection shield and PII sanitizer to win first place.',
            content: 'VAULT-Aegis started as an idea to address a growing concern in the AI community — the vulnerability of LLM-powered applications to prompt injection attacks and data leakage. Our team designed a multi-layered security gateway that validates every input before it reaches the language model, while simultaneously scanning for personally identifiable information that could be inadvertently leaked...',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2024-03-20',
            category: 'applied-ai',
            tags: ['AI', 'Security', 'FastAPI', 'Hackathon'],
            author: { name: 'Gokul R', avatar: '/about/placeholder.png' },
            readTime: '5'
        },
        {
            id: 'blog-2',
            slug: 'game-sales-forecasting',
            title: 'Predicting Video Game Sales with XGBoost',
            excerpt: 'Analyzing 16,000+ titles to model global market demand trends.',
            content: 'The video game industry generates billions in revenue annually, yet predicting which titles will succeed remains a challenging problem. In this project, I analyzed a dataset of over 16,000 game titles spanning multiple decades, regions, and platforms to build a predictive model for global sales...',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2023-12-01',
            category: 'data-science',
            tags: ['Python', 'XGBoost', 'Machine Learning'],
            author: { name: 'Gokul R', avatar: '/about/placeholder.png' },
            readTime: '6'
        },
        {
            id: 'blog-3',
            slug: 'agentic-ai-exploration',
            title: 'Exploring Agentic AI: Beyond Simple Chatbots',
            excerpt: 'How autonomous AI agents are reshaping workflows and decision-making processes.',
            content: 'The evolution from simple chatbots to autonomous AI agents represents a fundamental shift in how we think about artificial intelligence. While traditional chatbots follow scripted responses, agentic AI systems can reason, plan, and execute multi-step tasks independently...',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2024-05-10',
            category: 'applied-ai',
            tags: ['AI', 'Agents', 'Automation'],
            author: { name: 'Gokul R', avatar: '/about/placeholder.png' },
            readTime: '7'
        },
        {
            id: 'blog-4',
            slug: 'data-visualization-best-practices',
            title: 'Data Visualization: From Raw Numbers to Stories',
            excerpt: 'Best practices for creating impactful Tableau and Power BI dashboards.',
            content: 'Data visualization is more than just making charts look pretty — it is about telling a compelling story that drives action. In my experience building dashboards for bike-sharing analytics and sales forecasting, I have learned that the most effective visualizations start with a clear question...',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2023-06-15',
            category: 'data-science',
            tags: ['Tableau', 'Power BI', 'Visualization'],
            author: { name: 'Gokul R', avatar: '/about/placeholder.png' },
            readTime: '4'
        },
        {
            id: 'blog-5',
            slug: 'ml-model-selection',
            title: 'Choosing the Right ML Model: A Practical Guide',
            excerpt: 'When to use Random Forest vs XGBoost vs Logistic Regression — lessons from real projects.',
            content: 'One of the most common questions in data science is which model to choose for a given problem. Having worked across multiple projects — from price prediction to land approval classification — I have developed a practical framework for model selection...',
            image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2024-01-10',
            category: 'data-science',
            tags: ['Machine Learning', 'Python', 'scikit-learn'],
            author: { name: 'Gokul R', avatar: '/about/placeholder.png' },
            readTime: '8'
        },
    ],
    gallery: [
        {
            id: 'gal-1',
            title: 'Hackathon Victory',
            description: 'Presenting VAULT-Aegis AI Security Gateway to the hackathon judging panel.',
            date: '2024-03-01',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop&fm=webp',
            category: 'event'
        },
        {
            id: 'gal-2',
            title: 'Data Visualization Workshop',
            description: 'Interactive Tableau dashboard showcasing London bike-sharing demand analytics.',
            date: '2023-03-10',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2000&auto=format&fit=crop&fm=webp',
            category: 'technical'
        },
        {
            id: 'gal-3',
            title: 'ML Model Training Session',
            description: 'Working on XGBoost hyperparameter optimization for the game sales prediction project.',
            date: '2023-11-15',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2000&auto=format&fit=crop&fm=webp',
            category: 'technical'
        },
    ],
};
