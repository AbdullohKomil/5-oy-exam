import React from 'react';

export const SignUp = () => {
  return (
    <div>
      <div className='container flex mx-auto font-sans'>
        <div className=' bg-LogIn flex justify-center items-center h-screen w-2/4'>
          <img
            src={LoginIcon}
            alt=''
          />
        </div>
        <div className='flex justify-center items-center h-screen w-2/4'>
          <Formik
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            initialValues={initialValues}
            className='block w-2/4'
          >
            <Form>
              <h2 className='font-extrabold text-4xl'>Sign in</h2>
              <span className='mt-2'>Do not you have an account? </span>
              <NavLink
                className='text-blue-600'
                to='/register'
              >
                Sign up
              </NavLink>
              <Field
                name='email'
                type='email'
                className='focus:outline-none block border-2 border-solid pr-40 mt-10 pl-10 py-4 border-slate-200 rounded-lg'
                placeholder='Email'
              />
              <span className='text-red-600'>
                <ErrorMessage name='email' />
              </span>
              <Field
                name='password'
                type='password'
                className='focus:outline-none block border-2 border-solid pr-40 mt-5 pl-10 py-4 border-slate-200 rounded-lg'
                placeholder='Password'
              />
              <span className='text-red-600'>
                <ErrorMessage name='password' />
              </span>
              <button
                type='submit'
                className='px-36 block mx-auto bg-slate-900 text-white py-2 rounded-3xl mt-10'
              >
                Next step
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
