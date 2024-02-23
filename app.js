import express from 'express';
import { json } from 'body-parser';
import { connect, Schema, model } from 'mongoose';

const app = express();
app.use(json());

//Connect to MongoDB
connect('mongodb://localhost/mongo-test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error(err));

//Define the course schema and model
const courseSchema = new Schema({
    year: Object,
    '1st Year': [
        {
            code: String,
            description: String,
            units: Number,
            tags: [String],
        },
    ],
    '2nd Year': [
        {
            code: String,
            description: String,
            units: Number,
            tags: [String],
        },
    ],
    '3rd Year': [
        {
            code: String,
            description: String,
            units: Number,
            tags: [String],
        },
    ],
    '4th Year': [
        {
            code: String,
            description: String,
            units: Number,
            tags: [String],
        },
    ],
});
const Course = model('Course', courseSchema);

// Seed the data
const data = [
  {
    "1st Year": [
      {
        "code": "BSIS101",
        "description": "Introduction to Information Systems",
        "units": 3,
        "tags": ["BSIS101", "BSIS", "Information Systems", "Introduction"]
      },
      {
        "code": "BSIS102",
        "description": "Fundamentals of Programming",
        "units": 3,
        "tags": ["BSIS102", "BSIS", "Programming", "Fundamentals"]
      },
      {
        "code": "BSIS103",
        "description": "Database Management Systems",
        "units": 3,
        "tags": ["BSIS103", "BSIS", "Database", "Management", "Systems"]
      }
    ],
    "2nd Year": [
      {
        "code": "BSIS201",
        "description": "Systems Analysis and Design",
        "units": 3,
        "tags": ["BSIS201", "BSIS", "Systems", "Analysis", "Design"]
      },
      {
        "code": "BSIS202",
        "description": "Object-Oriented Programming",
        "units": 3,
        "tags": ["BSIS202", "BSIS", "Object-Oriented", "Programming"]
      },
      {
        "code": "BSIS203",
        "description": "Data Structures and Algorithms",
        "units": 3,
        "tags": ["BSIS203", "BSIS", "Data", "Structures", "Algorithms"]
      }
    ],
    "3rd Year": [
      {
        "code": "BSIS301",
        "description": "Web Development",
        "units": 3,
        "tags": ["BSIS301", "BSIS", "Web", "Development"]
      },
      {
        "code": "BSIS302",
        "description": "Software Engineering",
        "units": 3,
        "tags": ["BSIS302", "BSIS", "Software", "Engineering"]
      },
      {
        "code": "BSIS303",
        "description": "Information Security",
        "units": 3,
        "tags": ["BSIS303", "BSIS", "Information", "Security"]
      }
    ],
    "4th Year": [
      {
        "code": "BSIS401",
        "description": "Enterprise Systems",
        "units": 3,
        "tags": ["BSIS401", "BSIS", "Enterprise", "Systems"]
      },
      {
        "code": "BSIS402",
        "description": "Project Management",
        "units": 3,
        "tags": ["BSIS402", "BSIS", "Project", "Management"]
      },
      {
        "code": "BSIS403",
        "description": "Internship/Thesis",
        "units": 6,
        "tags": ["BSIS403", "BSIS", "Internship", "Thesis"]
      }
    ]
  },
  {
    "1st Year": [
      {
        "code": "BSIT101",
        "description": "Introduction to Information Technology",
        "units": 3,
        "tags": ["BSIT101", "BSIT", "Information Technology", "Introduction"]
      },
      {
        "code": "BSIT102",
        "description": "Programming Fundamentals",
        "units": 3,
        "tags": ["BSIT102", "BSIT", "Programming", "Fundamentals"]
      },
      {
        "code": "BSIT103",
        "description": "Computer Organization and Architecture",
        "units": 3,
        "tags": ["BSIT103", "BSIT", "Computer", "Organization", "Architecture"]
      }
    ],
    "2nd Year": [
      {
        "code": "BSIT201",
        "description": "Database Management",
        "units": 3,
        "tags": ["BSIT201", "BSIT", "Database", "Management"]
      },
      {
        "code": "BSIT202",
        "description": "Web Technologies",
        "units": 3,
        "tags": ["BSIT202", "BSIT", "Web", "Technologies"]
      },
      {
        "code": "BSIT203",
        "description": "Operating Systems",
        "units": 3,
        "tags": ["BSIT203", "BSIT", "Operating", "Systems"]
      }
    ],
    "3rd Year": [
      {
        "code": "BSIT301",
        "description": "Networking",
        "units": 3,
        "tags": []
      },
      {
        "code": "BSIT302",
        "description": "Software Engineering",
        "units": 3,
        "tags": []
      },
      {
        "code": "BSIT303",
        "description": "Information Security",
        "units": 3,
        "tags": []
      }
    ],
    "4th Year": [
      {
        "code": "BSIT401",
        "description": "Project Management",
        "units": 3,
        "tags": []
      },
      {
        "code": "BSIT402",
        "description": "Mobile Application Development",
        "units": 3,
        "tags": []
      },
      {
        "code": "BSIT403",
        "description": "Internship/Thesis",
        "units": 6,
        "tags": []
      }
    ]
  }
];

Course.insertMany(data)
    .then(() => console.log('Data imported'))
    .catch((err) => console.error(err));

//API Endpoint IS
app.get('/api/courses', async (req, res) => {
    //Retrieve all published backend courses and sort them alphabetically by their names
    const coursesIS = await Course.find({
        '1st Year.tags': 'BSIS',
        '2nd Year.tags': 'BSIS',
        '3rd Year.tags': 'BSIS',
        '4th Year.tags': 'BSIS',
    }).select('1st Year.code 1st Year.description 2nd Year.code 2nd Year.description 3rd Year.code 3rd Year.description 4th Year.code 4th Year.description').sort('1st Year.code');

    //Select and extract the name and specialization of each course
    const resultIS = coursesIS.map((course) => {
        const bsisCourses = [
            ...course['1st Year'].filter((c) => c.tags.includes('BSIS')),
            ...course['2nd Year'].filter((c) => c.tags.includes('BSIS')),
            ...course['3rd Year'].filter((c) => c.tags.includes('BSIS')),
            ...course['4th Year'].filter((c) => c.tags.includes('BSIS')),
        ].map((c) => ({ name: c.code, specialization: 'BSIS'}));

        return bsisCourses;
    });

    res.json(resultIS);
});

//API Endpoint IT
app.get('/api/courses', async (req, res) => {
  //Retrieve all published backend courses and sort them alphabetically by their names
  const coursesIT = await Course.find({
      '1st Year.tags': 'BSIT',
      '2nd Year.tags': 'BSIT',
      '3rd Year.tags': 'BSIT',
      '4th Year.tags': 'BSIT',
  }).select('1st Year.code 1st Year.description 2nd Year.code 2nd Year.description 3rd Year.code 3rd Year.description 4th Year.code 4th Year.description').sort('1st Year.code');

  //Select and extract the name and specialization of each course
  const resultIT = coursesIT.map((course) => {
      const bsiTCourses = [
          ...course['1st Year'].filter((c) => c.tags.includes('BSIT')),
          ...course['2nd Year'].filter((c) => c.tags.includes('BSIT')),
          ...course['3rd Year'].filter((c) => c.tags.includes('BSIT')),
          ...course['4th Year'].filter((c) => c.tags.includes('BSIT')),
      ].map((c) => ({ name: c.code, specialization: 'BSIT'}));

      return bsiTCourses;
  });

  res.json(resultIT);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});