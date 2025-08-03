// function App() {
//     let [userName, setUserName] = useState("");
//     let [email, setEmail] = useState("");
//     let [password, setPassword] = useState("");

//     let allInputs = {
//         userName,
//         email,
//         password,
//         setUserName,
//         setEmail,
//         setPassword
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//         if (!userName || !email || !password) {
//             toast.error("Please fill all the fields");
//         }
//         else {
//             toast.success("Form submitted Successfully")
//         }
//     }

//     return (
//         <div className="App">
//             <h1>Form</h1>
//             <FormComponent handleSubmit={handleSubmit} allInputs={allInputs} />
//             <ToastContainer />
//         </div>
//     )

// }

// function FormComponent({ handleSubmit, allInputs }) {
//     return (
//         <Container >
//             <Form onSubmit={handleSubmit} className='border border-primary mt-5 w-50 m-auto'>
//                 <Form.Group className='text-start w-75 m-auto mt-5 mb-3'>
//                     <Form.Label>Name:</Form.Label>
//                     <Form.Control type='text' value={allInputs.userName} onChange={(e) => allInputs.setUserName(e.target.value)} />
//                 </Form.Group>
//                 <Form.Group className='text-start w-75 m-auto mb-3'>
//                     <Form.Label>Email:</Form.Label>
//                     <Form.Control type='email' value={allInputs.email} onChange={(e) => allInputs.setEmail(e.target.value)} />
//                 </Form.Group>
//                 <Form.Group className='text-start w-75 m-auto mb-3'>
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type='password' value={allInputs.password} onChange={(e) => allInputs.setPassword(e.target.value)} />
//                 </Form.Group>
//                 <Form.Group>
//                     <Button className='mb-5 mt-3' type='submit'>Submit</Button>
//                 </Form.Group>
//             </Form>
//         </Container>
//     )
// }