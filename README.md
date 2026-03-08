LeadFlow: Automated Scrape-to-Email System
An end-to-end lead generation engine designed to bridge the gap between manual prospecting and automated outreach. Born from research at DSU, LeadFlow streamlines the journey from raw data discovery to direct email engagement.
🚀 The Problem
Traditional lead generation is fragmented. Users often juggle multiple tools to find leads, verify data, and finally send emails. Based on our competitor analysis of platforms like Apollo.io, we identified a need for a more accessible, unified "Scrape-to-Email" workflow tailored for freelancers and small teams.
🛠 Tech Stack

* Frontend: React.js (Web) & React Native (Mobile)
* Backend: Node.js & Express.js
* Database: MongoDB
* Automation: Python (Selenium)
* Integration: Python scripts are executed as Node.js child processes for real-time scraping.

✨ Key Features

* Unified Workflow: Search, scrape, and contact leads within a single interface.
* Real-time Scraping: Leverages Selenium to fetch fresh data directly from the web.
* Cross-Platform: Seamless experience across Web and Mobile via React/React Native.
* Freelancer Focused: Simplified UI/UX designed for individual outreach needs.

⚙️ Installation

   1. Clone the repository:
   
   git clone https://github.com
   
   2. Install Backend Dependencies:
   
   cd backend && npm install
   
   3. Install Frontend Dependencies:
   
   cd frontend && npm install
   
   4. Python Setup:
   Ensure you have Python installed with Selenium:
   
   pip install selenium
   
   5. Environment Variables:
   Create a .env file in the backend directory with your MONGODB_URI and necessary API keys.

🏗 Project Architecture

   1. Request: User triggers a search via the React/Mobile UI.
   2. Process: Node.js receives the request and spawns a Python child process.
   3. Scrape: Selenium navigates and extracts lead data.
   4. Store/Send: Data is saved to MongoDB and prepared for the email outreach module.\

