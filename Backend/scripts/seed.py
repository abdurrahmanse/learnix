"""
scripts/seed.py
────────────────────────────────────────────────────────────
DataSci Academy — Database Seed Script

Creates realistic demo data for development and testing:
  - 1 Admin user
  - 5 Student users
  - 6 Courses  (Python, ML, Deep Learning, CV, NLP, AI)
  - 24 Sections across all courses
  - 90+ Lessons with realistic titles and durations
  - Resources (PDFs, Notebooks, Datasets) per lesson
  - Enrollments, Progress records
  - Subscriptions and Payments

Run:
  cd Backend
  python scripts/seed.py
"""

import asyncio
import uuid
from datetime import datetime, timedelta, timezone
from decimal import Decimal

# ── Helpers ──────────────────────────────────────────────────

def uid():
    return str(uuid.uuid4())

def now():
    return datetime.now(timezone.utc)

def ago(days=0, hours=0):
    return now() - timedelta(days=days, hours=hours)

def future(days=0):
    return now() + timedelta(days=days)

# ══════════════════════════════════════════════════════════════
# USERS
# ══════════════════════════════════════════════════════════════

ADMIN_ID = uid()

USERS = [
    # Admin
    {
        "id": ADMIN_ID,
        "email": "admin@datasci.academy",
        "username": "admin",
        "full_name": "Academy Admin",
        "password": "Admin@1234",          # bcrypt this before inserting
        "role": "admin",
        "avatar_url": "https://api.dicebear.com/7.x/initials/svg?seed=AA",
        "is_active": True,
        "is_verified": True,
        "created_at": ago(days=180),
    },
    # Students
    {
        "id": uid(),
        "email": "sarah.chen@gmail.com",
        "username": "sarah_chen",
        "full_name": "Sarah Chen",
        "password": "Student@1234",
        "role": "student",
        "avatar_url": "https://api.dicebear.com/7.x/initials/svg?seed=SC",
        "is_active": True,
        "is_verified": True,
        "created_at": ago(days=90),
    },
    {
        "id": uid(),
        "email": "james.patel@outlook.com",
        "username": "james_patel",
        "full_name": "James Patel",
        "password": "Student@1234",
        "role": "student",
        "avatar_url": "https://api.dicebear.com/7.x/initials/svg?seed=JP",
        "is_active": True,
        "is_verified": True,
        "created_at": ago(days=60),
    },
    {
        "id": uid(),
        "email": "aisha.malik@yahoo.com",
        "username": "aisha_malik",
        "full_name": "Aisha Malik",
        "password": "Student@1234",
        "role": "student",
        "avatar_url": "https://api.dicebear.com/7.x/initials/svg?seed=AM",
        "is_active": True,
        "is_verified": True,
        "created_at": ago(days=45),
    },
    {
        "id": uid(),
        "email": "carlos.rodriguez@gmail.com",
        "username": "carlos_rod",
        "full_name": "Carlos Rodriguez",
        "password": "Student@1234",
        "role": "student",
        "avatar_url": "https://api.dicebear.com/7.x/initials/svg?seed=CR",
        "is_active": True,
        "is_verified": False,
        "created_at": ago(days=20),
    },
    {
        "id": uid(),
        "email": "emma.wilson@proton.me",
        "username": "emma_wilson",
        "full_name": "Emma Wilson",
        "password": "Student@1234",
        "role": "student",
        "avatar_url": "https://api.dicebear.com/7.x/initials/svg?seed=EW",
        "is_active": True,
        "is_verified": True,
        "created_at": ago(days=10),
    },
]

# Quick reference IDs
SARAH_ID   = USERS[1]["id"]
JAMES_ID   = USERS[2]["id"]
AISHA_ID   = USERS[3]["id"]
CARLOS_ID  = USERS[4]["id"]
EMMA_ID    = USERS[5]["id"]

# ══════════════════════════════════════════════════════════════
# COURSES
# ══════════════════════════════════════════════════════════════

COURSE_PYTHON_ID  = uid()
COURSE_ML_ID      = uid()
COURSE_DL_ID      = uid()
COURSE_CV_ID      = uid()
COURSE_NLP_ID     = uid()
COURSE_AI_ID      = uid()

COURSES = [
    {
        "id": COURSE_PYTHON_ID,
        "title": "Python for Data Science — Complete Bootcamp",
        "slug": "python-data-science-bootcamp",
        "description": (
            "Master Python from scratch with a data science focus. "
            "You will learn Python syntax, data structures, NumPy, Pandas, "
            "Matplotlib, and real-world data cleaning and analysis techniques. "
            "Perfect for complete beginners who want to start their data science journey."
        ),
        "short_desc": "Learn Python from zero to data science hero. NumPy, Pandas, Matplotlib and real projects.",
        "thumbnail_url": "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800",
        "price": Decimal("49.99"),
        "level": "beginner",
        "category": "Python",
        "is_published": True,
        "is_free": False,
        "total_lessons": 28,
        "total_duration": 21600,   # 6 hours
        "created_by": ADMIN_ID,
        "created_at": ago(days=120),
    },
    {
        "id": COURSE_ML_ID,
        "title": "Machine Learning A–Z: Hands-On with Scikit-Learn",
        "slug": "machine-learning-a-to-z",
        "description": (
            "A complete machine learning course covering supervised and unsupervised "
            "algorithms: Linear Regression, Logistic Regression, Decision Trees, "
            "Random Forests, SVM, K-Means, PCA, and model evaluation. "
            "Every algorithm is implemented from scratch and then with Scikit-Learn."
        ),
        "short_desc": "Master ML algorithms from scratch. Classification, regression, clustering and model evaluation.",
        "thumbnail_url": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
        "price": Decimal("69.99"),
        "level": "intermediate",
        "category": "Machine Learning",
        "is_published": True,
        "is_free": False,
        "total_lessons": 35,
        "total_duration": 32400,   # 9 hours
        "created_by": ADMIN_ID,
        "created_at": ago(days=90),
    },
    {
        "id": COURSE_DL_ID,
        "title": "Deep Learning with PyTorch — From Scratch to Production",
        "slug": "deep-learning-pytorch",
        "description": (
            "Build and train neural networks using PyTorch. "
            "Covers neural network fundamentals, CNNs, RNNs, LSTMs, "
            "Transformers, transfer learning, and model deployment with FastAPI. "
            "Projects include image classification, sentiment analysis, and time series."
        ),
        "short_desc": "Build neural networks in PyTorch. CNNs, RNNs, Transformers and real deployment.",
        "thumbnail_url": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",
        "price": Decimal("89.99"),
        "level": "intermediate",
        "category": "Deep Learning",
        "is_published": True,
        "is_free": False,
        "total_lessons": 40,
        "total_duration": 43200,   # 12 hours
        "created_by": ADMIN_ID,
        "created_at": ago(days=75),
    },
    {
        "id": COURSE_CV_ID,
        "title": "Computer Vision with OpenCV and PyTorch",
        "slug": "computer-vision-opencv-pytorch",
        "description": (
            "Dive deep into computer vision. Starting with OpenCV fundamentals "
            "(image processing, feature detection), progressing to deep learning-based "
            "object detection (YOLO, Faster R-CNN), image segmentation, and "
            "face recognition. Includes 3 end-to-end projects."
        ),
        "short_desc": "Master computer vision with OpenCV and deep learning. Object detection, segmentation, face recognition.",
        "thumbnail_url": "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800",
        "price": Decimal("79.99"),
        "level": "advanced",
        "category": "Computer Vision",
        "is_published": True,
        "is_free": False,
        "total_lessons": 32,
        "total_duration": 36000,   # 10 hours
        "created_by": ADMIN_ID,
        "created_at": ago(days=60),
    },
    {
        "id": COURSE_NLP_ID,
        "title": "Natural Language Processing with Transformers",
        "slug": "nlp-with-transformers",
        "description": (
            "Complete NLP course covering text preprocessing, traditional NLP (TF-IDF, "
            "word embeddings), modern transformers (BERT, GPT), fine-tuning HuggingFace "
            "models, text classification, NER, question answering, and building "
            "your own chatbot."
        ),
        "short_desc": "From text preprocessing to BERT and GPT. Build NLP applications with HuggingFace Transformers.",
        "thumbnail_url": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800",
        "price": Decimal("79.99"),
        "level": "advanced",
        "category": "Machine Learning",
        "is_published": True,
        "is_free": False,
        "total_lessons": 30,
        "total_duration": 36000,   # 10 hours
        "created_by": ADMIN_ID,
        "created_at": ago(days=45),
    },
    {
        "id": COURSE_AI_ID,
        "title": "AI Engineering: Build and Deploy AI Applications",
        "slug": "ai-engineering-build-deploy",
        "description": (
            "Practical AI engineering for developers. Learn to build production-ready "
            "AI apps using LLMs (OpenAI API, LangChain), RAG pipelines, vector databases "
            "(Chroma, Pinecone), AI agents, and deploy them with FastAPI + Docker. "
            "No fluff — pure engineering."
        ),
        "short_desc": "Build production AI apps with LLMs, RAG, LangChain, vector databases and FastAPI.",
        "thumbnail_url": "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800",
        "price": Decimal("99.99"),
        "level": "advanced",
        "category": "Artificial Intelligence",
        "is_published": True,
        "is_free": False,
        "total_lessons": 36,
        "total_duration": 43200,   # 12 hours
        "created_by": ADMIN_ID,
        "created_at": ago(days=30),
    },
]

# ══════════════════════════════════════════════════════════════
# SECTIONS
# ══════════════════════════════════════════════════════════════

SECTIONS = [

    # ── Python Course ─────────────────────────────────────
    {"id": (S_PY1 := uid()), "course_id": COURSE_PYTHON_ID, "title": "Python Fundamentals",              "order_index": 1},
    {"id": (S_PY2 := uid()), "course_id": COURSE_PYTHON_ID, "title": "Data Structures & Control Flow",   "order_index": 2},
    {"id": (S_PY3 := uid()), "course_id": COURSE_PYTHON_ID, "title": "NumPy & Pandas",                   "order_index": 3},
    {"id": (S_PY4 := uid()), "course_id": COURSE_PYTHON_ID, "title": "Data Visualization",               "order_index": 4},

    # ── ML Course ──────────────────────────────────────────
    {"id": (S_ML1 := uid()), "course_id": COURSE_ML_ID, "title": "ML Foundations & Math",               "order_index": 1},
    {"id": (S_ML2 := uid()), "course_id": COURSE_ML_ID, "title": "Supervised Learning",                 "order_index": 2},
    {"id": (S_ML3 := uid()), "course_id": COURSE_ML_ID, "title": "Unsupervised Learning",               "order_index": 3},
    {"id": (S_ML4 := uid()), "course_id": COURSE_ML_ID, "title": "Model Evaluation & Pipelines",       "order_index": 4},

    # ── Deep Learning Course ───────────────────────────────
    {"id": (S_DL1 := uid()), "course_id": COURSE_DL_ID, "title": "Neural Network Fundamentals",        "order_index": 1},
    {"id": (S_DL2 := uid()), "course_id": COURSE_DL_ID, "title": "Convolutional Neural Networks",      "order_index": 2},
    {"id": (S_DL3 := uid()), "course_id": COURSE_DL_ID, "title": "Recurrent Networks & Sequences",     "order_index": 3},
    {"id": (S_DL4 := uid()), "course_id": COURSE_DL_ID, "title": "Transformers & Attention",           "order_index": 4},
    {"id": (S_DL5 := uid()), "course_id": COURSE_DL_ID, "title": "Model Deployment",                   "order_index": 5},

    # ── Computer Vision Course ─────────────────────────────
    {"id": (S_CV1 := uid()), "course_id": COURSE_CV_ID, "title": "OpenCV Fundamentals",                "order_index": 1},
    {"id": (S_CV2 := uid()), "course_id": COURSE_CV_ID, "title": "Feature Detection & Matching",       "order_index": 2},
    {"id": (S_CV3 := uid()), "course_id": COURSE_CV_ID, "title": "Deep Learning for Vision",           "order_index": 3},
    {"id": (S_CV4 := uid()), "course_id": COURSE_CV_ID, "title": "Object Detection Projects",          "order_index": 4},

    # ── NLP Course ─────────────────────────────────────────
    {"id": (S_NL1 := uid()), "course_id": COURSE_NLP_ID, "title": "Text Preprocessing & NLP Basics",  "order_index": 1},
    {"id": (S_NL2 := uid()), "course_id": COURSE_NLP_ID, "title": "Word Embeddings & Traditional NLP","order_index": 2},
    {"id": (S_NL3 := uid()), "course_id": COURSE_NLP_ID, "title": "Transformers & BERT",              "order_index": 3},
    {"id": (S_NL4 := uid()), "course_id": COURSE_NLP_ID, "title": "NLP Applications",                 "order_index": 4},

    # ── AI Engineering Course ──────────────────────────────
    {"id": (S_AI1 := uid()), "course_id": COURSE_AI_ID, "title": "LLM APIs & Prompting",              "order_index": 1},
    {"id": (S_AI2 := uid()), "course_id": COURSE_AI_ID, "title": "LangChain & RAG",                   "order_index": 2},
    {"id": (S_AI3 := uid()), "course_id": COURSE_AI_ID, "title": "Vector Databases",                  "order_index": 3},
    {"id": (S_AI4 := uid()), "course_id": COURSE_AI_ID, "title": "AI Agents",                         "order_index": 4},
    {"id": (S_AI5 := uid()), "course_id": COURSE_AI_ID, "title": "Deployment & Production",           "order_index": 5},
]

# ══════════════════════════════════════════════════════════════
# LESSONS
# ══════════════════════════════════════════════════════════════

def lesson(section_id, course_id, title, order, duration_min, is_preview=False):
    return {
        "id": uid(),
        "section_id": section_id,
        "course_id": course_id,
        "title": title,
        "description": f"In this lesson you will learn: {title}.",
        "video_url": f"https://vz-abc123.b-cdn.net/{uid()}/playlist.m3u8",
        "video_duration": duration_min * 60,
        "order_index": order,
        "is_preview": is_preview,
        "is_published": True,
    }

LESSONS = [

    # ── Python: Section 1 — Fundamentals ──────────────────
    lesson(S_PY1, COURSE_PYTHON_ID, "Welcome & Course Overview",              1,  5,  True),
    lesson(S_PY1, COURSE_PYTHON_ID, "Installing Python & VS Code",            2,  8,  True),
    lesson(S_PY1, COURSE_PYTHON_ID, "Variables, Data Types & Type Casting",   3, 18),
    lesson(S_PY1, COURSE_PYTHON_ID, "Strings & String Methods",               4, 22),
    lesson(S_PY1, COURSE_PYTHON_ID, "Numbers, Math & the math Module",        5, 15),
    lesson(S_PY1, COURSE_PYTHON_ID, "User Input & Basic I/O",                 6, 12),

    # ── Python: Section 2 — Data Structures ───────────────
    lesson(S_PY2, COURSE_PYTHON_ID, "Lists — Creation, Indexing & Slicing",   1, 20),
    lesson(S_PY2, COURSE_PYTHON_ID, "List Methods & List Comprehensions",      2, 18),
    lesson(S_PY2, COURSE_PYTHON_ID, "Tuples & Sets",                           3, 14),
    lesson(S_PY2, COURSE_PYTHON_ID, "Dictionaries & Nested Structures",        4, 22),
    lesson(S_PY2, COURSE_PYTHON_ID, "If / Elif / Else Control Flow",           5, 16),
    lesson(S_PY2, COURSE_PYTHON_ID, "For & While Loops",                       6, 20),
    lesson(S_PY2, COURSE_PYTHON_ID, "Functions & Lambda",                      7, 25),

    # ── Python: Section 3 — NumPy & Pandas ────────────────
    lesson(S_PY3, COURSE_PYTHON_ID, "NumPy Arrays — Creation & Operations",   1, 25),
    lesson(S_PY3, COURSE_PYTHON_ID, "NumPy Indexing, Slicing & Broadcasting",  2, 22),
    lesson(S_PY3, COURSE_PYTHON_ID, "Pandas Series & DataFrames",              3, 28),
    lesson(S_PY3, COURSE_PYTHON_ID, "Reading CSV, Excel & JSON Data",          4, 18),
    lesson(S_PY3, COURSE_PYTHON_ID, "Data Cleaning — Missing Values & Duplicates", 5, 30),
    lesson(S_PY3, COURSE_PYTHON_ID, "GroupBy, Merge & Pivot Tables",           6, 28),

    # ── Python: Section 4 — Visualization ─────────────────
    lesson(S_PY4, COURSE_PYTHON_ID, "Matplotlib — Line, Bar & Scatter Plots", 1, 22),
    lesson(S_PY4, COURSE_PYTHON_ID, "Subplots, Styles & Customization",        2, 18),
    lesson(S_PY4, COURSE_PYTHON_ID, "Seaborn — Statistical Visualizations",    3, 20),
    lesson(S_PY4, COURSE_PYTHON_ID, "Plotly — Interactive Charts",             4, 22),
    lesson(S_PY4, COURSE_PYTHON_ID, "Capstone: Exploratory Data Analysis",     5, 35),

    # ── ML: Section 1 — Foundations ───────────────────────
    lesson(S_ML1, COURSE_ML_ID, "What is Machine Learning?",                   1,  8, True),
    lesson(S_ML1, COURSE_ML_ID, "Types of ML: Supervised, Unsupervised, RL",   2, 12, True),
    lesson(S_ML1, COURSE_ML_ID, "Linear Algebra Refresher for ML",             3, 25),
    lesson(S_ML1, COURSE_ML_ID, "Statistics & Probability for ML",             4, 28),
    lesson(S_ML1, COURSE_ML_ID, "Data Preprocessing Pipeline",                 5, 22),

    # ── ML: Section 2 — Supervised Learning ───────────────
    lesson(S_ML2, COURSE_ML_ID, "Linear Regression — Theory & Implementation", 1, 30),
    lesson(S_ML2, COURSE_ML_ID, "Polynomial Regression & Overfitting",         2, 25),
    lesson(S_ML2, COURSE_ML_ID, "Logistic Regression — Binary Classification", 3, 28),
    lesson(S_ML2, COURSE_ML_ID, "Decision Trees from Scratch",                 4, 32),
    lesson(S_ML2, COURSE_ML_ID, "Random Forests & Bagging",                   5, 28),
    lesson(S_ML2, COURSE_ML_ID, "Support Vector Machines (SVM)",               6, 30),
    lesson(S_ML2, COURSE_ML_ID, "Gradient Boosting & XGBoost",                7, 32),

    # ── ML: Section 3 — Unsupervised ──────────────────────
    lesson(S_ML3, COURSE_ML_ID, "K-Means Clustering",                          1, 28),
    lesson(S_ML3, COURSE_ML_ID, "Hierarchical Clustering & DBSCAN",            2, 25),
    lesson(S_ML3, COURSE_ML_ID, "PCA — Dimensionality Reduction",              3, 30),
    lesson(S_ML3, COURSE_ML_ID, "t-SNE & UMAP for Visualization",              4, 22),

    # ── ML: Section 4 — Evaluation ────────────────────────
    lesson(S_ML4, COURSE_ML_ID, "Train/Test Split & Cross-Validation",         1, 20),
    lesson(S_ML4, COURSE_ML_ID, "Classification Metrics (Precision, Recall, F1)", 2, 25),
    lesson(S_ML4, COURSE_ML_ID, "Regression Metrics (RMSE, MAE, R²)",         3, 18),
    lesson(S_ML4, COURSE_ML_ID, "Hyperparameter Tuning with GridSearchCV",     4, 25),
    lesson(S_ML4, COURSE_ML_ID, "Scikit-Learn Pipelines",                      5, 22),
    lesson(S_ML4, COURSE_ML_ID, "Capstone: End-to-End ML Project",             6, 45),

    # ── Deep Learning: Section 1 ───────────────────────────
    lesson(S_DL1, COURSE_DL_ID, "What is a Neural Network?",                   1, 12, True),
    lesson(S_DL1, COURSE_DL_ID, "Perceptron & Activation Functions",           2, 20, True),
    lesson(S_DL1, COURSE_DL_ID, "Backpropagation & Gradient Descent",          3, 35),
    lesson(S_DL1, COURSE_DL_ID, "PyTorch Tensors & Autograd",                  4, 28),
    lesson(S_DL1, COURSE_DL_ID, "Building Your First Neural Network",          5, 32),
    lesson(S_DL1, COURSE_DL_ID, "Batch Normalization & Dropout",               6, 25),

    # ── Deep Learning: Section 2 — CNNs ───────────────────
    lesson(S_DL2, COURSE_DL_ID, "Convolution Operation Explained",             1, 22),
    lesson(S_DL2, COURSE_DL_ID, "Pooling, Stride & Padding",                  2, 18),
    lesson(S_DL2, COURSE_DL_ID, "Building a CNN for CIFAR-10",                 3, 35),
    lesson(S_DL2, COURSE_DL_ID, "Transfer Learning with ResNet & VGG",        4, 30),
    lesson(S_DL2, COURSE_DL_ID, "Fine-tuning Pretrained Models",               5, 28),

    # ── Deep Learning: Section 3 — RNNs ───────────────────
    lesson(S_DL3, COURSE_DL_ID, "Recurrent Neural Networks (RNN)",             1, 25),
    lesson(S_DL3, COURSE_DL_ID, "LSTM — Long Short-Term Memory",              2, 30),
    lesson(S_DL3, COURSE_DL_ID, "Sequence-to-Sequence Models",                3, 28),
    lesson(S_DL3, COURSE_DL_ID, "Time Series Forecasting with LSTM",           4, 35),

    # ── Deep Learning: Section 4 — Transformers ───────────
    lesson(S_DL4, COURSE_DL_ID, "Attention Mechanism — Intuition",             1, 25),
    lesson(S_DL4, COURSE_DL_ID, "Self-Attention & Multi-Head Attention",       2, 30),
    lesson(S_DL4, COURSE_DL_ID, "Transformer Architecture from Scratch",       3, 40),
    lesson(S_DL4, COURSE_DL_ID, "Vision Transformer (ViT)",                    4, 28),

    # ── Deep Learning: Section 5 — Deployment ─────────────
    lesson(S_DL5, COURSE_DL_ID, "Saving & Loading PyTorch Models",             1, 15),
    lesson(S_DL5, COURSE_DL_ID, "Serving Models with FastAPI",                 2, 28),
    lesson(S_DL5, COURSE_DL_ID, "Optimizing Models with TorchScript & ONNX",  3, 25),
    lesson(S_DL5, COURSE_DL_ID, "Deploying to Render & Docker",               4, 20),

    # ── CV: Section 1 — OpenCV Basics ─────────────────────
    lesson(S_CV1, COURSE_CV_ID, "OpenCV Setup & Reading Images",               1, 12, True),
    lesson(S_CV1, COURSE_CV_ID, "Color Spaces, Thresholding & Histograms",     2, 20, True),
    lesson(S_CV1, COURSE_CV_ID, "Morphological Operations",                    3, 18),
    lesson(S_CV1, COURSE_CV_ID, "Contours & Shape Detection",                  4, 22),
    lesson(S_CV1, COURSE_CV_ID, "Geometric Transformations & Affine Warp",     5, 20),

    # ── CV: Section 2 — Feature Detection ─────────────────
    lesson(S_CV2, COURSE_CV_ID, "Edge Detection — Canny & Sobel",              1, 18),
    lesson(S_CV2, COURSE_CV_ID, "Harris Corner & FAST Detector",               2, 20),
    lesson(S_CV2, COURSE_CV_ID, "SIFT, ORB & Feature Matching",               3, 25),
    lesson(S_CV2, COURSE_CV_ID, "Optical Flow & Motion Detection",             4, 22),

    # ── CV: Section 3 — Deep Learning for Vision ──────────
    lesson(S_CV3, COURSE_CV_ID, "Image Classification with CNN",               1, 28),
    lesson(S_CV3, COURSE_CV_ID, "Object Detection — YOLO v8",                  2, 35),
    lesson(S_CV3, COURSE_CV_ID, "Semantic Segmentation",                       3, 30),
    lesson(S_CV3, COURSE_CV_ID, "Face Detection & Recognition",                4, 32),

    # ── CV: Section 4 — Projects ──────────────────────────
    lesson(S_CV4, COURSE_CV_ID, "Project 1: Real-Time Object Counter",         1, 40),
    lesson(S_CV4, COURSE_CV_ID, "Project 2: Face Attendance System",           2, 45),
    lesson(S_CV4, COURSE_CV_ID, "Project 3: YOLO Vehicle Detection App",       3, 50),

    # ── NLP: Section 1 ────────────────────────────────────
    lesson(S_NL1, COURSE_NLP_ID, "Text Preprocessing Pipeline",               1, 20, True),
    lesson(S_NL1, COURSE_NLP_ID, "Tokenization, Stemming & Lemmatization",    2, 18, True),
    lesson(S_NL1, COURSE_NLP_ID, "Bag of Words & TF-IDF",                     3, 22),
    lesson(S_NL1, COURSE_NLP_ID, "Regular Expressions for NLP",               4, 16),

    # ── NLP: Section 2 ────────────────────────────────────
    lesson(S_NL2, COURSE_NLP_ID, "Word2Vec from Scratch",                      1, 30),
    lesson(S_NL2, COURSE_NLP_ID, "GloVe & FastText Embeddings",               2, 25),
    lesson(S_NL2, COURSE_NLP_ID, "Sentiment Analysis — Classical Approach",    3, 28),
    lesson(S_NL2, COURSE_NLP_ID, "Named Entity Recognition (NER)",            4, 25),

    # ── NLP: Section 3 — Transformers ─────────────────────
    lesson(S_NL3, COURSE_NLP_ID, "The Transformer Architecture for NLP",       1, 30),
    lesson(S_NL3, COURSE_NLP_ID, "BERT — Pre-training & Fine-tuning",         2, 35),
    lesson(S_NL3, COURSE_NLP_ID, "Text Classification with HuggingFace",       3, 30),
    lesson(S_NL3, COURSE_NLP_ID, "Question Answering with BERT",               4, 28),

    # ── NLP: Section 4 — Applications ─────────────────────
    lesson(S_NL4, COURSE_NLP_ID, "Building a Sentiment Classifier API",        1, 35),
    lesson(S_NL4, COURSE_NLP_ID, "Text Summarization with T5",                2, 28),
    lesson(S_NL4, COURSE_NLP_ID, "Building a Simple Chatbot",                  3, 40),
    lesson(S_NL4, COURSE_NLP_ID, "Capstone: Full NLP Pipeline",               4, 50),

    # ── AI Engineering: Section 1 ─────────────────────────
    lesson(S_AI1, COURSE_AI_ID, "OpenAI API — Chat, Completion & Embeddings",  1, 20, True),
    lesson(S_AI1, COURSE_AI_ID, "Prompt Engineering Masterclass",              2, 25, True),
    lesson(S_AI1, COURSE_AI_ID, "Function Calling & Structured Outputs",       3, 22),
    lesson(S_AI1, COURSE_AI_ID, "Managing API Costs & Rate Limits",            4, 15),

    # ── AI Engineering: Section 2 — LangChain ─────────────
    lesson(S_AI2, COURSE_AI_ID, "LangChain Chains & Prompts",                  1, 28),
    lesson(S_AI2, COURSE_AI_ID, "Document Loaders & Text Splitters",           2, 22),
    lesson(S_AI2, COURSE_AI_ID, "RAG — Retrieval Augmented Generation",        3, 35),
    lesson(S_AI2, COURSE_AI_ID, "Memory & Conversation Chains",               4, 25),
    lesson(S_AI2, COURSE_AI_ID, "LangChain Expression Language (LCEL)",        5, 20),

    # ── AI Engineering: Section 3 — Vector DBs ────────────
    lesson(S_AI3, COURSE_AI_ID, "What are Vector Databases?",                  1, 18),
    lesson(S_AI3, COURSE_AI_ID, "ChromaDB — Setup & CRUD",                    2, 22),
    lesson(S_AI3, COURSE_AI_ID, "Pinecone — Production Vector Store",          3, 25),
    lesson(S_AI3, COURSE_AI_ID, "Similarity Search & Hybrid Search",           4, 22),

    # ── AI Engineering: Section 4 — Agents ────────────────
    lesson(S_AI4, COURSE_AI_ID, "What are AI Agents?",                         1, 15),
    lesson(S_AI4, COURSE_AI_ID, "ReAct Pattern — Reason + Act",               2, 25),
    lesson(S_AI4, COURSE_AI_ID, "Building a Research Agent with LangChain",   3, 35),
    lesson(S_AI4, COURSE_AI_ID, "Tool Use & Custom Tools",                     4, 28),
    lesson(S_AI4, COURSE_AI_ID, "Multi-Agent Orchestration",                   5, 30),

    # ── AI Engineering: Section 5 — Deployment ────────────
    lesson(S_AI5, COURSE_AI_ID, "FastAPI Backend for AI Apps",                 1, 25),
    lesson(S_AI5, COURSE_AI_ID, "Containerizing with Docker",                  2, 20),
    lesson(S_AI5, COURSE_AI_ID, "Deploying to Railway & Render",              3, 18),
    lesson(S_AI5, COURSE_AI_ID, "Capstone: Full AI SaaS Application",          4, 60),
]

# ══════════════════════════════════════════════════════════════
# RESOURCES  (sample — 2-3 per course, tied to first section)
# ══════════════════════════════════════════════════════════════

# Find first lessons per course for resources
def first_lesson_of_section(section_id):
    return next((l["id"] for l in LESSONS if l["section_id"] == section_id), None)

RESOURCES = [
    # Python course
    {
        "id": uid(), "lesson_id": first_lesson_of_section(S_PY3),
        "title": "NumPy & Pandas Cheat Sheet",
        "file_url": "https://files.datasci.academy/resources/numpy-pandas-cheatsheet.pdf",
        "file_type": "pdf", "file_size_kb": 420,
    },
    {
        "id": uid(), "lesson_id": first_lesson_of_section(S_PY3),
        "title": "EDA Starter Notebook",
        "file_url": "https://files.datasci.academy/resources/eda-starter.ipynb",
        "file_type": "notebook", "file_size_kb": 85,
    },
    {
        "id": uid(), "lesson_id": first_lesson_of_section(S_PY3),
        "title": "Sample Sales Dataset",
        "file_url": "https://files.datasci.academy/resources/sales-data.csv",
        "file_type": "dataset", "file_size_kb": 1240,
    },
    # ML course
    {
        "id": uid(), "lesson_id": first_lesson_of_section(S_ML2),
        "title": "ML Algorithms Cheat Sheet",
        "file_url": "https://files.datasci.academy/resources/ml-algorithms-cheatsheet.pdf",
        "file_type": "pdf", "file_size_kb": 580,
    },
    {
        "id": uid(), "lesson_id": first_lesson_of_section(S_ML2),
        "title": "Scikit-Learn Pipeline Notebook",
        "file_url": "https://files.datasci.academy/resources/sklearn-pipeline.ipynb",
        "file_type": "notebook", "file_size_kb": 112,
    },
    {
        "id": uid(), "lesson_id": first_lesson_of_section(S_ML2),
        "title": "House Prices Dataset",
        "file_url": "https://files.datasci.academy/resources/house-prices.csv",
        "file_type": "dataset", "file_size_kb": 2100,
    },
    # Deep Learning course
    {
        "id": uid(), "lesson_id": first_lesson_of_section(S_DL1),
        "title": "PyTorch Quick Reference",
        "file_url": "https://files.datasci.academy/resources/pytorch-reference.pdf",
        "file_type": "pdf", "file_size_kb": 350,
    },
    {
        "id": uid(), "lesson_id": first_lesson_of_section(S_DL2),
        "title": "CNN Architecture Notebook",
        "file_url": "https://files.datasci.academy/resources/cnn-cifar10.ipynb",
        "file_type": "notebook", "file_size_kb": 145,
    },
    # CV course
    {
        "id": uid(), "lesson_id": first_lesson_of_section(S_CV1),
        "title": "OpenCV Cheat Sheet",
        "file_url": "https://files.datasci.academy/resources/opencv-cheatsheet.pdf",
        "file_type": "pdf", "file_size_kb": 280,
    },
    {
        "id": uid(), "lesson_id": first_lesson_of_section(S_CV3),
        "title": "YOLO Detection Notebook",
        "file_url": "https://files.datasci.academy/resources/yolo-detection.ipynb",
        "file_type": "notebook", "file_size_kb": 190,
    },
    # AI Engineering course
    {
        "id": uid(), "lesson_id": first_lesson_of_section(S_AI1),
        "title": "Prompt Engineering Guide PDF",
        "file_url": "https://files.datasci.academy/resources/prompt-engineering.pdf",
        "file_type": "pdf", "file_size_kb": 620,
    },
    {
        "id": uid(), "lesson_id": first_lesson_of_section(S_AI2),
        "title": "RAG Pipeline Starter Notebook",
        "file_url": "https://files.datasci.academy/resources/rag-pipeline.ipynb",
        "file_type": "notebook", "file_size_kb": 210,
    },
]

# ══════════════════════════════════════════════════════════════
# PAYMENTS
# ══════════════════════════════════════════════════════════════

PAY_SARAH_SUB   = uid()
PAY_JAMES_PY    = uid()
PAY_JAMES_ML    = uid()
PAY_AISHA_SUB   = uid()
PAY_CARLOS_DL   = uid()

PAYMENTS = [
    # Sarah — 12-month subscription
    {
        "id": PAY_SARAH_SUB,
        "user_id": SARAH_ID,
        "payment_type": "subscription",
        "course_id": None,
        "subscription_id": None,         # linked after subscription insert
        "amount": Decimal("149.99"),
        "currency": "USD",
        "status": "succeeded",
        "stripe_payment_id": "pi_sarah_sub_001",
        "stripe_session_id": "cs_sarah_sub_001",
        "created_at": ago(days=85),
    },
    # James — individual Python course
    {
        "id": PAY_JAMES_PY,
        "user_id": JAMES_ID,
        "payment_type": "course_purchase",
        "course_id": COURSE_PYTHON_ID,
        "subscription_id": None,
        "amount": Decimal("49.99"),
        "currency": "USD",
        "status": "succeeded",
        "stripe_payment_id": "pi_james_py_001",
        "stripe_session_id": "cs_james_py_001",
        "created_at": ago(days=55),
    },
    # James — individual ML course
    {
        "id": PAY_JAMES_ML,
        "user_id": JAMES_ID,
        "payment_type": "course_purchase",
        "course_id": COURSE_ML_ID,
        "subscription_id": None,
        "amount": Decimal("69.99"),
        "currency": "USD",
        "status": "succeeded",
        "stripe_payment_id": "pi_james_ml_001",
        "stripe_session_id": "cs_james_ml_001",
        "created_at": ago(days=40),
    },
    # Aisha — 3-month subscription
    {
        "id": PAY_AISHA_SUB,
        "user_id": AISHA_ID,
        "payment_type": "subscription",
        "course_id": None,
        "subscription_id": None,
        "amount": Decimal("49.99"),
        "currency": "USD",
        "status": "succeeded",
        "stripe_payment_id": "pi_aisha_sub_001",
        "stripe_session_id": "cs_aisha_sub_001",
        "created_at": ago(days=40),
    },
    # Carlos — Deep Learning course
    {
        "id": PAY_CARLOS_DL,
        "user_id": CARLOS_ID,
        "payment_type": "course_purchase",
        "course_id": COURSE_DL_ID,
        "subscription_id": None,
        "amount": Decimal("89.99"),
        "currency": "USD",
        "status": "succeeded",
        "stripe_payment_id": "pi_carlos_dl_001",
        "stripe_session_id": "cs_carlos_dl_001",
        "created_at": ago(days=18),
    },
]

# ══════════════════════════════════════════════════════════════
# SUBSCRIPTIONS
# ══════════════════════════════════════════════════════════════

SUB_SARAH_ID = uid()
SUB_AISHA_ID = uid()

SUBSCRIPTIONS = [
    {
        "id": SUB_SARAH_ID,
        "user_id": SARAH_ID,
        "plan": "12_months",
        "status": "active",
        "stripe_sub_id": "sub_sarah_12m_001",
        "starts_at": ago(days=85),
        "expires_at": future(days=280),   # ~12 months from start
        "created_at": ago(days=85),
    },
    {
        "id": SUB_AISHA_ID,
        "user_id": AISHA_ID,
        "plan": "3_months",
        "status": "active",
        "stripe_sub_id": "sub_aisha_3m_001",
        "starts_at": ago(days=40),
        "expires_at": future(days=50),    # ~3 months from start
        "created_at": ago(days=40),
    },
]

# Link subscription IDs back into payments
PAYMENTS[0]["subscription_id"] = SUB_SARAH_ID
PAYMENTS[3]["subscription_id"] = SUB_AISHA_ID

# ══════════════════════════════════════════════════════════════
# ENROLLMENTS
# ══════════════════════════════════════════════════════════════

ENROLLMENTS = [
    # Sarah (12-month sub) — enrolled in all 6 courses via subscription
    *[
        {
            "id": uid(),
            "user_id": SARAH_ID,
            "course_id": cid,
            "enrollment_type": "subscription",
            "payment_id": PAY_SARAH_SUB,
            "enrolled_at": ago(days=85),
        }
        for cid in [
            COURSE_PYTHON_ID, COURSE_ML_ID, COURSE_DL_ID,
            COURSE_CV_ID, COURSE_NLP_ID, COURSE_AI_ID
        ]
    ],
    # James — purchased Python + ML individually
    {
        "id": uid(),
        "user_id": JAMES_ID,
        "course_id": COURSE_PYTHON_ID,
        "enrollment_type": "purchase",
        "payment_id": PAY_JAMES_PY,
        "enrolled_at": ago(days=55),
    },
    {
        "id": uid(),
        "user_id": JAMES_ID,
        "course_id": COURSE_ML_ID,
        "enrollment_type": "purchase",
        "payment_id": PAY_JAMES_ML,
        "enrolled_at": ago(days=40),
    },
    # Aisha (3-month sub) — enrolled in all 6 courses via subscription
    *[
        {
            "id": uid(),
            "user_id": AISHA_ID,
            "course_id": cid,
            "enrollment_type": "subscription",
            "payment_id": PAY_AISHA_SUB,
            "enrolled_at": ago(days=40),
        }
        for cid in [
            COURSE_PYTHON_ID, COURSE_ML_ID, COURSE_DL_ID,
            COURSE_CV_ID, COURSE_NLP_ID, COURSE_AI_ID
        ]
    ],
    # Carlos — purchased Deep Learning
    {
        "id": uid(),
        "user_id": CARLOS_ID,
        "course_id": COURSE_DL_ID,
        "enrollment_type": "purchase",
        "payment_id": PAY_CARLOS_DL,
        "enrolled_at": ago(days=18),
    },
]

# ══════════════════════════════════════════════════════════════
# PROGRESS  (realistic — students at different stages)
# ══════════════════════════════════════════════════════════════

# Helper: mark lessons complete for a user in a section
def make_progress(user_id, lessons_ids, completed_count):
    records = []
    for i, lesson_id in enumerate(lessons_ids):
        lesson = next((l for l in LESSONS if l["id"] == lesson_id), None)
        if lesson is None:
            continue
        is_done = i < completed_count
        records.append({
            "id": uid(),
            "user_id": user_id,
            "lesson_id": lesson_id,
            "course_id": lesson["course_id"],
            "is_completed": is_done,
            "watch_position": lesson["video_duration"] if is_done else (lesson["video_duration"] // 3),
            "completed_at": ago(days=max(1, 80 - i * 3)) if is_done else None,
        })
    return records

# Get lessons per section
def lessons_in_section(section_id):
    return [l["id"] for l in LESSONS if l["section_id"] == section_id]

PROGRESS = [
    # Sarah — completed Python course fully, 60% through ML
    *make_progress(SARAH_ID, lessons_in_section(S_PY1), 6),   # 100%
    *make_progress(SARAH_ID, lessons_in_section(S_PY2), 7),   # 100%
    *make_progress(SARAH_ID, lessons_in_section(S_PY3), 6),   # 100%
    *make_progress(SARAH_ID, lessons_in_section(S_PY4), 5),   # 100%
    *make_progress(SARAH_ID, lessons_in_section(S_ML1), 5),   # 100%
    *make_progress(SARAH_ID, lessons_in_section(S_ML2), 4),   # ~60%
    *make_progress(SARAH_ID, lessons_in_section(S_ML3), 0),   # not started
    *make_progress(SARAH_ID, lessons_in_section(S_ML4), 0),   # not started

    # James — completed Python fully, 30% through ML
    *make_progress(JAMES_ID, lessons_in_section(S_PY1), 6),   # 100%
    *make_progress(JAMES_ID, lessons_in_section(S_PY2), 7),   # 100%
    *make_progress(JAMES_ID, lessons_in_section(S_PY3), 6),   # 100%
    *make_progress(JAMES_ID, lessons_in_section(S_PY4), 5),   # 100%
    *make_progress(JAMES_ID, lessons_in_section(S_ML1), 2),   # ~40%
    *make_progress(JAMES_ID, lessons_in_section(S_ML2), 0),   # not started

    # Aisha — in progress on Python (section 2)
    *make_progress(AISHA_ID, lessons_in_section(S_PY1), 6),   # 100%
    *make_progress(AISHA_ID, lessons_in_section(S_PY2), 3),   # ~43%

    # Carlos — just started Deep Learning (section 1, 2 lessons)
    *make_progress(CARLOS_ID, lessons_in_section(S_DL1), 2),  # 33%
]

# ══════════════════════════════════════════════════════════════
# SUMMARY PRINT
# ══════════════════════════════════════════════════════════════

if __name__ == "__main__":
    print("=" * 55)
    print("  DataSci Academy — Seed Data Summary")
    print("=" * 55)
    print(f"  Users          : {len(USERS)}  (1 admin + {len(USERS)-1} students)")
    print(f"  Courses        : {len(COURSES)}")
    print(f"  Sections       : {len(SECTIONS)}")
    print(f"  Lessons        : {len(LESSONS)}")
    print(f"  Resources      : {len(RESOURCES)}")
    print(f"  Payments       : {len(PAYMENTS)}")
    print(f"  Subscriptions  : {len(SUBSCRIPTIONS)}")
    print(f"  Enrollments    : {len(ENROLLMENTS)}")
    print(f"  Progress rows  : {len(PROGRESS)}")
    print("=" * 55)
    print()
    print("  Courses:")
    for c in COURSES:
        print(f"    [{c['level'][:3].upper()}] {c['title'][:48]}  ${c['price']}")
    print()
    print("  Students:")
    for u in USERS[1:]:
        print(f"    {u['full_name']:<20} {u['email']}")
    print()
    print("  Credentials (all students): password = Student@1234")
    print("  Admin:                      password = Admin@1234")
    print()
    print("  ⚠  Passwords shown in plain text here.")
    print("     The seed runner must hash them with bcrypt before INSERT.")
