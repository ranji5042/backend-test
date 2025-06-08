#!/usr/bin/env node

const open = require('open');
const chalk = require('chalk');
const path = require('path');

// Terminal resume text using chalk formatting
const resumeText = `
${chalk.bold.cyan('RANJITH KUMAR P')}

${chalk.underline.bold('PROFILE')}
${chalk.white('A recent graduate with skills in Python, Java, C++, and web development.')}
${chalk.white('Experienced in agile methodologies, problem-solving, and delivering academic and internship projects.')}
${chalk.white('Eager to explore AI, Machine Learning, and Cloud Computing. Passionate about software development.')}

${chalk.underline.bold('PROJECTS')}

${chalk.green('1. Collaborative Venue Discovery and Midpoint Calculation')}
- Designed a location-based app to find the best meetup point for groups.
- Used ${chalk.yellow('K-Means Clustering')} algorithm for midpoint calculation based on user locations.

${chalk.green('2. SMS Application with OTP Verification')}
- Developed with ${chalk.yellow('Android Studio and Firebase')}.
- Used ${chalk.yellow('SHA-256 hashing')} for secure OTP verification and message handling.

${chalk.green('3. Bank Database Management System')}
- Created a banking system with ${chalk.yellow('HTML, CSS, JavaScript, PHP, MySQL')}.
- Supported transactions, withdrawals, deposits, and responsive UI design.

${chalk.green('4. 2D Golf Game')}
- Built with ${chalk.yellow('C++ and OpenGL')} to simulate golfing physics and ball trajectory.

${chalk.underline.bold('EDUCATION')}
- B.E. Computer Science, BNMIT, Bengaluru (2024) – 7.81 CGPA
- PUC, MES MPL Sastry PU College (2020) – 83.5%
- SSLC, Sri Aurobindo Vidya Mandir (2018) – 84.8%

${chalk.underline.bold('TOOLS & SKILLS')}
- Programming: C, C++, Python, Java
- Web: HTML, CSS, JavaScript, PHP, MySQL
- Android Development: Android Studio, Firebase
- Basics of AWS Cloud, Data Structures & Algorithms

${chalk.underline.bold('CERTIFICATIONS')}
- AWS Academy Cloud Foundations (Elitmus, 20 hours)

${chalk.underline.bold('INTERNSHIP')}
${chalk.yellow('Bharath Intern (Mar – Apr 2024)')}
- Developed Coffee Shop Website:
  - Frontend: HTML, CSS, JavaScript
  - Backend: PHP + MySQL
  - Dynamic page generation and user interaction logic

${chalk.underline.bold('SOFT SKILLS')}
Teamwork • Problem Solving • Active Listening • Attention to Detail • Communication

${chalk.underline.bold('LANGUAGES')}
English, Kannada, Tamil, Hindi

${chalk.underline.bold('CONTACT')}
📞 9353760584
📧 ranjithkumar5042@gmail.com
📍 Malleswaram, Bengaluru - 560021

${chalk.bgWhite.black('Opening PDF resume...')}
`;

// Display in terminal
console.log(resumeText);

// Open PDF file
const pdfPath = path.join(__dirname, 'Ranjith Kumar P.pdf');
open(pdfPath);
