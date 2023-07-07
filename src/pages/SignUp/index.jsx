import Layout from '../../components/Layout'

function SignUp () {
    return (
        <Layout>
             <h1 className='font-medium text-xl mt-5'>Create your account</h1>
        <form className='flex flex-col' action="index.html" method="post"/>

        <label for="name"></label>
          <input className='bg-white py-3 pl-2 w-80 border border-black rounded-lg mt-3 mb-3' type="text" id="name" placeholder="Name" />

          <label for="email"></label>
          <input className='bg-white py-3 pl-2 w-80 border border-black rounded-lg mt-3 mb-3' type="text" id="email" placeholder="Email" />

          <label for="password"></label>
          <input className='bg-white py-3 pl-2 w-80 border border-black rounded-lg mt-3 mb-3' type="password" id="password" placeholder="Password" />

          <label for="password"></label>
          <input className='bg-white py-3 pl-2 w-80 border border-black rounded-lg mt-3 mb-3' type="text" id="password" placeholder="Repeat password" />

          <button type="submit" name="Submit" className='bg-black text-white w-80 rounded-lg m-0 mt-4 py-3 border border-black'>Submit</button>

        </Layout>
    )  
}
export default SignUp