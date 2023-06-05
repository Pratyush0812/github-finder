function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. 
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Inspired From:
        <a className='text-white ml-1' href='https://www.udemy.com/course/react-front-to-back-2022/' target = '_blank' rel = 'noreferrer' >
          React Front to Back
        </a>
      </p>
    </>
  )
}

export default About