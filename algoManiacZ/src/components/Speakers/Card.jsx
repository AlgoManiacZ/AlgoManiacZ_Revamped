/* eslint-disable react/prop-types */
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import cardBackground from '../../assets/cardBackgroundImage.svg'


const Card = ({name,imageUrl,about,linkedin,github}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto my-4 py-4  bg-[#000000]  bg-no-repeat bg-cover bg-center transition-all ease-in-out  hover:scale-105 hover:shadow-lg hover:shadow-hoverOrange "

     style={{
        backgroundImage: `url(${cardBackground})`,
      }}
    
    >
      <div className="flex items-center justify-center h-40 ">
        <img
          className="w-36 h-36 object-cover rounded-full"
          src={imageUrl}
          alt="Card Image"
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl text-center mb-2 text-hoverOrange">{name}</div>

        <p className="text-gray-700 text-base">
         {about}
        </p>
      </div>

      <div className="px-6 py-4 flex items-center justify-center">
        <a
          href={linkedin}
          className="text-gray-700 text-3xl mr-4 hover:text-blue-500 transition-all ease-in-out hover:text-[#0077b5] hover:scale-110"
        >
          <AiFillLinkedin />
        </a>
        <a
          href={github}
          className="text-gray-700 text-3xl hover:text-blue-500 transition-all ease-in-out hover:text-hoverTextColor hover:scale-110"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  )
}

export default Card
