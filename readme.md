# 🏋️ Fitness Nutrition Dashboard

A responsive web-based **Calorie Tracker & Macro Dashboard** that helps users monitor their daily nutritional intake, track calories, manage macronutrients, and stay aligned with their fitness goals.

---

## 📌 Project Overview

The Fitness Nutrition Dashboard is designed to simplify daily nutrition tracking by allowing users to:

* Log food items and portion sizes.
* Calculate calories, protein, carbohydrates, and fats in real-time.
* Monitor daily calorie budgets.
* Track macronutrient consumption through visual progress bars.
* Switch between different fitness goals without losing previously logged meals.
* Receive warnings when calorie limits are exceeded.

---

## 🚀 Features

### 🍽 Food Logging

* Add food items manually.
* Enter portion size in grams.
* Real-time nutritional calculation.

### 🤖 Mock AI Food Scanner

* Simulated image upload feature.
* Auto-fills predefined food values.
* Demonstrates future AI food recognition integration.

### 📊 Nutrition Dashboard

* Daily calorie budget progress bar.
* Protein progress bar.
* Carbohydrate progress bar.
* Fat progress bar.

### 🎯 Fitness Goals

Users can switch between:

| Goal        | Calories | Protein | Carbs | Fat |
| ----------- | -------- | ------- | ----- | --- |
| Weight Loss | 1800     | 120g    | 180g  | 60g |
| Maintenance | 2200     | 140g    | 250g  | 70g |
| Muscle Gain | 2800     | 180g    | 320g  | 90g |

Changing goals dynamically recalculates all percentages while preserving existing meal history.

### ⚠ Budget Monitoring

* Tracks total calorie consumption.
* Calculates remaining calories.
* Turns calorie bar red when budget is exceeded.
* Displays a warning modal.

### 🗑 Meal Management

* View meal history.
* Delete meals instantly.
* Automatic recalculation of all dashboard metrics.

---

## 🧠 Backend Logic

### Nutrient Scaling Algorithm

The application calculates nutrition values according to portion size.

Formula:

```text
Scaled Nutrient = (Weight / 100) × Base Nutrient
```

Example:

Chicken Breast (100g)

```text
Calories = 165
Protein = 31g
```

For 200g:

```text
Calories = 330
Protein = 62g
```

---

### Budget Tracking State

The application maintains:

* Active meal list
* Selected fitness goal
* Total calories
* Total protein
* Total carbohydrates
* Total fats
* Remaining calories
* Budget exceeded status

---

## 📂 Project Structure

```text
calorie-tracker/

│
├── index.html
├── style.css
│
└── js/
    ├── app.js
    ├── foodDatabase.js
    ├── nutritionEngine.js
    └── stateManager.js
```

---

## 📁 File Description

### index.html

Contains:

* Dashboard layout
* Goal selector
* Food logging form
* Meal history table
* Warning modal

### style.css

Contains:

* Responsive UI styling
* Dashboard design
* Progress bar styling
* Modal styling
* Animations

### foodDatabase.js

Stores predefined food nutritional data.

### nutritionEngine.js

Implements the nutrient scaling algorithm.

### stateManager.js

Handles:

* Application state
* Aggregate calculations
* Budget tracking
* Validation status

### app.js

Controls:

* User interactions
* Meal addition/deletion
* Goal switching
* Dashboard updates
* Modal management

---

## 🛠 Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

---

## 🔄 Application Workflow

```text
User Input
     │
     ▼
Food Logging
     │
     ▼
Nutrient Scaling Algorithm
     │
     ▼
Store Meal in State
     │
     ▼
Calculate Totals
     │
     ▼
Update Dashboard
     │
     ▼
Budget Validation
     │
     ▼
Progress Bar / Warning Modal
```

---

## ▶ How to Run

### Option 1: Direct Browser

1. Download or clone the repository.
2. Open `index.html` in your browser.

### Option 2: VS Code Live Server

1. Install Live Server extension.
2. Open project folder.
3. Right click `index.html`.
4. Click **Open with Live Server**.

---

## 📈 Future Enhancements

* Real AI food recognition using image processing.
* User authentication.
* Meal history persistence using local storage/database.
* Weekly and monthly nutrition analytics.
* Food search API integration.
* Dark/Light theme support.

---

## 👨‍💻 Author

**Yash Yadav**

MCA Graduate | AI & Data Science Enthusiast

Focused on:

* Artificial Intelligence
* Machine Learning
* Data Analytics
* Full Stack Development

---
