import React from 'react'
import Rcard from './Rcard'

const Resources = () => {
    const Languages = [
        {
          title: "HTML",
          description: "HTML (HyperText Markup Language) is the standard language for creating web pages and structuring content on the web.",
          buttonName: "Learn HTML"
        },
        {
          title: "CSS",
          description: "CSS (Cascading Style Sheets) is used to style and layout web pages — including colors, fonts, and positioning.",
          buttonName: "Learn CSS"
        },
        {
          title: "JavaScript",
          description: "JavaScript is a programming language that adds interactivity, animations, and logic to websites.",
          buttonName: "Learn JavaScript"
        },
        {
          title: "TypeScript",
          description: "TypeScript is a superset of JavaScript that adds static types for improved development experience and error checking.",
          buttonName: "Learn TypeScript"
        },
        {
          title: "Python",
          description: "Python is a high-level, beginner-friendly language known for its readability and use in web, AI, and automation.",
          buttonName: "Learn Python"
        },
        {
          title: "C++",
          description: "C++ is a powerful, high-performance language used for systems programming, game development, and applications requiring speed.",
          buttonName: "Learn C++"
        },
        {
          title: "Java",
          description: "Java is a versatile, object-oriented programming language commonly used in enterprise applications, Android development, and more.",
          buttonName: "Learn Java"
        },
        {
          title: "PHP",
          description: "PHP is a server-side scripting language used to create dynamic web pages and web applications.",
          buttonName: "Learn PHP"
        },
        {
          title: "SQL",
          description: "SQL (Structured Query Language) is used to manage and query data in relational databases.",
          buttonName: "Learn SQL"
        }
      ]
      
  return (
    <>
        <div className="Resources flex flex-col justify-center items-center ml-65 mr-2 mt-20 ">
            <h1>Resources</h1>
            <p>This is the resources page.</p>
            <div className="resources-list">
            <h2 className='available'>Available Resources</h2>
                <div className="grid grid-cols-3 gap-4 ">
                    {Languages.map((data, index) => (
                        <Rcard key={index} data={data} />
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Resources