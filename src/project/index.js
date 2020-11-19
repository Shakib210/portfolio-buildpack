import React,{useState, useEffect} from 'react'
import firebase from '../firebase'
import { Row,Col,Card, Button} from 'react-bootstrap'
import '../App.css'
const db=firebase.firestore();


const Project=(props)=> {
    const [projects, setprojects] = useState([])
    

    useEffect(() => {
        const fetchUsers = async () => {
          const usersCollection = await db.collection("projects").get();
          setprojects(
            usersCollection.docs.map((doc) => {
              return doc.data();
            })
          );
        };
        fetchUsers();
      }, []);

      

    return (
        <div ref={props.refe} className="container my-5">
            <h3 style={{textAlign:"center"}}><strong>Projects</strong></h3>
           <Row className="my-5">
              
           {projects.map((project) => {
               return(
                 <Col  className="mr-3">
                 <Card style={{ width: '20rem' }} className="mb-4" >
                   <Card.Img variant="top" src={project.pic} />
                <Card.Body>
                   <Card.Title>{project.title}</Card.Title>
                   <Card.Text>
                     {project.description}
                   </Card.Text>
                </Card.Body>
                <Card.Body >
                    
                    <Button  href={project.webLink}>Website </Button>
                    <Button className="ml-3" href={project.gitLink}>Github</Button>

                </Card.Body>
                </Card>
                 </Col> 
               )
           })}
           </Row>     
       
        </div>
    )
}

export default Project;


