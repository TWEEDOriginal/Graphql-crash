import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Course {
    id: ID
    course_name: String
    category: String
    price: Int
    language: String
    email: String
    stack: Stack
    teachingAssistants: [TeachingAssistant]
  }

  type TeachingAssistant {
    first_name: String
    last_name: String
    experience: Int  
  }

  enum Stack {
    WEB
    MOBILE
    OTHER
  }
  
  type Query {
      getCourse(id: ID): Course
  }

  input CourseInput {
    id: ID
    course_name: String!
    category: String
    price: Int!
    language: String
    email: String
    stack: Stack
    teachingAssistants: [TeachingAssistantInput]!
  }

  input TeachingAssistantInput {
    first_name: String
    last_name: String
    experience: Int  
  }
  type Mutation {
      createCourse(input :CourseInput):Course
      updateCourse(id: ID!, input: CourseInput): Course
  }
`);

export default schema