import backgroundImage from '../../assets/Home_bg.svg'
import AlgoManiacZ from '../../assets/Image-removebg.png'
import discord from '../../assets/discord.png'

const Home = () => {
  return (
    <div
      className="md:h-[calc(100vh-112px)] md:w-[100vw] h-[calc(100vh-112px)] bg-no-repeat bg-cover bg-center md:bg-left lg:bg-left xl:bg-left text-[#aeadaa]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className='mx-auto items-center flex h-[100%] justify-center md:w-[80%] lg:w-[70%] xl:w-[60%]'>
        <div className='items-center flex flex-col h-[60%] w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]'>
          <img className="w-[90%] h-[20%] md:w-[80%] md:h-[40%] lg:h-[40%] lg:w-[70%] xl:w-[100%] xl:h-[35%] " src={AlgoManiacZ} alt="algomaniacZ" />
          <h1 className='text-[#B05333] text-3xl font-bold  md:text-4xl lg:text-4xl'>#AlgoManiacZ</h1>
          <button className='bg-[#121414] p-[18px] mt-[20%] md:mt-12 rounded-[20px] w-[90%] md:w-[70%] lg:w-[60%] xl:w-[60%]'>
            <div className='flex items-center justify-center box-border'>
              <img className="w-[28px] h-[28px]" src={discord} alt="discord" />
              &nbsp;
              &nbsp;
              <h1 className='font-bold text-lg'>JOIN OUR DISCORD</h1>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Home
