# Graphql intro

> Introduction to graphql using node js and express.

## Examples:

- Create

```js
 mutation {
  createCourse(input: {
    course_name: "JS bootcamp"
    price: 500
    stack: WEB
    teachingAssistants: [{
      first_name: "brad"
      last_name: "traversy"
      experience: 30
    },
    {
      first_name: "Dennis"
      last_name: "Ivy"
      experience: 15
    }]
  }) {
    id,
    course_name
  }
}
```

- Update

```js
 mutation {
  updateCourse(id:"6aRSwZiEC7nudhVt9toCr", input: {
    course_name: "JS bootcamp"
    price: 500
    stack: WEB
    teachingAssistants: [{
      first_name: "brad"
      last_name: "traversy"
      experience: 30
    },
    {
      first_name: "Dennis"
      last_name: "Ivy"
      experience: 15
    }]
  }) {
    id,
    course_name
  }
}
```

- Query

```js
query getCourse($id: ID!){
  getCourse(id:$id){
    id
    course_name
    teachingAssistants{
      first_name
    }
  }
}
```