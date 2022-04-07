import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import resolvers from './resolvers';
import schema from './schema';

const root = resolvers

var app = express();
app.get('/', (req,res)=>{
    res.send('Now browse to localhost:4000/graphql')
})
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));