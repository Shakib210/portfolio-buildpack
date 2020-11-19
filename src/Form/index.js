import React, { useState,useEffect } from 'react'
import {Form, FormGroup, FormControl,FormFile, Row,Col,Button} from 'react-bootstrap'
import firebase from '../firebase';
const db=firebase.firestore()
const Index=()=> {
  
    const [title, setTitle]=useState(null);
    const [description, setdescription] = useState(null)
    const [gitLink, setgitLink] = useState(null)
    const [webLink, setwebLink] = useState(null)
    const [pic, setPic] = useState(null)
    const [projects, setprojects] = useState([])

    const fileChange=async (e)=>{
            const file=e.target.files[0]
            const storageRef=firebase.storage().ref()
            const fileRef= storageRef.child(file.name)
            await fileRef.put(file)
            setPic(await fileRef.getDownloadURL([]))
            

    }

    const dataSubmit=(e)=>{
      e.preventDefault()
      if(!title && !description && !gitLink && !webLink && !pic){
        return
      }
      db.collection("projects").add({
        title,description,gitLink,webLink,pic
      }).then(()=>{
        alert("Data stored")
      })
    }

    useEffect(()=>{
         const fetchProjects= async()=>{
           const projectCollection=await db.collection('projects').get()
           setprojects(projectCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })));
         }
         fetchProjects()
         
    },[])

    return (
        <div className='container my-5'>
          <Form onSubmit={dataSubmit}>
          <FormGroup>
      <FormControl name="title"  type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <br />
     <FormControl  name="description" as="textarea" rows={3} placeholder="Description" value={description} onChange={(e)=>setdescription(e.target.value)} />
  <br />
     <FormControl name="gLink"  type="text" placeholder="Git Link" value={gitLink} onChange={(e)=>setgitLink(e.target.value)}/> <br/>
     <FormControl name="wLink"  type="text" placeholder="Website Link" value={webLink} onChange={(e)=>setwebLink(e.target.value)}/> <br/>
     <FormFile id="exampleFormControlFile1" onChange={fileChange}/>
</FormGroup>

<Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Submit</Button>
    </Col>
  </Form.Group>
          </Form>
          <div>
              <ul>
                
              {projects.map((project) => {
                return(
        <li key={project.title}>
             <img width="100" height="100" src={project.pic} alt={project.title} /> <br/>
             <p>
               {project.title}
             </p>
        </li>
                )
})}
              </ul>
          
              </div>
        </div>
    )
}

export default Index
