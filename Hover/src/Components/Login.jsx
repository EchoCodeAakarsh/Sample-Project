import React from 'react'

const Login = () => {

  // Step 1 : Formik Initialization
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password:''
    },
  })
  return (
    <div style={{
      backgroundImage: `url(${'https://cdn.dribbble.com/userupload/11202976/file/original-425eb64168a6cd3868918b972c3359f4.jpg?resize=640x480&vertical=center'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      }}>
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="card w-25">
            <h2 className="mt-3 text-center txt">LOGIN</h2>
            <img
              className="logo d-flex mx-auto"
              src="http://cdn.onlinewebfonts.com/svg/img_458466.png"
              alt=""
            />
            {/* Step 2 : Handling When Submit */}
            <form onSubmit={loginForm.handle.Submit}>
              {/* Step 3 : Fields Handling */}
              <input
                className="mt-3 w-75 d-flex mx-auto p-2 rounded"
                type="email"
                placeholder="Enter your email"
              />
              <input
                className="mt-3 w-75 d-flex mx-auto p-1 rounded"
                type="password"
                placeholder="Enter your password"
              />
              <button className="mt-3 btn btn-primary d-flex mx-auto">Login</button>
            </form>
          </div>
        </div>

    </div>
  )
}

export default Login