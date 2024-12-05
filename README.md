Pothole Detection System
Project Overview
The Pothole Detection System is an AI-powered application designed to identify potholes in road images and calculate their areas. This project utilizes YOLOv8 (You Only Look Once) for object detection, PyTorch for deep learning, and a web-based interface built with Flask. Additionally, the system predicts maintenance costs based on the detected pothole areas, using a Bill of Materials (BOM) reference from the Public Works Department (PWD).

Features
Pothole Detection: Detects potholes in uploaded images using a trained YOLOv8 model.
Area Calculation: Calculates the area of potholes based on polygonal boundaries.
Cost Prediction: Estimates maintenance costs using predefined BOM rates.
Web Interface: Provides a user-friendly front end to upload images and view results.
Data Integration: Allows geographic data handling with GeoPandas and Shapely.
Robust Deployment: Production-ready with Gunicorn and Flask.
How It Works

Model Training:
A YOLOv8 model is trained on the RDD2022 dataset using annotated images of potholes.
The dataset is preprocessed and split into training and validation sets.
Image Upload:

Users upload images via the web interface.
The system processes the image using OpenCV and Pillow.
Pothole Detection:

The YOLOv8 model detects potholes and outputs bounding boxes or polygons.
Detected regions are highlighted on the image.
Area and Cost Calculation:

Using Shapely and GeoPandas, the system calculates the area of detected potholes.
Maintenance costs are estimated using the BOM provided by the PWD.
Results Display:

The processed image, pothole area, and estimated cost are displayed on the web interface.
Users can download the results or save them for further analysis.



Project Structure

Pothole-Detection/
│
├── app.py                # Main Flask application
├── static/               # Static assets (CSS, JS, images)
│   ├── css/
│   ├── js/
│   └── uploads/          # Uploaded images folder
├── templates/            # HTML templates for the web app
│   ├── index.html        # Homepage
│   └── result.html       # Results page
├── models/               # Trained YOLOv8 model files
│   └── best.pt           # YOLOv8 trained model
├── requirements.txt      # Dependencies for the project
├── utils/                # Utility functions for detection and processing
│   ├── detection.py      # YOLO inference logic
│   ├── area_calc.py      # Pothole area calculation functions
│   └── cost_estimate.py  # Maintenance cost estimation
└── README.md             # Documentation


Setup and Installation
1. Prerequisites
Python 3.12 or later
pip (Python package manager)
A modern browser (e.g., Chrome, Firefox)
2. Clone the Repository
3. Install Dependencies
Install all required Python libraries using:


pip install -r requirements.txt
4. Download the YOLOv8 Model
Place your trained YOLOv8 model file (best.pt) in the models/ directory.
5. Run the Application
Start the Flask application:

b
python app.py
The application will be available at http://127.0.0.1:5000.

Usage Instructions
Open the web interface in your browser.
Upload an image of a road with potential potholes.
Click on the "Detect" button to process the image.
View the detection results, pothole areas, and maintenance cost.
Download the processed image or save the report.
How to Train the YOLOv8 Model
Prepare the dataset:
Use the RDD2022 dataset converted to YOLO format.
Ensure correct folder structure (images/, labels/).

Train the model on Google Colab or locally:
from ultralytics import YOLO
model = YOLO('yolov8n.pt')  # Load YOLOv8 model
model.train(data='data.yaml', epochs=50, imgsz=640)
Export the trained model and place it in the models/ folder.

Technologies Used
Flask: Backend framework for web application.
YOLOv8: Object detection model for pothole identification.
PyTorch: Deep learning framework.
OpenCV & Pillow: Image preprocessing and visualization.
GeoPandas & Shapely: Geographic and polygonal data handling.
Gunicorn: WSGI server for deployment.

Deployment
Local Deployment: Run the application using Flask:
flask run
Production Deployment: Use Gunicorn to deploy:
gunicorn -w 4 -b 0.0.0.0:8000 app:app

Testing
Unit tests are included for core modules (detection, area calculation, cost estimation).
Run tests using:
pytest tests/
Future Enhancements
Add real-time video feed detection.
Integrate with a GIS-based road management system.
Use drone-captured images for large-scale road inspections.
