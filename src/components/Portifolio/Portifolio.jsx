import React from 'react'
import Title from '../Title'
import pic from "../../assets/img/9.png"
const Portifolio = () => {
  return (
    <section
      id="About-us"
      className="flex justify-between items-center max-container w-full gap-10 max-lg:flex-col padding-y"
    >
      <div className="flex flex-1 flex-col">
        <Title
          title1={"What Do "}
          coloredTit={"You Know"}
          title2={"About US"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when unknown printer took a galley of type and scrambled it to make a type specimen book. It has not only five centuries"
          }
         
        />
        <div className="my-10">
        <button className="spcBtn">Read More</button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img loading="lazy"
          src={pic}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain rounded-3xl"
          unselectable='on'
        />
      </div>
    </section>
  )
}

export default Portifolio