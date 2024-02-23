# Courses-API
Introduction:

This document describes the processing of development for a Courses API, which provides information about the courses offered in two different programs: Bachelor of Science in Information Systems (BSIS) and Bachelor of Science in Information Technology (BSIT). The API returns data in JSON format, allowing easy integration with other applications. MongoDB is also used to help with the data in the project. 

Getting Started:
The code for the API is not provided in this documentation. However, the following information should be helpful for understanding how it works and how it was developed:

The API is written in the web development framework Node.js (using Express).
The API exposes endpoints that allow users to retrieve information about courses based on various criteria, such as program, year, or course code.

How it Works:
Client makes a request: The client application sends a request to a specific endpoint of the API.
API processes request: The API server receives the request and parses it to understand what information is being requested.
Retrieves data: The API retrieves the relevant data from its storage system, based on the request parameters.
Formats and sends response: The API formats the retrieved data in JSON format and sends it back to the client.

Data Structure:
The provided sample data shows a nested dictionary structure. Each program (BSIS and BSIT) has its own key, and within each program, there are keys for each year. Each year has a list of course objects, which contain information like code, description, units, and tags.

Necessary Changes in the future:
Error handling: The API should implement proper error handling to gracefully handle invalid requests or unexpected situations.
Authentication: If the API is intended for use by external users, it should implement authentication mechanisms to control access and prevent unauthorized modifications.

Challenges encountered:
The time spent to learn the overall structure and how it is developed is still vague that is why almost everything after the installation and especially in the validation and retrieval was a hard. However, a bit more patience and practice would be best.

