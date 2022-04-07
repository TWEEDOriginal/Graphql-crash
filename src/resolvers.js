import {nanoid} from 'nanoid'

class Course {
   constructor(id, {
    course_name,
    category,
    price,
    language,
    email,
    stack,
    teachingAssistants
   })
   {
    this.id = id
    this.course_name= course_name
    this.category=category
    this.price=price
    this.language= language
    this.email= email
    this.stack = stack
    this.teachingAssistants = teachingAssistants
   } 
}

const course_holder = {}

const resolvers = {
    getCourse: ({id}) => {
        console.log(course_holder)
        return new Course(id, 
            course_holder[id])
    },
    createCourse: ({input})=> {
        const id = nanoid()
        course_holder[id]= input
        console.log(course_holder)
        return new Course(id, input)
    },
    updateCourse: (id, {input})=> {
        console.log(course_holder)
        if (!course_holder[id]) {
            throw new Error('no course exists with id ' + id);
          }
        course_holder[id]= input  
        return new Course(id, input)
    }
}
export default resolvers